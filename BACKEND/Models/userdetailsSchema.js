const mongoose=require("mongoose")



const userDetailSchema =mongoose.Schema({
    // Image:{type:Image},
   firstname : {type:String},
   lastname : {type:String},
   cityaddress : {type:String},
   address2 : {type:String},
   email : {type:String},
   phone : {type:Number},
   pin : {type:Number},
   district : {type:String},


 
   
    

})
const Details =mongoose.model("Phone",userDetailSchema)
module.exports= Details 