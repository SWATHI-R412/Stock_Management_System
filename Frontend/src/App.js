import React, { StrictMode } from 'react'
//import './App.css'

import { Provider } from 'react-redux';

import Home from './project/Home';
import Header from './project/Header';
import Login from './project/Login';
import SignUp from './project/SignUp';
import Register from './project/Register';
import ProfilePage from './project/ProfilePage';
import Brand from './project/Brand';
import Category from './project/Category';
import Product from './project/Product';
import Orders from './project/Orders';
// import Success from './project/Success';
import Report from './project/Report'
import Sidebar from './project/Sidebar';
import{BrowserRouter, BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import store from './project/store';
import Success from './project/Success';
import FeedBack from './project/FeedBack';
function App(){
  return(

    <BrowserRouter>
    
    {/* <Home/> */}
    

    
      
<Routes>
   <Route path="/Header" element={<Header/>}/>

  <Route path="/" element={<Login/>}/>
  <Route path="/Home" element={<Home/>}/>
  <Route path="/SignUp" element={<SignUp/>}/>
  <Route path="/Register" element={<Register/>}/>
   <Route path="/ProfilePage" element={<ProfilePage/>}/>
   <Route path="/Brand" element={<Brand/>}/>
   <Route path="/Category" element={<Category/>}/>
   <Route path="/Product" element={<Product/>}/>
   <Route path="/Orders" element={<Orders/>}/>
   <Route path="/Report" element={<Report/>}/>
   <Route path="/FeedBack" element={<FeedBack/>}/>
   <Route path="/Success" element={<Success/>}/>
   

  
  
   
</Routes>
</BrowserRouter>
  );
}
export default App;

