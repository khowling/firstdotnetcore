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
            Action<IApplicationBuilder> myapp = (app) => {
                app.Run(async (context) => {
                    Console.WriteLine ($"context {context.Request.Path}");
                    if (context.Request.Path == "/ghub") {
                        await context.Response.WriteAsync("Hi!");
                    } else {
                        await context.Response.WriteAsync(ProcessRepositories().Result);
                    }
                });
            };

            var host = new WebHostBuilder()
                .UseKestrel()
                .UseWebRoot("public") // (Content Root Path)\public
                // The Configure method is used to specify how the ASP.NET application will respond to HTTP requests.
                // Middleware: Request delegates are configured using Run, Map, and Use extension methods on the IApplicationBuilder instance that is passed into the Configure method
                .Configure(myapp)
                .Build();

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
    }
}
