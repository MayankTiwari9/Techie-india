import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/hotAccessoriesMenu.css';
import data from '../data/data.json';

const cover = [data.hotAccessoriesCover.music, data.hotAccessoriesCover.smartDevice,data.hotAccessoriesCover.home,data.hotAccessoriesCover.lifeStyle,data.hotAccessoriesCover.mobileAccessories];
const HotAccessoriesMenu = () => {
  return (<>
      <Link className='hotMenuLink' to='/hotaccessories'><h5>Music || Smart Device || Home || LifeStyle || Mobile Acessories</h5></Link>
    <div className='hotMenu'>
    {cover.map((item)=>(
      <div>
        <img src={item} alt='covers'/>
      </div>
    ))}
    </div>
  </>
  )
}

export default HotAccessoriesMenu;