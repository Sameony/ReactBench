const mongoose = require("mongoose");


const Blog = mongoose.Schema({
    Title:{ type:String, required:true},
    Likes:{type:Number, default:0},
    Category:{ type:String, default:"Miscellaneous"},
    Content:{ type:String, required:true},
    Author:{type:String, required:true}

}, {timestamps:true})

module.exports = mongoose.model("Blog", Blog)

