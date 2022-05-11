import React from "react";
import Home_logo from '../img/home.jpg'
import './pages.css'

const Home = () => {
    return (
        <div className='centered'>
            <img src={Home_logo} alt="Home.jpg"/>
            <h2>This is the homePage</h2>
            <h4>This is a simple multi-page website</h4>
        </div>
    );
};

export default Home;