
import mongoose from "mongoose";
import { Todo } from "./models/Todo.js";

import express from "express";
const app=express()

const conn=await mongoose.connect('mongodb://127.0.0.1:27017/todo')
const port=3000

app.get('/', (req, res) => {
    const todo = new Todo({ title: "Hello Brother", desc: "Hello brother whats that. Ewww", isDone: true });
    // todo.save();
    res.send('Hello world');
})

app.get('/result', (req, res) => {
    Todo.find({}).then(function(student){
        res.json(student)
    }).then(() => {console.log("Results fetched...")})
    // todo.save();

})

app.get('/update',(req,res) => {
    Todo.findOneAndUpdate({isDone:true},{isDone:false}).then(() => {console.log("boolean updated...")})
})

app.get('/delete',(req,res) => {
    Todo.deleteOne({title:"Hello Brother"}).then(() => {console.log("boolean updated...")})
})


app.listen(port,()=>{
    console.log(`Listen On ${port}`);
})