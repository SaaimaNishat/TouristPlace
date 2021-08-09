import React from 'react'
import '../../App.css'
import './HeroSection.css'

function HeroSection() {
    return(
        <div className='hero-container'>
            <img className="home-image" src='/images/img-home.jpg' alt="Travelista"/>
            <h1>WELCOME TO TRAVELISTA</h1>
            <p>Be it a trip or adventure, we got you covered</p>
            <div className='hero-btns'>
            </div>
        </div>
    );
}
 export default HeroSection;