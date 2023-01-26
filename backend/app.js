const express = require("express");
const PORT = process.env.port || 3001;
const app = express();
const dbconn = require("./src/config/db")
const bodyParser = require("body-parser");
const cors = require('cors')
const Blog = require("./src/model/Blog");
const  {addBlog, addToFav, removeBlog, updateBlog, fetchAllBlogs, fetchBlogById} = require("./src/controllers/blogController")
dbconn();

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


//listen

app.post("/addBlog",async(req,res,next)=>{
    let result = await addBlog(req.body)
    if(result.data)
    {
        res.status(200).send(result)
    }
    else
    {
        res.status(400).send(result)
    }

})
app.post("/removeBlogById",async(req,res,next)=>{
    let result = await removeBlog(req.body)
    if(result.data)
    {
        res.status(200).send(result)
    }
    else
    {
        res.status(400).send(result)
    }

})
app.post("/fetchAllBlogs",async(req,res,next)=>{
    let result = await fetchAllBlogs(req.body)
    if(result.data)
    {
        res.status(200).send(result)
    }
    else
    {
        res.status(400).send(result)
    }

})
app.post("/updateBlog", async(req,res,next)=>{
    let result = await updateBlog(req.body)
    console.log(req.body)
    if(result.data)
    {
        res.status(200).send(result)
    }
    else
    {
        res.status(400).send(result)
    }

})
app.post("/addToFav",async(req,res,next)=>{
    let result = await addToFav(req.body)
    if(result.data)
    {
        res.status(200).send(result)
    }
    else
    {
        res.status(400).send(result)
    }

})
app.post("/fetchBlogById", async(req,res,next)=>{
    let result  = await fetchBlogById(req.body)
    if(result.data)
    {
        res.status(200).send(result)
    }
    else
    {
        res.status(400).send(result)
    }
})

const server = app.listen(PORT, () =>{
    console.log("Server running on :",PORT)
})