using System;
using System.Threading.Tasks;


using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Newtonsoft.Json;

namespace dnconsole
{
    public sealed class CosmoDriver {

        static readonly CosmoDriver _instance = new CosmoDriver();
        
        /* static Property */
        public static CosmoDriver Instance  {
            get { return _instance; }
        }

        CosmoDriver()
        {
            // Initialize.
        }

        public DocumentClient client {get; set;}
        public DocumentCollection coll {get;set;}

        public static async  Task<DocumentCollection> InitDocAsync(string endpointUrl, string acckey, string dbid, string collid)  {
            // 2 connection modes, "Gateway" (HTTPS) when accessing from corp network firewalls (443), and (Direct TCP) (10000-20000) when on Azure
            // To allow efficient connection management and better performance by DocumentClient, use a single instance of DocumentClient per AppDomain for the lifetime of the application.

            DocumentClient client = new DocumentClient(new Uri(endpointUrl), acckey, new ConnectionPolicy {
                ConnectionMode = ConnectionMode.Direct,
                ConnectionProtocol = Protocol.Tcp
            });

            await client.CreateDatabaseIfNotExistsAsync(new Database { Id = dbid });
            //Create a new collection with an OfferThroughput set to 10000
            //Not passing in RequestOptions.OfferThroughput will result in a collection with the default OfferThroughput set. 
            return await client.CreateDocumentCollectionIfNotExistsAsync(
                UriFactory.CreateDatabaseUri(dbid), 
                new DocumentCollection { Id = collid });

        }


    }
}