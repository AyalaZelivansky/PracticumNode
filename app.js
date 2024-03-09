var express=require('express');
const users = require('./models/users');
const userRouter =require('./routers/users')
const mongoose = require('mongoose')
var app=express();

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/usersdb');
  console.log("coneect");
  }

app.use(express.json())

app.use('/users',userRouter);
app.listen(8000,()=>{
    console.log("port 8000")
})