var mongoose =require("mongoose")

var userschema = mongoose.Schema({
    name:String,
    rollno:String,
    email:String,
    password:String
})

var user_schema=mongoose.model("users",userschema)

module.exports = user_schema
