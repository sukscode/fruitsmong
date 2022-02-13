
import { MongoClient } from "mongodb";
import assert from "assert";
// Connection URl
const url="mongodb://localhost:27017";
// database name
const dbName="fruitsDB";
//mongoclient
const client = new MongoClient(url);

//connecting to server
client.connect(function(err){
    assert.equal(null,err);
    console.log("connected successfully to server");

    const db=client.db(dbName);
    //insertDocuments(db,function(){
        findDocuments(db,function(){
    client.close();
    });
});

const insertDocuments=function(db,callback){
    const collection=db.collection("fruits");
    collection.insertMany([
        {name:"Apple",score:8,review:"great fruit"},
        {name:"Orange",score:6,review:"Kinda Sour"},
        {name:"Banana",score:9,review:"Great Stuff!!"}
    ],function(err,result){
        assert.equal(err,null);
        //assert.equal(3,result.result.n);
        //assert.equal(3,result.ops.length);
        console.log("Inserted 3 documents ");
        callback(result);

    });
};


const findDocuments=function(db,callback){
    const collection=db.collection("fruits");
    collection.find({}).toArray(function(err,fruits){
        assert.equal(err,null);
        console.log("found the records");
        console.log(fruits);
        callback(fruits);
    });
};