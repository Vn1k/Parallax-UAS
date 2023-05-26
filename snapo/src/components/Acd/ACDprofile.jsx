import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './ACDprof.css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../../ASET/ACD/IMG-20230414-WA0019.jpg';
import slide_image_2 from '../../ASET/ACD/IMG_20230524_234558.jpg';
import slide_image_3 from '../../ASET/ACD/IMG_20230429_112720.jpg';

function App() {
  return (
    <div className="container">
      <h1 className="name">Amanda Citra Dewanti</h1>
      <h3 className="nim">00000066344</h3>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <div id="imgslide">
          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} className='img3' alt="slide_image" />
          </SwiperSlide>
        </div>
        
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;