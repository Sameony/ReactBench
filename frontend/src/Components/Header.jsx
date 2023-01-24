import React from "react";
import { Link } from "react-router-dom";
const Header = () =>{
    return (
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">Blogs</Link>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-secondary" type="submit">Search</button>
            </form>
            <Link to="/addBlog" className="btn btn-primary">Add Blog</Link>
        </div>
       </nav>
    )
}

export default Header;
