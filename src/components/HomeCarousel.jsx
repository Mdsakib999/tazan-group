import React from "react";

const HomeCarousel = () => {
  return (
    <div>
      

      {/* Carousel—-*/}
      <div className="w-[80%] mx-auto mt-3 mb-6">
      <div className="carousel rounded-md">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/G2xmZpT/Tg2.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/P4XSVkq/Tg1.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/yYjTzv5/Tg3.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/tzZmBsD/Tg4.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      </div>



      {/* Counting box */}
      <div className="bg-slate-100 py-20 flex justify-around flex-col lg:flex-row gap-y-10 lg:gap-y-0">
      <div className="w-[80%] mx-auto lg:mx-0  lg:w-[18%] text-center text-white text-3xl font-bold rounded-lg shadow-lg py-6 bg-gradient-to-r from-green-600 to-lime-400 hover:from-lime-300 hover:to-green-600">
      <h1 className="text-6xl mb-2">5000+</h1>
      <p className="lg:text-2xl text-lg">Customer's</p>
      </div>
      <div className="w-[80%] mx-auto lg:mx-0  lg:w-[18%] text-center text-white text-3xl font-bold rounded-lg shadow-lg py-6 bg-gradient-to-r from-green-600 to-lime-400 hover:from-lime-300 hover:to-green-600">
      <h1 className="text-6xl mb-2">50+</h1>
      <p className="text-lg lg:text-2xl">Medicine Product</p>
      </div>

       <div className="w-[80%] mx-auto lg:mx-0  lg:w-[18%] text-center text-white text-3xl font-bold rounded-lg shadow-lg py-6 bg-gradient-to-r from-green-600 to-lime-400 hover:from-lime-300 hover:to-green-600">
      <h1 className="text-6xl mb-2">30+</h1>
      <p className="text-lg lg:text-xl">Imported Countries</p>
    </div>

      </div>
    </div>
  );
};

export default HomeCarousel;
