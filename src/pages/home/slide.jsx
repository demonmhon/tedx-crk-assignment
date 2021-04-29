import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import icon1 from 'assets/icon-1.png';
import icon2 from 'assets/icon-2.png';
import icon3 from 'assets/icon-3.png';
import icon4 from 'assets/icon-4.png';
import icon5 from 'assets/icon-5.png';

const slideProps = {
  slidesPerView: 5,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    900: {
      slidesPerView: 5,
      spaceBetween: 40
    }
  }
}

function Slide() {
  return (
    <div className="slide">
      <Swiper {...slideProps}>
        <SwiperSlide>
          <img src={icon1} />
          <span>Confident</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={icon2} />
          <span>Shy</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={icon3} />
          <span>Independent</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={icon4} />
          <span>Laidback</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={icon5} />
          <span>Adaptable</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slide;
