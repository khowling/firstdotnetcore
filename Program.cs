using System;

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
using Microsoft.AspNetCore.Server.Kestrel; // required for the "UseKestrel" extension method on the WebHost class
using Microsoft.AspNetCore.Builder; // required for the "Run" extension method on the Application class

using Microsoft.AspNetCore.Http; // required for WriteAsync

using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Newtonsoft.Json;

namespace dnconsole
{
    class Program
    {
        static void Main(string[] args)
        {

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
            InitDocAsync(DOCDB_EMULATOR_ACC_NAME, DOCDB_EMULATOR_KEY , "ttdb", "router");

            Action<IApplicationBuilder> myapp = (app) => {
                // The Run method short circuits the pipeline (that is, it will not call a next request delegate, Run should only be called at the end of your pipeline

                app.Map("/create", (app1) => {
                    app1.Run(async context => {
                        Document doc = await cosmodbclient.CreateDocumentAsync(coll.SelfLink,  JObject.FromObject(new { channel = "new"}));
                        await context.Response.WriteAsync(doc.Id);
                    });
                });

                app.Run(async (context) => {
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
                .Build();

                //return await client.ReadDocumentAsync(UriFactory.CreateDocumentUri(dbid, collid, family.Id));
            host.Run();

            Console.WriteLine("My Hello World!");
            //Console.WriteLine(ProcessRepositories().Result);

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

            cosmodbclient = new DocumentClient(new Uri(endpointUrl), acckey, new ConnectionPolicy {
                ConnectionMode = ConnectionMode.Direct,
                ConnectionProtocol = Protocol.Tcp
            });

            await cosmodbclient.CreateDatabaseIfNotExistsAsync(new Database { Id = dbid });
            //Create a new collection with an OfferThroughput set to 10000
            //Not passing in RequestOptions.OfferThroughput will result in a collection with the default OfferThroughput set. 
            coll = await cosmodbclient.CreateDocumentCollectionIfNotExistsAsync(
                UriFactory.CreateDatabaseUri(dbid), 
                new DocumentCollection { Id = collid });
            
            return;
        }


    }
}
