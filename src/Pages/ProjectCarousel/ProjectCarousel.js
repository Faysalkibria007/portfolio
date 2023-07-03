import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import "swiper/css/effect-flip"
// import "swiper/css/pagination"
// import "swiper/css/navigation"
import './ProjectCarousel.css'

// import Swiper core and required modules
import SwiperCore, {
  EffectFlip,Pagination,Navigation,Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectFlip,Autoplay,Pagination,Navigation]);

const ProjectCarousel = ({projectDetails}) => {
    return (
        <div>
            <Swiper effect={'flip'} grabCursor={true} autoplay={{
  "delay": 2500,
  "disableOnInteraction": false
}} pagination={true} navigation={true} className="mySwiper">
  {
    projectDetails?.images.map(img => <SwiperSlide><img style={{height:'500px'}} src={img} alt='' /></SwiperSlide>)
  }
  {/* <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-5.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-6.jpg" /></SwiperSlide> */}
  </Swiper>
        </div>
    );
};

export default ProjectCarousel;