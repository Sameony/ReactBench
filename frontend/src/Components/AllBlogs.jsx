import React , {useEffect, useState} from 'react'
import "../Styles/allBlogs.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
const AllBlogs = () => {
    const pathname = "http://localhost:3001"
    const [blogs, setBlogs]=useState([])
    const [movedIndex, setMovedIndex] = useState(-1)
    const [removeIndex, setRemoveIndex] = useState(-1)
    useEffect(() => {
        getData()
       }, [])


       const getData = async() =>{
           await axios.post(pathname+"/fetchAllBlogs").then((response)=>{
               setBlogs(response.data.data)
           })
       }
       const likeBlog = async(blog,e) =>{
        e.stopPropagation();
        await axios.post(pathname+"/addToFav",{id:blog._id})
        await getData();
        blog.Likes?e.target.style.transform="rotateY(180deg)":e.target.style.transform="rotateY(0deg)"
    }
        const removeBlogHandler = async(id, index) =>{
        let choice = window.confirm("Are you sure you want to remove this blog? This cannot be undone.")
        if(choice)
        {
            await axios.post(pathname+"/removeBlogById",{id}).then(res=>{
                
            }).catch(err=>console.log(err))
            setRemoveIndex(index)
            setTimeout(async() => {
               await getData();
               setRemoveIndex(-1)
               setMovedIndex(-1)
            }, 1000);
        }

    }

  return (
    blogs.map((ele, index)=>{
        return <div key={index} className="blogWrap" style={removeIndex===index?{transform:"translateX(-70rem)"}:{}}>
                    <div id="blogCard" style={movedIndex===index?{transform:"translateX(-7rem)"}:{}} title={"Read more about "+ele.Title} 
                    onClick={()=>{setMovedIndex(index===movedIndex?-1:index)}} >
                    <div className="titleHead">
                        {ele.Title}
                        <i style={ele.Likes?{transition:"all ease 0.7s",color:"red", fontWeight:"900", cursor:"pointer"}:{transition:"all ease 0.7s",color:"red", cursor:"pointer"}}
                        className="fa-regular fa-heart" onClick={(e)=>likeBlog(ele,e)}></i>
                        </div>
                    <div className="subHead">{ele.Author}{ele.Time}</div>
                    
                    <div className="contentBrief">{ele.Content.length>200?ele.Content.slice(0,200)+"...":ele.Content}</div>
                    <div>{ele.isLiked}</div>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <div className="categoryBlock">{ele.Category} </div>
                        <Link to={`/blogs/${ele._id}`} className='btn btn-primary'>Read More</Link>
                    </div>  
                    </div>
                    <div className="delete" onClick={()=>removeBlogHandler(ele._id, index)}>
                    <i className="fa-solid fa-trash"></i>
                    </div>
        </div>
    })
  )
}

export default AllBlogs