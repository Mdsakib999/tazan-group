import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./about.css";

import { EffectCards } from "swiper/modules";

const About = () => {
  const images = [
    {
      url: "https://img.freepik.com/free-photo/abstract-colorful-splash-3d-background-generative-ai-background_60438-2493.jpg?size=626&ext=jpg&ga=GA1.1.1319022014.1703579152&semt=sph",
      caption: "Cat 1",
    },
    {
      url: "https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=1380&t=st=1705397293~exp=1705397893~hmac=d0e5df660613ba5198cbb3c0df25f1eddc539e6d03a2a4f6ddc84ace6fbdebd1",
      caption: "Cat 2",
    },
    {
      url: "https://img.freepik.com/free-photo/nature-design-with-bokeh-effect_1048-1882.jpg?w=740&t=st=1705397298~exp=1705397898~hmac=9305a29512a574662b5e33572c541b7a896be7a8e0b7f979ca797a42ff58ee8c",
      caption: "Cat 3",
    },
    {
      url: "https://img.freepik.com/free-photo/abstract-colorful-splash-3d-background-generative-ai-background_60438-2493.jpg?size=626&ext=jpg&ga=GA1.1.1319022014.1703579152&semt=sph",
      caption: "Cat 1",
    },
    {
      url: "https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=1380&t=st=1705397293~exp=1705397893~hmac=d0e5df660613ba5198cbb3c0df25f1eddc539e6d03a2a4f6ddc84ace6fbdebd1",
      caption: "Cat 2",
    },
    {
      url: "https://img.freepik.com/free-photo/nature-design-with-bokeh-effect_1048-1882.jpg?w=740&t=st=1705397298~exp=1705397898~hmac=9305a29512a574662b5e33572c541b7a896be7a8e0b7f979ca797a42ff58ee8c",
      caption: "Cat 3",
    },
    // Add more images as needed
  ];

  return (
    <div>
      {/* Swip and about */}
      <div className="flex items-center">
        <div className="">
          <h1 className="font-semibold text-2xl ">About Tazan Group</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            quaerat sit impedit, rerum enim, aliquid mollitia sed nostrum odit
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            repellendus error, possimus nihil aliquam delectus nostrum
            dignissimos dolores incidunt. Consequatur minima quam debitis autem
            expedita ad consequuntur commodi assumenda laudantium?m
          </p>
        </div>

        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="" src="" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="" alt="" />
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>

      {/* Journey Timeline */}
      <div>
        <h1>Our Journey</h1>
      </div>

      {/* Mission & Vision */}
      <div className=" px-3 shadow-lg rounded-md">
        <div className=" flex items-center justify-center gap-4">
          <div className=" w-[50%]">
            <h1 className="font-semibold text-4xl mb-3 text-center">
              Our Mission
            </h1>
            <p className="text-lg text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ullam praesentium sunt at, aliquid voluptates enim alias cumque
              blanditiis dicta veniam incidunt, molestiae voluptatibus labore
              ratione! Ea beatae aut tenetur! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Neque impedit deserunt velit
              adipisci dolor natus. Asperiores aliquid quae harum?
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

        <div className="flex items-center justify-center gap-1">
          <div className=" w-[50%]">
            <img
              className="w-full h-[360px]"
              src="https://i.ibb.co/m6f1pyS/vision-tazan.jpg"
              alt="vision pic"
            />
          </div>

          <div className=" w-[50%]">
            <h1 className="font-semibold text-4xl mb-3 text-center">
              Our Vision
            </h1>
            <p className="text-lg text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
              itaque molestiae earum quisquam, sapiente dolores nostrum
              voluptates amet quos. Adipisci soluta dicta et. Odit cupiditate
              asperiores repellat explicabo at voluptatibus omnis eius nam unde
              vero neque pariatur esse, placeat reprehenderit minus excepturi ad
              mollitia nostrum ratione ipsam recusandae. Placeat, vitae. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>

      {/* Photo gallery || A quick brown */}
      <div>
        <h1 className="">Photo Gallery</h1>

        <div>
          {/* Photo Grid */}
          <div className="row">
            <div className="column">
              <img
                src="https://images.pexels.com/photos/1480690/pexels-photo-1480690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Wedding"
                style={{ width: "100%" }}
              />
              <img
                src="https://i.ibb.co/Jn4Rp1C/animal-Robo1.webp "
                alt="Rocks"
                style={{ width: "100%" }}
              />
              <img
                src="https://images.pexels.com/photos/1799904/pexels-photo-1799904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Mountain Skies"
                style={{ width: "100%" }}
              />
            </div>
            <div className="column">
              <img
                src="https://images.pexels.com/photos/592753/pexels-photo-592753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{ width: "100%" }}
              />
              <img
                src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Ocean"
                style={{ width: "100%" }}
              />
              <img
                src="https://images.pexels.com/photos/750225/pexels-photo-750225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Wedding"
                style={{ width: "100%", height:"315px" }}
              />
              <img src="" style={{ width: "100%" }} />
            </div>
            <div className="column">
              <img
                src="https://images.pexels.com/photos/216620/pexels-photo-216620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Wedding"
                style={{ width: "100%" }}
              />
              <img
                src="https://images.pexels.com/photos/2449600/pexels-photo-2449600.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rocks"
                style={{ width: "100%" }}
              />
              <img
                src="https://images.pexels.com/photos/266778/pexels-photo-266778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Falls"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* MD & Chairman Talks */}
      <div>
        <h1>Chairman Talks</h1>
      </div>
    </div>
  );
};

export default About;
