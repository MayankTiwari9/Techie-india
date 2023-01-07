import React from 'react';
import '../Styles/hotAccessories.css';

const HotAccessories = ({hot}) => {
  return (
    <div className='hotAccessories'>HotAccessories
    {hot.map((items)=>(
      <div>
      <p>{items.name}</p>
        <img src={items.image} alt='second'/>
        <p>{items.price}</p>
      </div>
    ))}
    </div>
  )
}

export default HotAccessories;