import React from 'react'
import CarouselContainer from '../Carousel/Carousel';
import '../Card/Crads.css'
import './CSS/Details.css'
import data from '../../sample.json'
import CardItems from '../Card/CardItems'
import para from '../../sample_para.json'


function Details(){

    return(
        <>
            <CarouselContainer />

            <div className="row">
                <div className="column-left">
                    <h1 className="heading">Tourism in {para.place}</h1>
                    <p className="paragraph">{para.details}</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className="paragraph">{para.details1}</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className="paragraph">{para.details1}</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className="paragraph">{para.details2}</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className="paragraph">{para.details3}</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className="paragraph">{para.details4}</p>
                </div>
                <div className="column-right">
                    <h1 className="heading">Nearby Places</h1>
                    <div className='cards__container'>
                    <div className='cards__wrapper'>
                    <ul className='cards__items'>
                            {data.map(s => (<CardItems
                                src={s.src? s.src : "images/img-1.jpg"}
                                text={s.name}
                                label={s.type}
                                path='/services'
                        />))}
                    </ul>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Details;