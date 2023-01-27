
export const getBlogs = () =>{
    return {
        type: "GET"
    }
}
export const setBlog = (blogs) =>{
    return {
        type:"SET",
        payload:blogs
    }
}
