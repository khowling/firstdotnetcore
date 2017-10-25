using System.Threading.Tasks;
using System;

using System.Collections.Generic;
using System.Linq;

namespace dnconsole
{
    static class LearnCollections_Linq {
 
 
        public static void DeconstructionTupleTest() {

             (string, string, string) LocalFunctionLookupName(string id) {
                var res = id.Split(" ");
                return (res[0], res[1], res[2]);
            }
            var (fist,middle,last) = LocalFunctionLookupName("Keith John Howling"); // deconstructing declaration
            Console.WriteLine($"first {fist} midd {middle} last {last}");
        }

        public static void ArraysListsAndMapsANDLINQ() {

            
            var anonType = new {key1 = "val1", key2 = "val2"};
            Console.WriteLine ($"initialise anonomous type (good for JSON structures) {anonType}");
            string key1 = "val1", key2 = "val2";
            var anonType2 = new {key1, key2};
            Console.WriteLine ($"initialise anonomous type (with infered key values from variable names) {anonType2}");


            // Arrays (buiit in type) 
            // are most useful for creating and working with a fixed number of strongly-typed objects
            var a1 =  new []{"val1", "val2"};
            var ss = new string[]{"ARRAY", "john"};
            foreach (var s in ss) {
                Console.WriteLine (s);
            }
            // Collections provide a more flexible way to work with groups of objects. 
            // Unlike arrays, the group of objects you work with can grow and shrink dynamically 

            // If your collection contains elements of only one data type, you can use one of the classes in the System.Collections.Generic namespace

            // List (System.Collections.Generic)
            var array = new List<string>() {"LIST", "bob"};  
            array.Add("chinook");  
            array.Add("coho");  
            Console.WriteLine("\n--List");

            foreach (var s in array) {
                Console.Write ($"foreach:{s} ");
            }
            array.ForEach(  
                entry => Console.Write($"ForEach:{entry} "));


            Console.WriteLine("\n--LINQ Select");
            var arrayofsizes = array.Select(x => x.Length);
            Console.WriteLine(String.Join(", ",arrayofsizes));

            Console.WriteLine("\n--LINQ Where");
            // System.Linq.Enumerable
            Console.WriteLine ($"count of list elements over length : {array.Where(i => i.Length >3).Count()}");

            // MAP
            var myMap = new Dictionary<string, string>(){ {"1", "keith"}, {"2", "bob"}} ;
            myMap.Add("txt", "notepad.exe");
            Console.WriteLine("\n--Map");
            Console.WriteLine(myMap["2"]);
            foreach (var m in myMap) {
                Console.WriteLine ($"{m.Key} :: {m.Value}");
            }

        }
    }

}