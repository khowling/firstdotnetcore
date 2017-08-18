
# My First C# App ever (just learning)

### create project

` > dotnet new console -o dnconsole `

### add dependency nuget packages

#### best dynamic way to handle json
`> dotnet add package Newtonsoft.Json`

#### to launch a http server with kestral
`> dotnet add package Microsoft.AspNetCore.Hosting`
`> dotnet add package Microsoft.AspNetCore.Server.Kestrel`




# C# learning

## sync
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/index

a method with the "async" _modifier_  contains a method call using the "await" keyword to do potentially long-running work without blocking the caller’s thread

"Task" is returned that Represents an asynchronous operation in c# 

create a method that returns a "Task<TResult>":

` async Task<int> CallWwebAPI()  {..} `

Calling a asyc method from a sync method, use the 'Task.Wait() method to block until finished

` CallWwebAPI().Wait(); `


call a method that returns a task, the execution continues until an 'await' statement is encountered

` Task<string> getStringTask = client.GetStringAsync("http://msdn.microsoft.com") `

the method is 'paused' here until the results are avaiable

` string urlContents = await getStringTask;  `

.NET Core contain many members that work with async and await. You can recognize them by the "Async" suffix that’s appended to the member name, and by their return type of Task or Task<TResult>. `HttpClient` supports only async methods

## Lambda
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/lambda-expressions

A lambda expression is an _anonymous function_ that you can use to create _delegates_ or _expression tree_ types

A delegate is a _type_ that safely encapsulates a `method`, The following example declares a delegate named `d` that can encapsulate a method that takes a `string` as an argument and returns `void`: 

` public delegate void MyDelegateType (string s); `

### Lambda Expressions 

_parmeters_ => _expression or statement block_ 

` MyDelegateType le = x => x * x; `
` int j = le(5);  `

### Statement Lambdas

when nothing is returned, use ```Action```

`Action <string> fn1 = s => Console.WriteLine($"loggin {s})`

`Func<string, int> fn1 = s => Convert.ToInt32(s)`

` MyDelegateType sl = n => { string s = n + " World"; 
                          Console.WriteLine(s); }; `
#### async lambdas

`
button1.Click += async (sender, e) =>  

        {  
            // ExampleMethodAsync returns a Task.  
            await ExampleMethodAsync();  
            textBox1.Text += "\nControl returned to Click event handler.\n";  
        };  
`


### Express Tree
Expression trees are also used in the dynamic language runtime (DLR) to provide interoperability between dynamic languages and the .NET Framework and to enable compiler writers to emit expression trees instead of Microsoft intermediate language (MSIL)
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/expression-trees/index

When a lambda expression is assigned to a variable of type `Expression<TDelegate>`, the compiler emits code to build an expression tree that represents the lambda expression


#### JSON
https://www.newtonsoft.com/json


https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/stand-alone-json-serialization#mapping-net-types-to-json-types

If you would like to work with JSON directly (accessing keys and values dynamically, without pre-defining a rigid contract), you have several options: 

The `JsonObject` type provided by this sample introduces a weakly-typed representation of the deserialized JSON object

https://docs.microsoft.com/en-us/dotnet/framework/wcf/samples/weakly-typed-json-serialization-sample


