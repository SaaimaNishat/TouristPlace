import React, { useEffect, useState } from 'react'
import './Crads.css'
import CardItems from './CardItems'

let getPost = () => {
  return fetch('http://localhost:12345/posts/')
}

function ListCard(props)
{
  
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
  
    return(
        <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
                {places.map((s, index) => (<CardItems
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

export default ListCard;