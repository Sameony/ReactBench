const mongoose = require("mongoose")

const dbConn = async () =>{
    try{
        const conn = await mongoose.connect("mongodb+srv://teacher:!Password123@cluster0.eqsmq3y.mongodb.net/Blogs")
    console.log("DB connection successfull");
    }catch(err){
        console.log("Connection failed: ",err)
    }
}

module.exports = dbConn;