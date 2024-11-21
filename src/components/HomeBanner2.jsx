import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import usa from '../assets/flag/usa2.jpg'
import uk from '../assets/flag/uk.jpg'
import canada from '../assets/flag/canada.jpg'
import aus from '../assets/flag/australia.jpg'
import de from '../assets/flag/germany.jpg'
import at from '../assets/flag/austria.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../components/styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function HomeBanner2() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className='w-11/12 mx-auto h-[400px] md:h-[500px]'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper rounded-2xl"
      >
        <SwiperSlide  style={{backgroundImage:` url(${usa})`, backgroundPosition: 'bottom', height: '100%', backgroundSize: 'cover', fontSize: '4em', color: 'white', fontWeight: 'lighter'}}>UNITED STATES</SwiperSlide>
        <SwiperSlide  style={{backgroundImage:` url(${uk})`, backgroundPosition: 'bottom', height: '100%', backgroundSize: 'cover', fontSize: '4em', color: 'white', fontWeight: 'lighter'}}>UNITED KINGDOM</SwiperSlide>
        <SwiperSlide  style={{backgroundImage:` url(${canada})`, backgroundPosition: 'center', height: '100%', backgroundSize: 'cover', fontSize: '4em', color: 'white', fontWeight: 'lighter'}}>CANADA</SwiperSlide>
        <SwiperSlide  style={{backgroundImage:` url(${aus})`, backgroundPosition: 'center', height: '100%', backgroundSize: 'cover', fontSize: '4em', color: 'white', fontWeight: 'lighter'}}>AUSTRALIA</SwiperSlide>
        <SwiperSlide  style={{backgroundImage:` url(${de})`, backgroundPosition: 'bottom', height: '100%', backgroundSize: 'cover', fontSize: '4em', color: 'white', fontWeight: 'lighter'}}>GERMANY</SwiperSlide>
        <SwiperSlide  style={{backgroundImage:` url(${at})`, backgroundPosition: 'center', height: '100%', backgroundSize: 'cover', fontSize: '4em', color: 'white', fontWeight: 'lighter'}}>AUSTRIA</SwiperSlide>
        
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
