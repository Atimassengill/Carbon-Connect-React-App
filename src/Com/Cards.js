import React, { useEffect } from 'react';

import './Cards.css';
import CardItem from './CardItem';
import {CardItem2} from './CardItem';
import {CardItem3} from './CardItem';
import {CardItem4} from './CardItem';



function Cards() {
  
  return (
    <div className='cards'>
      <h1>Check out these resources!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem className='Card1'
              src='Vids/Northern.jpg'
              text='Explore the beautiful aura borealis in Norway'
              label='Northern Lights'
              
              
              
            />
            
            
            
            <CardItem
              src='Vids/Nasa2.jpg'
              text='Climate Change Resource from Nasa'
              label='Nasa'
              path='/Nasa'
              
              
              
            />
           
            
          </ul>
          <ul className='cards__items'>
            <CardItem3
              src='Vids/Logo-new-2019-1.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem2
              src='Vids/change.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/CCIA'
            />
            <CardItem4
              src='Vids/logo21.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;