import { assert } from "console";
import { MongoClient } from "mongodb";
// Connection URl
const url="mongodb://localhost:27017";
// database name
const dbName="myproject";
//mongoclient
const client = new MongoClient(url);

//connecting to server
client.connect(function(err){
    assert.equal(null,err);
    console.log("connected successfully to server");

    const db=client.db(dbName);
    client.close();
});