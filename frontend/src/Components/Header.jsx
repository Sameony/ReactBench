import React from "react";

const Header = () =>{
    return (
       <> 
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand">Blogs</a>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-secondary" type="submit">Search</button>
            </form>
            <button className="btn btn-primary">Add Blog</button>
        </div>
        </nav>
       </>
    )
}

export default Header;
