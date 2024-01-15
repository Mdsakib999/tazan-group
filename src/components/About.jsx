import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./about.css";

import { EffectCards } from "swiper/modules";

const About = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="">
          <h1>About Tazan Group</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            quaerat sit impedit, rerum enim, aliquid mollitia sed nostrum odit
            provident quas perferendis laboriosam omnis eius consequuntur
            maiores debitis voluptatum totam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nisi veniam dolores quaerat sed amet
            laudantium recusandae odio fuga explicabo impedit deleniti rerum
            laboriosam, possimus labore aperiam sint magni veritatis.
            Voluptatem.
          </p>
        </div>

        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>

      <div>
        <h1>Our Journey</h1>
      </div>

      <div>
        <div className="flex items-center justify-center gap-4">
          <div className=" w-[50%]">
            <h1 className="font-semibold text-4xl mb-3">Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ullam praesentium sunt at, aliquid voluptates enim alias cumque
              blanditiis dicta veniam incidunt, molestiae voluptatibus labore
              ratione! Ea beatae aut tenetur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque impedit deserunt velit adipisci dolor natus. Asperiores aliquid quae harum, aliquam unde quis totam numquam quod maxime, nihil, cumque error eveniet?
            </p>
          </div>

          <div className=" w-[50%] ">
            <img
            className="w-full h-[360px]"
              src="https://www.micronicsindia.com/wp-content/uploads/2021/01/mission1.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className=" flex items-center justify-center gap-4">
        <div className=" w-[50%]">
          <img className="w-full h-[360px]" src="https://i.ibb.co/m6f1pyS/vision-tazan.jpg" alt="vision pic" />
        </div>

        <div className=" w-[50%]">
        <h1 className="font-semibold text-4xl mb-3">Our Vision</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum itaque molestiae earum quisquam, sapiente dolores nostrum voluptates amet quos. Adipisci soluta dicta et. Odit cupiditate asperiores repellat explicabo at voluptatibus omnis eius nam unde vero neque pariatur esse, placeat reprehenderit minus excepturi ad mollitia nostrum ratione ipsam recusandae. Placeat, vitae.</p>
      </div>
      </div>

      <div>
        <h1>Photo Gallery</h1>
      </div>

      <div>
        <h1>Chairman Talks</h1>
      </div>
    </div>
  );
};

export default About;
