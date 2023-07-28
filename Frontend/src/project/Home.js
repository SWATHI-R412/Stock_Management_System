import React, { useState, useEffect } from 'react';

import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
//import About from './About';
import './style/home.css';
function Home() {
    // Create state variables for the index and image array
    const [index, setIndex] = useState(0);
    const images = ['https://learn.g2.com/hubfs/iStock-1024926532.jpg', 'https://quickbooks.intuit.com/oidam/intuit/sbseg/en_us/Blog/Graphic/inventory-management-strategies-infographic.png', 'https://uploads-ssl.webflow.com/63a40b5d0bd7064cf2860235/63bbca2d280184a6813575fa_Inventory-Management.jpg'];
    
    
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);
    
    // Render the current image
    return (
       
        <>
        <div>
            <Header/>
            <Sidebar/>
            </div>    
    
        <div className='home'>
        
    <h2>Stock Management System</h2>
    <p>
    Stock management is the practice of ordering, storing, tracking, and controlling inventory. Stock management applies to every item a business uses to produce its products or services – from raw materials to finished goods.
    The key to an efficient and profitable business is total visibility into the stock process from start to finish, along with management tools to help you maintain optimal stock levels year-round. An effective stock management system helps you streamline all the moving parts of your warehouse—from recommending optimal stock levels all the way to keeping your supply chain organised and running smoothly.
    Investing in an stock management system can yield excellent ROI. Not only does an stock management system make it easier to get your products to the customers who want them, it can provide valuable insights so that you’re ordering the right stock at the right time and in the right quantities.
    Software for stock management automates what used to be a time-consuming, manual process of counting each item one by one and recording it on paper. Digitising this process not only makes it more accurate, it saves valuable time.
    </p>
  

        </div>
        <img src={images[index]}  style={{ width: '700px', height: '700px', top: '50%', position: 'top 120px' }} />
        <br/>
        <br/>
       <Footer/>
        
        </>
        
        
        );
}

export default Home;