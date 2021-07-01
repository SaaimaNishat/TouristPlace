import React from 'react'
import './Crads.css'
import CardItems from './CardItems'
import data from '../../sample.json'

function ListCard(props)
{
    return(
        <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
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
    );
}

export default ListCard;