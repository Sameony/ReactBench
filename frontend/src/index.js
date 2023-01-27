import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Components/Header';
import BlogDisplay from './Screens/BlogDisplay';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import AddBlog from './Screens/AddBlog';
import { createStore} from 'redux'
import { blogReducer } from './reducers';
import { Provider } from 'react-redux';
//Store
const store = createStore(blogReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  store.subscribe(()=>console.log(store.getState()))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
   <Provider store={store}>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<App/>}></Route>
          <Route path="/addBlog" element={<AddBlog />} />
          <Route path="/blogs/:blogID" element={<BlogDisplay />} />
          <Route path="/addBlog/:blogID" element={<AddBlog/>} />
        </Routes>
      </BrowserRouter>
   </Provider>
 </React.StrictMode>
) ;
