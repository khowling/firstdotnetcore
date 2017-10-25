using System;
using System.Threading; // for "CancellationToken"??
using System.Collections.Generic;
using System.Linq;

// "Task" Represents an asynchronous operation in c# 
// https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.task?view=netframework-4.7
using System.Threading.Tasks;

// Http library for callouts
using System.Net.Http;
using System.Net.Http.Headers;

// use the serializer to convert JSON into C# objects
using Newtonsoft.Json.Linq;

// kestral http server and host
using Microsoft.AspNetCore.Hosting; // required for "WebHostBuilder"
using Microsoft.AspNetCore.Builder; // required for the "Run" extension method on the Application class
using Microsoft.AspNetCore.Http; // required for "WriteAsync"
using Microsoft.AspNetCore.Server.Kestrel; // required for the "UseKestrel" extension method on the WebHost class

// https://www.nuget.org/packages/Microsoft.AspNetCore.WebSockets/
using System.Net.WebSockets; // required for WebSockets

using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Newtonsoft.Json;

using Microsoft.Extensions.Configuration; // for App Insghts JOSN configuration provider

/* 
using Microsoft.ApplicationInsights;
using Microsoft.ApplicationInsights.Extensibility;
*/

using System.IO;

// namespaces are used to organize its  classes/interfaces/struct/enum/delegate, the FQN for a class is namespace.Class
// namespaces can contain ".", and be nested
// 'using' directive obviates the requirement to specify the name of the namespace for every class.
// you can have multiple namespace declications with the same name to add more members
namespace dnconsole
{
    class Program
    {
        public static IConfigurationRoot Configuration { get; set; }
        static void Main(string[] args)
        {
            //LearnCollections_Linq.DeconstructionTupleTest();
            //LearnCollections_Linq.ArraysListsAndMapsANDLINQ();
            //LearnAsync_Lambdas.Run();
/*
            TelemetryConfiguration.Active.InstrumentationKey = 
                "11111111-2222-3333-4444-555555555555";
            TelemetryClient client = new TelemetryClient();
            client.TrackTrace("application starting up.");
*/
            InitAppAsync();
            Console.Read();
        }
        
        private static async void InitAppAsync() {
            Console.WriteLine("InitDocAsync");
            //await InitDocAsync(DOCDB_EMULATOR_ACC_NAME, DOCDB_EMULATOR_KEY , "ttdb01", "router01");
            CosmoDriver.InitCosmoDriver (DOCDB_EMULATOR_ACC_NAME, DOCDB_EMULATOR_KEY , "ttdb01", new string[] {"router01"});
            Console.WriteLine("StartKestralAsync");
            await StartKestralAsync();
            Console.WriteLine("Done");

        }
        

        private static async Task Echo(HttpContext context, WebSocket webSocket) {
            var buffer = new byte[1024 * 4];
            WebSocketReceiveResult result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
            while (!result.CloseStatus.HasValue)
            {
                await webSocket.SendAsync(new ArraySegment<byte>(buffer, 0, result.Count), result.MessageType, result.EndOfMessage, CancellationToken.None);

                result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
            }
            await webSocket.CloseAsync(result.CloseStatus.Value, result.CloseStatusDescription, CancellationToken.None);
        }

