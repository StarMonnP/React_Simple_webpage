import React from "react";
import Apple_logo from '../img/apple.jpg'
import './pages.css'

const Apple = () => {
    return (
        <div className='centered' alt="Apple.jpg">
            
            <img src={Apple_logo}/>
            <h2>This is an Apple</h2>
            
        </div>
    
    );
};

export default Apple;