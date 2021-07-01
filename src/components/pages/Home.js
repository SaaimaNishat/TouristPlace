import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection/HeroSection'
import Cards from '../Card/Cards'
import Footer from '../Footer/Footer'

function Home() {
    return (
        <div>
            <HeroSection />
            <Cards />
            <Footer />
        </div>
    );
}

export default Home;