        private static Task StartKestralAsync() {
            /*
            ASP.NET Core apps require a host in which to execute. A host references the server that will handle requests
            The host is responsible for application startup and lifetime management, bootstraps the server for the app
            You create a host using an instance of WebHostBuilder.  call CreateDefaultbuilder to build a host, it:
                Sets the content root (location of appsettings.json)
                Loads configuration from (appsettings.json)
                environment variables
                Configures logging for console and debug output
                handles IIS instegration (optional)

            When setting up a host, you can provide Configure and ConfigureServices methods, instead of or in addition to specifying a Startup class 

            ASP.NET Core application runs with an in-process HTTP server implementation
            The server listens for HTTP requests and surfaces them to the application as an "HttpContext"
            ASP.NET Ships with 2 server implementations
             * "Kestrel" is a cross-platform HTTP server based on libuv, it supports features:
                * HTTPS
                * Opaque upgrade used to enable WebSockets
                * Unix sockets for high performance behind Nginx 
             * "HttpSys" is a Windows-only HTTP server based on the Http.Sys kernel driver
            */ 

            Action<IApplicationBuilder> myapp = (app) => {
                
                // This is the application pipeline to handle requests and responses
                //  https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware
                // Ordering is importand:
                
            //    app.UseStaticFiles(); // build in middleware to host static files

                app.UseWebSockets(); // build in middleware 

                //app.UseIdentity();  // built in middleware to Authenticate before you access

                // Request delegates are used to build the request pipeline
                // Request delegates are configured using "Run", "Map", and "Use" extension methods
                // Each delegate can perform operations before and after the next delegate. 
                // A delegate can also decide to not pass a request to the next delegate, which is called short-circuiting the request pipeline


                // You can chain multiple request delegates together with app.Use. 
                // The next parameter represents the next delegate in the pipeline
                // app.Use(async (context, next) => {... await next.Invoke(); }
                // Do not call next.Invoke after the response has been sent to the client


                

                app.Map("/create", (app1) => {
                    Console.WriteLine($"1created doc {"create"}");
                    app1.Run(async context => {
                        Document doc = await CosmoDriver.Instance.insert("router01", JObject.FromObject(new {key1 = new []{new {imbed1 = "val1", imbed2 = "val2"}, new {imbed1 = "val1", imbed2 = "val2"}}}));
                        Console.WriteLine($"created doc {doc.Id}");
                        await context.Response.WriteAsync(doc.Id);
                    });
                });

                app.Map("/ws", (app1) => {
                    app1.Run(async context => {
                        if (context.WebSockets.IsWebSocketRequest) {
                            WebSocket webSocket = await context.WebSockets.AcceptWebSocketAsync();
                            await Echo(context, webSocket);
                        }
                        else {
                            context.Response.StatusCode = 400;
                        }
                    });
                });

                // The Run method short circuits the pipeline (that is, it will not call a next request delegate)
                // Run should only be called at the end of your pipeline

                app.Run(async context => {
                    Console.WriteLine ($"context {context.Request.Path}");
                    await context.Response.WriteAsync("Hi!");
                });
            };

            var host = new WebHostBuilder()
                .UseKestrel()
                .UseWebRoot("public") // (Content Root Path)\public
                // The Configure method is used to specify how the ASP.NET application will respond to HTTP requests.
                // Middleware: Request delegates are configured using Run, Map, and Use extension methods on the IApplicationBuilder instance that is passed into the Configure method
                .Configure(myapp)
                .UseApplicationInsights()
                .Build();

            //return await client.ReadDocumentAsync(UriFactory.CreateDocumentUri(dbid, collid, family.Id));
            return host.RunAsync();
        }

        // the "async" modifier to specify that a method
        // "async" method uses the await keyword to do potentially long-running work without blocking the caller’s thread

        private static async Task<string> ProcessRepositories()
        {
            var client = new HttpClient();
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/vnd.github.v3+json"));
            client.DefaultRequestHeaders.Add("User-Agent", ".NET Foundation Repository Reporter");

            var stringTask = await client.GetStringAsync("https://api.github.com/orgs/dotnet/repos");
            var o = JArray.Parse(stringTask);
            return (string)o[0]["name"];

        }

        static string DOCDB_EMULATOR_ACC_NAME = "https://localhost:8081";
        static string DOCDB_EMULATOR_KEY = "C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==";


        public static DocumentClient cosmodbclient;
        public static DocumentCollection coll;

        public static async Task InitDocAsync(string endpointUrl, string acckey, string dbid, string collid)  {
            // 2 connection modes, "Gateway" (HTTPS) when accessing from corp network firewalls (443), and (Direct TCP) (10000-20000) when on Azure
            // To allow efficient connection management and better performance by DocumentClient, use a single instance of DocumentClient per AppDomain for the lifetime of the application.
            Console.WriteLine($"DocumentClient {endpointUrl}");
            cosmodbclient = new DocumentClient(new Uri(endpointUrl), acckey, new ConnectionPolicy {
                ConnectionMode = ConnectionMode.Direct,
                ConnectionProtocol = Protocol.Tcp
            });
            Console.WriteLine($"CreateDatabaseIfNotExistsAsync {dbid}");
            var db = await cosmodbclient.CreateDatabaseIfNotExistsAsync(new Database { Id = dbid });
            //Create a new collection with an OfferThroughput set to 10000
            //Not passing in RequestOptions.OfferThroughput will result in a collection with the default OfferThroughput set. 
            Console.WriteLine($"CreateDocumentCollectionIfNotExistsAsync {collid}");
            coll = await cosmodbclient.CreateDocumentCollectionIfNotExistsAsync(
                UriFactory.CreateDatabaseUri(dbid), 
                new DocumentCollection { Id = collid });
            
            return;
        }


    }
}
