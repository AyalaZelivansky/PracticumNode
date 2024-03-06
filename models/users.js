const mongoose = require('mongoose')
const Joi=require("joi")

const UsersSchema=new mongoose.Schema({
    userId:Number,
    phone:Number,
    name:String,
    email:String
})


module.exports=mongoose.model('Uswwer',UsersSchema)

exports.validUser=(bodyData)=>{
    const joiSchema=Joi.object({
        phone:Joi.number().min(7).max(13),
        name:Joi.string().min(2).max(99),
        // לברר פרטי וילידציה על המייל
        email:Joi.string()
    })
    return joiSchema.validate(bodyData)
}