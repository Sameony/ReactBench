import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Components/Header';
import BlogDisplay from './Screens/BlogDisplay';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import AddBlog from './Screens/AddBlog';
import {createStore} from 'redux'
import { blogReducer } from './reducers';


//Store
const store = createStore(blogReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//Action
const getBlogs = () =>{
  return {
    type:"GET"
  }
}
const RemoveBlogs = () =>{
  return {
    type:"DELETE"
  }
}
  store.subscribe(()=>console.log(store.getState()))
//dispatch



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path="/addBlog" element={<AddBlog />} />
        <Route path="/blogs/:blogID" element={<BlogDisplay />} />
        <Route path="/addBlog/:blogID" element={<AddBlog/>} />
      </Routes>
  
    </BrowserRouter>
 </React.StrictMode>
) ;
