import React from 'react';
import HotAccessories from './HotAccessories';
import NavBar from './NavBar';
import StartProducts from './StartProducts';
import Slider from './Slider';

const Home = () => {
  return (
    <div>
    <NavBar/>
    <Slider/>
    <StartProducts/>
    <HotAccessories/>
    </div>
  )
}

export default Home;