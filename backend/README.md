
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

## initialisers / anonymous types

`Object initializers` let you assign values to any accessible `fields` or `properties` of an object at creation time
with a named type (Cat with defined properties `Age` `Name`):

`Cat cat = new Cat { Age = 10, Name = "Fluffy" };`


with `anonymous` types (especially useful in LINQ query expressions)
`var pet = new { Age = 10, Name = "Fluffy" };`
NOTE: `Anonymous types` provide a convenient way to encapsulate a set of read-only properties into a single object without having to explicitly define a type first

If you do not specify member names in the anonymous type, the compiler gives the anonymous type members the same name as the property being used to initialize them
```
var key = "val"
new {key}
```

Array initialisers
var sarr = new []{"one", "two"}


## async
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/index

NODEJS NOTE: Task<> ==  Promise,  "async" method ~== generator function (can be paused),  "await" === yield

a method with the "async" modifier (generator function) contains a method call using the "await" keyword to do potentially long-running work without blocking the caller’s execution, by yielding control back to the caller while waiting for the result. 

Calling a `async` methods will execute the method until the the 1st statement with a `await` keywork is encountered, then it executes the statement, but returns execution to the caller, returning a unresolved 'Task'. When the await'ed statement completes, the program event loop then continues execution of remaining statements in the same fashion.  Therefore, "async" methods need to have an `await` keyword in their body or they will just run synchronously. 

A `Task` is returned that Represents an asynchronous operation in c# (Talk == Promise), in the calling method, you can then:
    * `await` if caller is a async method itsself
    * `.Wait()` if its a normal method, but this will block the thread
    * `.Result` is to get the result, but this will block the thread

* Declaring a method with the `async` modifier means that it can contain `await` expressions in its body.
* You can `await` any method that returns a Task or Task<T> without declaring with the `async` modifier

 * `async void Method()` : method can contain awaits, but doesnt return a Task to the caller, so the caller cannot control flow or get result (fire and forget)
 * `async Task Method()` : returns a Task to the caller method for control flow, but no return value
 * `async Task<int> Method()` : returns a Task to calling method that yields a value

 For _parallel_ tasks, you can :
 
  * `Task.WaitAll` but will BLOCK thread
  * `await Task.WhenAll` is better

.NET Core contain many members that work with async and await. You can recognize them by the "Async" suffix that’s appended to the member name, and by their return type of Task or Task<TResult>. `HttpClient` supports only async methods


you can create a 'Task', 

https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-7#generalized-async-return-types
async methods may return other types in addition to Task, Task<T> and void.  The returned type must still satisfy the async pattern, meaning a GetAwaiter method must be accessible. As one concrete example, the `System.Threading.Tasks.Extensions.ValueTask` type has been added to the .NET framework to make use of this new language feature: 

async ValueTask<int> Func() {
    await Task.Delay(100);
    return 5;
}

## Deconstruction
deconstructing declaration is a syntax for splitting a tuple (or other value) into its parts and assigning those parts individually to fresh variables
```
(string, string, string) LookupName(string id) {
    return ("k","j","h");
}
var (fist,middle,last) = LookupName(id1); // deconstructing declaration
```

## Local Functions

Private methods of a type that are nested in another member. They can only be called from their containing member
<modifiers: async | unsafe> <return-type> <method-name> <parameter-list>

```
string AppendPathSeparator(string filepath)
{
    if (! filepath.EndsWith(@"\"))
        filepath += @"\";

    return filepath;   
}
```


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


