import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCaroselData';
import './style.css'


const MainCarosel = () => {

const items = mainCarouselData.map((item) => <img  className='object-cover'
 role='presentation' src={item.image} alt="" height='680px' width='1500px' />)

 return(
    <AliceCarousel
       items={items}
       disableButtonsControls
       autoPlay
       autoPlayInterval={1000}
       infinite
      />
 )

}
export default MainCarosel
