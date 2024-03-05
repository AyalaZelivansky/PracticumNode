const mongoose = require('mongoose')

const UsersSchema=new mongoose.Schema({
    userId:Number,
    phone:Number,
    name:String,
    email:String
})



module.exports=mongoose.model('Uswwer',UsersSchema)