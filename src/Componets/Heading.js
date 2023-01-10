import React from 'react';
import '../Styles/heading.css';

const Heading = (props) => {
  return (
    <div className='heading'>
    <h3>
    {props.text}
    </h3>
    </div>
  )
}

export default Heading;