import React from 'react';
import '../Styles/heading.css';

const Heading = (props) => {
  return (
    <div className='heading'>
    <div></div>
    <h3>{props.text}</h3>
    <div></div>
    </div>
  )
}

export default Heading;