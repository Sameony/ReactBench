import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addBlog,updateBlog } from '../Actions'
const AddBlog = () => {
  const dispatch = useDispatch()
  const {blogID}=useParams()
  const [blogObj, setBlogObj] = useState({Author:"", Content:"",Category:'', Title:""})
  const [error,setError] = useState("") 
  const [success,setSuccess] = useState("")
  useEffect(()=>{
    const getBlogData = async(id) =>{
      await axios.post("http://localhost:3001/fetchBlogById",{id:blogID})
      .then(res=>setBlogObj(res.data.data))
      .catch(err=>console.log(err))
    }
    blogID&&getBlogData();
  },[blogID])
  const changeHandler = (e) =>{
    let ename = e.target.name;
    setBlogObj({...blogObj, [ename]:e.target.value})
  }
  const submitHandler = async (e) =>{
    let choice = window.confirm(blogID?"Are you sure you want to update this blog?":"You can make changes to your blog later as well.Are you sure you want to post this blog?")
    e.preventDefault();
    !blogID&&choice&&await axios.post("http://localhost:3001/addBlog",blogObj).then((res)=>{
      setSuccess(res.data.msg)
      setError("")
      setBlogObj({Author:"", Content:"",Category:'', Title:""})
      dispatch(addBlog(blogObj))
    }).catch(err=>{
      setError(err.response.data.msg)
      setSuccess("")
    })
    blogID&&choice&&await axios.post("http://localhost:3001/updateBlog",blogObj).then((res)=>{
      setSuccess(res.data.msg)
      dispatch(updateBlog(blogObj))
      setError("")
      setBlogObj({Author:"", Content:"",Category:'', Title:""})
    }).catch(err=>{
      setError(err.response.data.msg)
      setSuccess("")
    })
    console.log(blogObj)
   
  }
  return (
    <form className="addBlogContainer p-3">
      {error!==""&&<div className="alert alert-danger" role="alert">
        {error}
      </div>}
      {success!==""&&<div className="alert alert-success" role="alert">
        {success}
      </div>}
        <div className="mt-3 input-group input-group-lg">
        <span className="input-group-text" id="inputGroup-sizing-lg" style={{width:"7.3rem"}}>Title</span>
        <input type="text" className="form-control" readOnly={blogID} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value={blogObj.Title} onChange={(e)=>changeHandler(e)} name="Title" />
        </div>
        <div className=" mt-5 input-group input-group-lg">
        <span className="input-group-text" id="inputGroup-sizing-lg" style={{width:"7.3rem"}}>Author</span>
        <input type="text" className="form-control" readOnly={blogID} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value={blogObj.Author} onChange={(e)=>changeHandler(e)} name="Author" />
        </div>
        <div className=" mt-5 input-group input-group-lg">
        <span className="input-group-text" id="inputGroup-sizing-lg" style={{width:"7.3rem"}}>Category</span>
        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value={blogObj.Category} onChange={(e)=>changeHandler(e)} name="Category" />
        </div>
        <div className="mt-5 form-floating">
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"300px"}} value={blogObj.Content} onChange={(e)=>changeHandler(e)} name="Content" />
        <label htmlFor="floatingTextarea2" style={{fontSize:"larger"}}>Content</label>
        </div>
       <div className='d-flex justify-content-center align-items-center'>
       <button className='btn btn-primary my-3' onClick={(e)=>submitHandler(e)}>Submit</button>
        <button className="btn btn-secondary mx-3" value='Reset'>Reset</button>
       </div>
    </form>
  )
}

export default AddBlog