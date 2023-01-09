import React from 'react';
import NavBar from './NavBar';
import StartProducts from './StartProducts';
import Slider from './Slider';
import data from '../data/data.json'
import HotAccessoriesMenu from './HotAccessoriesMenu';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Slider start={data.banner.start} />
      <StartProducts star={data.starProduct} />
      <HotAccessoriesMenu/>
      </div>
  )
}

export default Home;