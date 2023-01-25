import React , {useEffect, useState} from 'react'
import "../Styles/allBlogs.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
const AllBlogs = () => {
    const pathname = "http://localhost:3001"
    const [blogs, setBlogs]=useState([])
    useEffect(() => {
        getData()
       }, [])


       const getData = async() =>{
           await axios.post(pathname+"/fetchAllBlogs").then((response)=>{
               setBlogs(response.data.data)
           })
       }
       const likeBlog = async(blogId) =>{
        await axios.post(pathname+"/addToFav",{id:blogId})
        await getData();
    }

  return (
    blogs.map((ele, index)=>{
        return <div key={index} id="blogCard" title={"Read more about "+ele.Title} >
            <div className="titleHead">
                {ele.Title}
                <i style={ele.Likes?{color:"red", fontWeight:"900", cursor:"pointer"}:{color:"red", cursor:"pointer"}}
                 className="fa-regular fa-heart" onClick={()=>likeBlog(ele._id)}></i>
                </div>
            <div className="subHead">{ele.Author}{ele.Time}</div>
            
            <div className="contentBrief">{ele.Content.length>200?ele.Content.slice(0,200)+"...":ele.Content}</div>
            <div>{ele.isLiked}</div>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <div className="categoryBlock">{ele.Category} </div>
                <Link to={`/blogs/${index}`} className='btn btn-primary'>Read More</Link>
            </div>  
        </div>
    })
  )
}

export default AllBlogs