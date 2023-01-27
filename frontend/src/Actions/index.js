
export const getBlogs = () =>{
    return {
        type: "GET"
    }
}
export const setBlog = (blogs) =>{
    return {
        type:"SET",
        payload:blogs //all blogs
    }
}
export const updateBlog = blogs =>{
    return{
        type:"EDIT",
        payload:blogs//updated details
    }
}
export const addBlog = newBlog =>{
    return{
        type:"ADD",
        payload:newBlog//object with new blog data
    }
}
export const removeBlog = id =>{
    return{
        type:"REMOVE",
        payload:id
    }
}
export const likeBlogDispatch = id =>{
    return{
        type:"LIKE",
        payload:id
    }
}