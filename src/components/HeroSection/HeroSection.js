import React from 'react'
import '../../App.css'
import './HeroSection.css'
import {Button} from '../Button/Button'

function HeroSection() {
    return(
        <div className='hero-container'>
            <video src='/videos/video-1.mp4'
                autoPlay loop muted
            />
            <h1>WELCOME TO TRAVELISTA</h1>
            <p>Be it a trip or adventure, we got you covered</p>
            <div className='hero-btns'>
            <Button
                className='btn'
                buttonStyle='btn--outline'
                buttonSize='btn-large'
            >
                DISCOVER
            </Button>
            <Button
                className='btn'
                buttonStyle='btn-primary'
                buttonSize='btn-large'
            >
                ADVENTURE
            </Button>
            </div>
        </div>
    );
}
 export default HeroSection;