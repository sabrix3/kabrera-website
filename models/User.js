const mongoose = require('mongoose')

const {Schema, model} = mongoose

const userSchema = new Schema({
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    role: {type:Number, default:0}
})

module.exports = User = model('User', userSchema)