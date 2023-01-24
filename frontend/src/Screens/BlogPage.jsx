import React from 'react'
const BlogPage = () => {
  return (
    <form className="addBlogContainer">
        <div class="mt-3 input-group input-group-lg">
        <span class="input-group-text" id="inputGroup-sizing-lg">Title</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
        </div>
        <div class=" mt-5 input-group input-group-lg">
        <span class="input-group-text" id="inputGroup-sizing-lg">Author</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
        </div>
        <div class=" mt-5 input-group input-group-lg">
        <span class="input-group-text" id="inputGroup-sizing-lg">Category</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
        </div>
        <div class="mt-5 form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"300px"}}></textarea>
        <label for="floatingTextarea2" style={{fontSize:"larger"}}>Content</label>
        </div>
       <div className='d-flex justify-content-center align-items-center'>
       <button className='btn btn-primary my-3'>Submit</button>
        <button className="btn btn-secondary mx-3">Reset</button>
       </div>
    </form>
  )
}

export default BlogPage