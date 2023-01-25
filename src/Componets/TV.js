import React from 'react';
import data from '../data/data.json';
import '../Styles/productList.css';

const tv = data.tv;
const TV = () => {
  return (
    <div>
      {tv.map((item)=>(
        <div className='product-main-container'>        <div className='product-image-div'>
          <img src={item.image} alt='mobile'/>
          <input type='checkbox'/>Add to Compare
        </div>
        <div className='product-div'>
          <h5>{item.name}</h5>
          <ul>
            <li>{item.operatingSystem}</li>
            <li>{item.screen}</li>
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

export default TV;