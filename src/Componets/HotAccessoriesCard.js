import React from 'react';
import data from '../data/data.json';
import '../Styles/hotAccessoriescard.css';

const music = data.hotAccessories.music;
const smartDevice = data.hotAccessories.smartDevice;
const home = data.hotAccessories.home;
const lifestyle = data.hotAccessories.lifeStyle;
const mobileaccessories = data.hotAccessories.mobileAccessories;


const HotAccessoriesCard = () => {
  return (<>

    <div>HotAccessoriesCard</div>
      <div className='hotaccessoriescard'>
    <div>
    <h4>Music</h4>
        {music.map((item)=>(
            <div>
            <img className='hotcardimg' src={item.image} alt='music'/>
            <p>{item.name}</p>
            <p>{item.price}</p>
            </div>
        ))}
    </div>
    <div>
    <h4>Smart Device</h4>
        {smartDevice.map((item)=>(
            <div>
            <img className='hotcardimg' src={item.image} alt='music'/>
            <p>{item.name}</p>
            <p>{item.price}</p>
            </div>
        ))}
    </div>
    <div>
    <h4>Home</h4>
        {home.map((item)=>(
            <div>
            <img className='hotcardimg' src={item.image} alt='music'/>
            <p>{item.name}</p>
            <p>{item.price}</p>
            </div>
        ))}
    </div>
    <div>
    <h4>lifeStyle</h4>
        {lifestyle.map((item)=>(
            <div>
            <img className='hotcardimg' src={item.image} alt='music'/>
            <p>{item.name}</p>
            <p>{item.price}</p>
            </div>
        ))}
    </div>
    <div>
    <h4>mobileaccessories</h4>
        {mobileaccessories.map((item)=>(
            <div>
            <img className='hotcardimg' src={item.image} alt='music'/>
            <p>{item.name}</p>
            <p>{item.price}</p>
            </div>
        ))}
    </div>

    </div>
  </>
    )
}

export default HotAccessoriesCard;