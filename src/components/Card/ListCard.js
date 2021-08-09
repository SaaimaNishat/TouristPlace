import React, { useEffect, useRef, useState } from 'react'
import './Crads.css'
import CardItems from './CardItems'
import LoadingBar from 'react-top-loading-bar'

import { api_url } from '../../base'

let getPost = () => {
  return fetch(api_url + 'posts/')
}

function ListCard(props)
{
  const ref = useRef(null)
  const [places, setPlaces]= useState([])

  useEffect(() => {
    ref.current.continuousStart()
    getPost().then(res => {
      if(res.ok)
        return res.json()
    }).then(res => {
      setPlaces(res)
      ref.current.complete()
    })
  }, [])
  
    return(
      <>
      <LoadingBar color='#fff' ref={ref} />
        <div className='cards'>

      <h1>SOME OF THE MORE BEAUTIFUL LOCATIONS!</h1>
      <h3>Adventure, Sports, Luxury and many more!</h3>
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
    </>
    );
}

export default ListCard;