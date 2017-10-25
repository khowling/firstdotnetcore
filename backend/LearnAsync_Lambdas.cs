using System.Threading.Tasks;
using System;

namespace dnconsole
{
    static class LearnAsync_Lambdas {


        static async Task<int> TestAsync() {
            Console.WriteLine ("Async method returning a value");
            int i = 0;
            await Task.Delay(1000);
            Console.WriteLine("TestAsync - start");
            i++;
            await Task.Delay(1000);
            Console.WriteLine("TestAsync - midway");
            i++;
            Console.WriteLine("TestAsync - end");
            return i;
        }

        static void Testing() {

            // async method that returns a value after 1sec
            Func<int, Task<int>> f1 = async (x) => {
                await Task.Delay(1000);
                return x+1 ;
            };

            // async void method 
            Action a = async () => {

                Action test_action = async () => {
                    var name = "name";
                    Console.WriteLine($"{name} async act_test starting");
                    await Task.Delay(1000);
                    Console.WriteLine($"{name} asyncact_test ending");
                };

                Console.WriteLine("creating a new Task(), from test_action, this is NOT run the action!");
                var task1 = new Task(test_action);
                await Task.Delay(1000);
                Console.WriteLine($"task1 status :{task1.Status}:, now run task1");
                task1.Start();
                Console.WriteLine($"task1 status :{task1.Status}:");
                await task1;
                Console.WriteLine($"task1 status :{task1.Status}:");
            };

            // this should block the thread until complete
            //var t = f1(1);

            a();
          
            //Console.WriteLine ($"res {task1.Result} : {DateTime.Now}");
        }

        public static void Run() {

            //Testing();
            
            Console.WriteLine($"Before Call {DateTime.Now}");
            Task<int> task = TestAsync(); // i = Task<int>
            Console.WriteLine($"started the async method 'TestAsync', Status: {task.Status}");
            //Console.WriteLine($"this will block the thread until Result is the Task result is ready ret={task.Result} {DateTime.Now}");
            Console.WriteLine($"now the Task Status is: {task.Status}");
            
        }
    }
}