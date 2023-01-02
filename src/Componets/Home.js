import React from 'react';
import HotAccessories from './HotAccessories';
import NavBar from './NavBar';
import StartProducts from './StartProducts';
import Slider from './Slider';
import data from '../data/data.json'

const Home = () => {
  return (
    <div>
    <NavBar/>
    <Slider start={data.banner.start}/>
    <StartProducts/>
    <HotAccessories/>
    </div>
  )
}

export default Home;