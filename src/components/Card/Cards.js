import React, { useEffect, useState } from 'react';
import './Crads.css';
import CardItems from './CardItems';

import { api_url } from '../../base'


let getPost = () => {
  return fetch(api_url + 'posts/home')
}


function Cards() {

  
  const [places, setPlaces]= useState([])

  useEffect(() => {
    getPost().then(res => {
      if(res.ok)
        return res.json()
    }).then(res => {
      setPlaces(res)
      console.log(res)
    })
  }, [])
  
  return (
    <div className='cards'>
      <h1>CHECK OUT THE MOST FAMOUS PLACES IN OUR SITE!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          {places.slice(0,2).map((s, index) => (<CardItems
              src={s.images[0] ? s.images[0] : "images/img-1.jpg"}
              text={s.place}
              label={s.place_type}
              path={`/details/${s._id}`}
            />))}
          </ul>
          <ul className='cards__items'>
          {places.slice(2,5).map((s, index) => (<CardItems
              src={s.images.length === 0 ? "images/img-1.jpg" : s.images[0] }
              text={s.place}
              label={s.place_type}
              path={`/details/${s._id}`}
            />))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;