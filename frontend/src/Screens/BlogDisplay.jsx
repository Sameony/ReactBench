import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../Styles/blogDisplay.css"
const BlogDisplay = () => {
    const {blogID} = useParams()
    const [blog,setBlog] = useState({})
    useEffect(() => {
      getBlogData();
    }, [])
    
    const getBlogData = async(id) =>{
      await axios.post("http://localhost:3001/fetchBlogById",{id:blogID})
      .then(res=>setBlog(res.data.data))
      .catch(err=>console.log(err))
    }
  return (
    <div>
    <div class="scroll">
        <h1 class="header">{blog?.Title}</h1>
        <div class="splitscreen">
          <div class="left">
            <i class="fa-solid fa-user-tie" style={{fontSize:"2rem"}}></i>
            <div>
              <span class="my-name">{blog?.Author} </span>
              <span class="date">{blog?.createdAt?.split("T")[0]} </span>
            </div>
          </div>

            <div class="right">
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linkedin"></i>
            </div>
        </div>
        <hr />
    {/* <h2 class="midHead">Luck</h2> */}
    <div class="content">
       {blog?.Content}
    </div>
    
    {/* <h3 class="smolHead">Year 1962</h3> */}

    </div>
    <footer class="footer">
        <div class="footer-header">Share your thoughts now!</div>
        <ul class="social-links list-non-bullet">
            <li class="list-item-inline">
              <i class="fa-brands fa-github"></i>
            </li>
            <li class="list-item-inline">
              <i class="fa-brands fa-github"></i>
            </li>
            <li class="list-item-inline">  
              <i class="fa-brands fa-linkedin"></i>
            </li>

        </ul>
    </footer>
    
</div>
  )
}

export default BlogDisplay