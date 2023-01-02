import React from 'react';
import ImageSlider, {Slide} from 'react-auto-image-slider';

const Slider = () => {
    return (<ImageSlider effectDelay={1000} autoPlayDelay={4000}>
    <Slide><image src='https://i02.appmifile.com/173_operator_in/09/06/2021/fde866737ea0357305c2d1c852541460.gif' alt='images'/>image 1</Slide>
    <Slide><image src='https://i02.appmifile.com/615_operator_in/05/07/2021/a4b26d6b2ad2d6d2edbfb23a8482328e.jpg' alt='images'/>Image 2</Slide>
    <Slide><image src='https://i02.appmifile.com/762_operator_in/05/07/2021/4c90dda893b43e0153950f36ee37dc03.jpg' alt='images'/>Image 3</Slide>
      
    </ImageSlider>
        
    )
}

export default Slider