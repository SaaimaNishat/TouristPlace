import React from 'react'
import Cards from '../Card/Cards'
import ListCard from '../Card/ListCard'

function List(){
        const textArray = ['hello', 'this', 'is', 'Abi']

        const printArrayElements = () => {
            textArray.map(data => {
                console.log(data);
            })
        }

        return (
            <div>
                {/* <ListCard
                 src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services' />
              <ListCard
                 src='images/img-8.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services' />
              <ListCard
                 src='images/img-2.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services' />*/
              }
              <ListCard onClick={printArrayElements} />
            </div>
        );
}

export default List;
