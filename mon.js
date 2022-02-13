//mongoose
import mongoose from 'mongoose';
//Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please check"]
    },
    rating:{
        type:Number,
        min:1,
        max:5
    },
    review:String
});

const Fruit=mongoose.model("Fruit",fruitSchema);

const fruit=new Fruit({
    name:"Banana",
    rating:4,
    review:"Awesome"
});
//fruit.save();
Fruit.find(function(err,fruits){
    if(err){
        console.log(err);
    }else{
        //console.log(fruits);
        mongoose.connection.close();
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        })
    }
});

Fruit.updateOne({_id:"62093ca4c304e9b173144f5c"},{name:"Peach"},function(err){
    if(err){
        console.log(err);
        }else{
            console.log("Done");
        }
    });