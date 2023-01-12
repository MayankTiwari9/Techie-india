import React from 'react';
import data from '../data/data.json';
import '../Styles/mobile.css';

const mobile = data.mobiles;
const Mobile = () => {
  return (
    <div>
      {mobile.map((item)=>(
        <div className='main-container'>
        <div className='product-image-div'>
          <img src={item.image} alt='mobile'/>
          <input type='checkbox'/>Add to Compare
        </div>
        <div className='product-div'>
          <h5>{item.name}</h5>
          <ul>
            <li>{item.storage}</li>
            <li>{item.screen}</li>
            <li>{item.camera}</li>
            <li>{item.battery}</li>
            <li>{item.processor}</li>
            <li>{item.warranty}</li>
          </ul>
        </div>
        <div>
          <h4>{item.price}</h4>
          <ul>
            <li>{item.offer}</li>
            <li>{item.delivery}</li>
            <li>{item.Exchange}</li>
            <li>{item.Emi}</li>
          </ul>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Mobile;