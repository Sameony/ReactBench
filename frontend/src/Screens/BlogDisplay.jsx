import React from 'react'
import { useParams } from 'react-router-dom'
const BlogDisplay = () => {
    const {blogID} = useParams()
  return (
    <div>BlogDisplay</div>
  )
}

export default BlogDisplay