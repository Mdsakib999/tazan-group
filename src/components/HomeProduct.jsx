import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import Swiper from 'swiper';
import "./HomeProduct.css";

import { EffectFlip, Pagination, Navigation } from "swiper/modules";

const HomeProduct = () => {
  return (
    <div>
      <div className="text-center mt-16 mb-10">
        <h1 className="text-3xl lg:text-5xl font-bold">Our Product's</h1>
        <p className="text-lg text-gray-500 mt-3">
          We offer high-quality products at affordable prices.
        </p>
      </div>

      <div className="my-5">
        <Swiper
          effect={"flip"}
          grabCursor={true}
          pagination={true}
          navigation={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://www.de-mark.com/uploads/20210608/0e29ba66110a2ddf6e7ce2ff993945e1.jpg"
              alt="magico"
            />
            <p>Magico</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeProduct;
