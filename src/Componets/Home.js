import React from 'react';
import NavBar from './NavBar';
import StartProducts from './StartProducts';
import Slider from './Slider';
import data from '../data/data.json'
import HotAccessoriesMenu from './HotAccessoriesMenu';
import Heading from './Heading';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Slider start={data.banner.start} />
      <Heading text="StartProducts"/>
      <StartProducts star={data.starProduct} />
      <Heading text ="Hot Accessories"/>
      <HotAccessoriesMenu cover={data.hotAccessoriesCover}/>
      <hr></hr>
      </div>
  )
}

export default Home;