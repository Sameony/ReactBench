import React from 'react'
import "../Styles/allBlogs.css"

const blogs = [
    {Title:"title1",
    Category:"category",
    Content:"Lorem ipsum dolor",
    isLiked:true,
    Author:"Author",
    Time: "22 Jan, 2023"
    },
    {Title:"title1",
    Category:"category",
    Content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isLiked:false,
    Author:"Author",
    Time:"23 Jan, 2023"
    },
    {Title:"title1",
    Category:"category",
    Content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isLiked:false,
    Author:"Author",
    Time:"23 Jan, 2023"
    },
    {Title:"title1",
    Category:"category",
    Content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isLiked:false,
    Author:"Author",
    Time:"23 Jan, 2023"
    },
    {Title:"title1",
    Category:"category",
    Content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isLiked:false,
    Author:"Author",
    Time:"23 Jan, 2023"
    }

]
const AllBlogs = () => {
  return (
    blogs.map((ele, index)=>{
        return <div key={index} id="blogCard" title={"Read more about "+ele.Title} >
            <div className="titleHead">
                {ele.Title}
                <i style={ele.isLiked?{color:"red", fontWeight:"900", cursor:"pointer"}:{color:"red", cursor:"pointer"}} className="fa-regular fa-heart"></i>
                </div>
            <div className="subHead">{ele.Author}{ele.Time}</div>
            
            <div className="contentBrief">{ele.Content.length>200?ele.Content.slice(0,200)+"...":ele.Content}</div>
            <div>{ele.isLiked}</div>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <div className="categoryBlock">{ele.Category} </div>
                <button className='btn btn-primary'>Read More</button>
            </div>
        </div>
    })
  )
}

export default AllBlogs