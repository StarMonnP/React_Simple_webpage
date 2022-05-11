import React from "react";
import Banana_logo from '../img/banana.jfif'
import './pages.css'

const Banana = () => {
    return (
        <div className='centered' >
            <img src={Banana_logo} alt="Banana.jpg"/>
            <h2>This is an Banana</h2>
            
        </div>
    
    );
};

export default Banana;