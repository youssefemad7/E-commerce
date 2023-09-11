// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import image2 from '../src/images/Home-default-1510-3.png';
import image3 from '../src/images/Home-default-1510-4.png';
import './App.css'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
    
  return (
    <Swiper className='swip'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide> <img src={image2} className='image1' /></SwiperSlide>
      <SwiperSlide> <img src={image3}  className='image2'  /></SwiperSlide>


    </Swiper>
  );
};