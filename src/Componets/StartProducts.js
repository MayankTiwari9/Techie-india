import React from 'react';
import '../Styles/starProduct.css';

const StartProducts = ({star}) => {
  return (
    <div className='starProduct'>
    {star.map((items)=>(
      <div>
        <img src={items.image} alt='first'/>
      </div>
    ))}
    </div>

  )
}

export default StartProducts;