import React, { useEffect, useState } from 'react';
import './Crads.css';
import CardItems from './CardItems';

import { api_url } from '../../base'


let getPost = () => {
  return fetch(api_url + 'posts/home')
}


function Cards() {

  const [loading, setLoading] = useState(true)

  
  const [places, setPlaces]= useState([])

  useEffect(() => {
    setLoading(true)
    getPost().then(res => {
      if(res.ok)
        return res.json()
    }).then(res => {
      setPlaces(res)
      console.log(res)
      setLoading(false)
    })
  }, [])
  
  return (
    <div className='cards'>
      <div className={loading ? "show-loading" : "hide-loading"}>
        Please Wait while we fetch data from our server....
      </div>
      <h1 className={loading ? "hide-loading" : "show-loading"}>CHECK OUT THE MOST FAMOUS PLACES IN OUR SITE!</h1>
      <h3 className={loading ? "hide-loading" : "show-loading"}>Have an amazing vacay!</h3>
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
              src={s.images[0] ? s.images[0] : "images/img-1.jpg"}
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