import React from 'react'
import '../../App.css'
import './HeroSection.css'

function HeroSection() {
    return(
        <div className='hero-container'>
            <video src='/videos/video-1.mp4'
                autoPlay loop muted
            />
            <h1>WELCOME TO TRAVELISTA</h1>
            <p>Be it a trip or adventure, we got you covered</p>
            <div className='hero-btns'>
            </div>
        </div>
    );
}
 export default HeroSection;