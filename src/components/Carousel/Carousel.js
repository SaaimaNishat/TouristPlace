import React, {useState} from 'react'
import data from '../../sample.json'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Carousel.css'

function CarouselContainer({slides})
{
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
        console.log(slides)
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    if(length <= 0)
    {
        return null;
    }


    return(
        <section className="carousel">
            <FaArrowLeft className="left-arrow"  onClick={prevSlide}/>
            <FaArrowRight className="right-arrow" onClick={nextSlide} />
            {
                slides.map((s,index) => {
                    return(
                        <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                            {index === current && 
                            <img src={s} alt="travel" className="image" />}
                        </div>
                    )
                })
            }
        </section>
    );
}

export default CarouselContainer;