const mongoose = require("mongoose")



const userDetailSchema = mongoose.Schema({
    // Image:{type:Image},
    Phonename: { type: String },
    Brand: { type: String },
    Price: { type: Number },
    Raiting: { type: Number },







})
const AddDetails = mongoose.model("addPhone", userDetailSchema)
module.exports = AddDetails 