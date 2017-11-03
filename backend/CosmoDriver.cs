using System;
using System.Collections.Generic; // Collection, List etc
using System.Linq; // Collection : Where Select etc

using System.Threading.Tasks;


using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Linq;
using Microsoft.Azure.Documents.Client;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

using System.Net.WebSockets; // required for WebSockets


namespace dnconsole  {
    public sealed class CosmoDriver {

        private Task _initPromise;
        static  CosmoDriver _instance;
        
        
        // call this FIRST to initilaise
        public static void InitCosmoDriver(string endpointUrl, string acckey, string dbid, string[] collections) {
            if (_instance == null) {
                _instance = new CosmoDriver();
                _instance._initPromise = _instance.InitCosmosClientAsync(endpointUrl, acckey, dbid, collections);
            } else {
                throw new System.Exception("CosmoDriver is a singleton and has already been initiallised.");
            }
        }


        /* static Property */
        public static CosmoDriver Instance  {
            get {   
                    // if first time a program has requested the driver, start initialisation promise
                    if (_instance == null) {
                        throw new System.Exception("CosmoDriver: call CosmoDriver.InitCosmoDriver first!");
                    } else {
                        return _instance; 
                    }
                }
        }


        public DocumentClient client {get; set;}
        public Database db {get;set;}
        public DocumentCollection coll {get;set;}
        public  Dictionary<string, DocumentCollection> colls = new Dictionary<string, DocumentCollection>();

        public  async Task InitCosmosClientAsync(string endpointUrl, string acckey, string dbid, string[] collections)  {
            // 2 connection modes, "Gateway" (HTTPS) when accessing from corp network firewalls (443), and (Direct TCP) (10000-20000) when on Azure
            // To allow efficient connection management and better performance by DocumentClient, use a single instance of DocumentClient per AppDomain for the lifetime of the application.
            Console.WriteLine($"InitCosmosClientAsync: DocumentClient {endpointUrl}");
            this.client = new DocumentClient (new Uri(endpointUrl), acckey//, 
            //new ConnectionPolicy {
            //    ConnectionMode = ConnectionMode.Direct,
            //    ConnectionProtocol = Protocol.Tcp
            //}
            );
            Console.WriteLine($"InitCosmosClientAsync: CreateDatabaseIfNotExistsAsyncdbid {dbid}");
            this.db = await client.CreateDatabaseIfNotExistsAsync(new Database { Id = dbid });

            //Create a new collection with an OfferThroughput set to 10000
            //Not passing in RequestOptions.OfferThroughput will result in a collection with the default OfferThroughput set. 
            var tasks = collections.ToDictionary(i => i, i =>  {
                Console.WriteLine($"InitCosmosClientAsync: CreateDocumentCollectionIfNotExistsAsync {i}");
                return client.CreateDocumentCollectionIfNotExistsAsync(
                    UriFactory.CreateDatabaseUri(dbid), 
                    new DocumentCollection { Id = i });
                //task.Start();
            });

            // Creates a task that will complete when all of the supplied tasks have completed.
            await Task.WhenAll (tasks.Values);
            foreach (var c in tasks) {
                colls.Add (c.Key, c.Value.Result);
            }

            // initiate changefeed - fire and forget
            RunFeedProcessor(UriFactory.CreateDocumentCollectionUri(dbid,colls["router01"].Id));

            Console.WriteLine($"InitCosmosClientAsync: Done");
        }

        public async Task<ResourceResponse<Document>> insert(string col, JObject doc) {

            Console.WriteLine($"({_instance._initPromise.Status}) inserting into {col} {colls[col].SelfLink}");
            await _instance._initPromise;
            return await this.client.CreateDocumentAsync(colls[col].SelfLink, doc);
        }        

        private Dictionary<string, string> checkpoints = new Dictionary<string, string>();
        private  async Task RunFeedProcessor(Uri collectionUri)
        {
            Console.WriteLine("Reading all changes from the beginning");
            //Keep polling for the changes
            do
            {
                checkpoints = await GetChanges(this.client, collectionUri, checkpoints);
                Console.Write(".");
                await Task.Delay(2000);
            } while (true);

        }
    
        public List<WebSocket> pushClients {get;set;}


        /* Change Feed */
         private  async Task<Dictionary<string, string>> GetChanges(
                                                DocumentClient client,
                                                Uri collectionUri,
                                                Dictionary<string, string> checkpoints)
        {
            int numChangesRead = 0;
            //Starts with Null
            string pkRangesResponseContinuation = null;

            List<PartitionKeyRange> partitionKeyRanges = new List<PartitionKeyRange>();
            do
            {
                //Get the paritionkeyRange
                FeedResponse<PartitionKeyRange> pkRangesResponse = await client.ReadPartitionKeyRangeFeedAsync(
                                                    collectionUri,
                                                    new FeedOptions { RequestContinuation = pkRangesResponseContinuation });
                partitionKeyRanges.AddRange(pkRangesResponse);
                pkRangesResponseContinuation = pkRangesResponse.ResponseContinuation;
            }
            while (pkRangesResponseContinuation != null);

            //Read the data for every partition
            foreach (PartitionKeyRange pkRange in partitionKeyRanges)
            {
                string continuation = null;
                checkpoints.TryGetValue(pkRange.Id, out continuation);
                IDocumentQuery<Document> query = client.CreateDocumentChangeFeedQuery(
                    collectionUri,
                    new ChangeFeedOptions
                    {
                        PartitionKeyRangeId = pkRange.Id,
                        StartFromBeginning = true,
                        RequestContinuation = continuation,
                        MaxItemCount = -1,
                        // Set reading time: only show change feed results modified since StartTime
                        StartTime = DateTime.Now - TimeSpan.FromSeconds(30)
                    });
                while (query.HasMoreResults)
                {
                    FeedResponse<dynamic> readChangesResponse = query.ExecuteNextAsync<dynamic>().Result;

                    foreach (dynamic changedDocument in readChangesResponse)
                    {

                        pushClients.ForEach((WebSocket wsClient) =>  {
                            Console.WriteLine($"Sending document to connected client {changedDocument}");
                            var encoded = System.Text.Encoding.UTF8.GetBytes(Convert.ToString(changedDocument));
                            wsClient.SendAsync(new ArraySegment<Byte>(encoded, 0, encoded.Length), WebSocketMessageType.Text, true, System.Threading.CancellationToken.None);
                        });
                        //Console.ForegroundColor = ConsoleColor.Green;
                        //Console.WriteLine("\tRead document {0} from the change feed.", changedDocument.id); //For Mongo it is "id" and for document it is "Id"
                        //Console.ForegroundColor = ConsoleColor.Yellow;
                        //Console.WriteLine("\tdocument: {0} \n\r", changedDocument); 
                        numChangesRead++;
                    }
                    Console.ForegroundColor = ConsoleColor.White;
                    checkpoints[pkRange.Id] = readChangesResponse.ResponseContinuation;
                }
            }
            return checkpoints;
        }
    }
    
}