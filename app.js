var express=require('express');
const users = require('./models/users');
const userRouter =require('./routers/users')

var app=express();

app.use(express.json())

app.use('/users',userRouter);
app.listen(7000,()=>{
    console.log("port 7000")
})