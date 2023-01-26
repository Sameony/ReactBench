import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Components/Header';
import BlogDisplay from './Screens/BlogDisplay';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import AddBlog from './Screens/AddBlog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path="/addBlog" element={<AddBlog />} />
        <Route path="/blogs/:blogID" element={<BlogDisplay />} />
      </Routes>
  
    </BrowserRouter>
 </React.StrictMode>
) ;
