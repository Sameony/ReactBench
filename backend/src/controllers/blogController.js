
const Blog = require("../model/Blog")

const addBlog = async ({Title,Author, Likes, Content, Category}) =>{
    try{
        if(!Title || !Content)
            throw "incomplete arguments"
        let response = Category?await Blog.create({Title,Author,Category, Content }):await Blog.create({Title,Author, Content })
        if(!response)
            throw "Something went wrong. Please try again later"
        else
            return {msg:"Blog posted successfully", data:response}
    }catch(error)
    {
        return {data:null, msg:error}
    }
}
const removeBlog = async ({id}) =>{
    try{
        let response = await Blog.findByIdAndRemove({_id:id})
        console.log(response)
        if(!response)
            throw "Something went wrong. Please try again later"
        else
            return {msg:"Blog post removed successfully", data:response}
    }catch(error)
    {
        return {data:null, msg:error}
    }
}
const updateBlog = async ({id, Title, Likes, Content, Category}) =>{ // ye naam ke parameters merko extract karke do
    try{
        if(!id)
            throw "incomplete arguments"
        let response = await Blog.findByIdAndUpdate({_id:id},{Title, Likes, Category, Content})
        if(!response)
            throw "Something went wrong. Please try again later"
        else
            return {msg:"Blog updated successfully", data:response}
    }catch(error)
    {
        return {data:null, msg:error}
    }
}

const fetchAllBlogs = async () =>{
    try{
        let response = await Blog.find()
        if(!response)
            throw "Something went wrong. Please try again later"
        else
            return {msg:"Blogs fetched successfully", data:response}
    }catch(error)
    {
        return {data:null, msg:error}
    }
}

const addToFav = async ({id}) =>{
    try{
        let response = await Blog.findById({_id:id})
        let likeUpdate;
        
        if(!response)
            throw "Blog not found"
        else
        {
            if(response.Likes===1)
                likeUpdate = await Blog.findByIdAndUpdate({_id:id},{Likes:0})
            else
                likeUpdate = await Blog.findByIdAndUpdate(response._id,{ Likes:1})  
            
        }
    
        if(likeUpdate)
            return {msg:response.Likes?"Blog post remove to favourites":"Blog post added to favourites", data:likeUpdate}
        else 
            throw "Something went wrong."
    }catch(error)
    {
        return {data:null, msg:error}
    }
}

const fetchBlogById = async ({id}) =>{
try{
    let response = await Blog.findById({_id:id})
   
    if(!response)
        throw "Blog not found"
    else
    {
        return {msg:"Blog fetched successfully", data:response}
    }
}catch(error)
{
    return {data:null, msg:error}
}
}
module.exports = {addBlog, addToFav, removeBlog, updateBlog, fetchAllBlogs, fetchBlogById}