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
import { Link } from "react-router-dom";

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
            <img src="https://i.ibb.co/Zcr5LZK/Nufo-Egg-Shell.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/qgjGrLd/Whats-App-Image-2023-11-21-at-11-05-45-c501f217.jpg" />
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

      <div className=" lg:w-[15%] mx-auto">
        <Link to="/products">
          <button
            className="px-3 lg:px-6 py-3 rounded-md
          text-white lg:text-xl font-bold bg-gradient-to-r from-green-600 to-lime-300 hover:from-lime-300 hover:to-green-600  ..."
          >
            See All Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeProduct;
