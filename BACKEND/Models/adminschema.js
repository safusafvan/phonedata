const mongoose=require("mongoose")



const userSchema =mongoose.Schema({
    name : {type:String},
    email:{type:String},
    password:{type:String}, 
    

})
const Admin =mongoose.model("admin",userSchema)
module.exports= Admin  