const mongoose = require('mongoose')
const Joi = require("joi")

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/usersdb');
// console.log("coneect");
// }

const UsersSchema = new mongoose.Schema({
    userId: String,
    phone: Number,
    name: String,
    email: String
})

const UserModel=mongoose.model('User', UsersSchema)
exports.UserModel=UserModel

exports.validUser=(_bodyData)  =>{
    let joiSchema = Joi.object({
        // phone: Joi.number().min(7),
        name: Joi.string().min(2).max(99),
        email: Joi.string().email({ tlds: { allow: false } }),
        userId:Joi.string()
    })
    return joiSchema.validate(_bodyData)
}

