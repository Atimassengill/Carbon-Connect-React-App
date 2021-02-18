import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  
  return (
    <>
      <li className='cards__item'>
        <Link  to='/Nasa'className='cards__item__link' >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
          <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
            
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}
function CardItem2(props) {
  
  return (
    <>
      <li className='cards__item'>
        <Link to='/CCIA' className='cards__item__link' >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
          <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
            
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}
function CardItem3(props) {
  
  return (
    <>
      <li className='cards__item'>
        <Link to='/Climate' className='cards__item__link' >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
          <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
            
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}
function CardItem4(props) {
  
  return (
    <>
      <li className='cards__item'>
        <Link to='/Gov' className='cards__item__link' >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
          <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
            
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}
export {CardItem4}
export {CardItem3}
export {CardItem2}
export default CardItem;