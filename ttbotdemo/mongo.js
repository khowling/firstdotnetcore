var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;

var url = ""
var db;

MongoClient.connect(url, (err, database) => {
    if(err) throw err;
    console.log("Connected correctly to server");

    db = database;
    

    var collection = db.collection('myaccount');
    /* 
    collection.insertOne(
        {type : "case", name: "from node", date: "Today", status: "OK"}, function(err, result) {
            console.log(JSON.stringify(result));
           });
    */

    collection.update(
        { type: "subscriber" },
        { $set: { "install.firmware-version":  "test11" }}
    ).then((succ) => {
        console.log (`ok : ${succ}`)
        db.close();
    }, (err) => {
        console.log (err)
        db.close();
    })

    
});