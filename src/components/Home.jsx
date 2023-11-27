import React from "react";
import animation from "../assets/Animation - 1701077262099.json";
import Lottie from "lottie-react";
import "./Home.css";
import HomeTypingText from "./HomeTypingText";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import HomeCarousel from "./HomeCarousel";

const Home = () => {
  return (
    <div>
      <div className="lg:flex justify-evenly items-center">
        <div className="lg:w-[50%] p-10 lg:p-0 text-center lg:text-left">
          <p className="text-4xl lg:text-6xl font-semibold lg:mt-20  leading-tight font-serif">
            Welcome To
          </p>

          <h1 className="text-transparent text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-green-600 to-lime-300 hover:from-lime-400 hover:to-green-700 font-bold my-4">
            Tazan Group
          </h1>

          <p className="text-3xl lg:text-4xl pt-1  mb-4 font-semibold gradient-text-animation font-mono">
            Quality You Can Trust
          </p>

          <p className="text-slate-500 hover:text-black text-lg mb-3">
            At Tazan Group, our commitment is rooted in the provision of
            top-tier agro medicine, catering specifically to the health and
            well-being of poultry, cattle, and aquatic life. As a leading agro
            medicine provider, we take pride in our mission to empower
            agriculture by offering premium solutions at prices that make a
            difference. At Tazan Group, we believe that access to superior agro
            medicine should not be a luxury but a fundamental right for every
            farmer.
          </p>

          {/* Typing text */}
          <div className=" h-24 mb-16 lg:mb-0">
            <HomeTypingText></HomeTypingText>
          </div>
          {/* Typing text */}

          {/* Social icon */}
          <div className="flex text-5xl w-[80%] mx-auto justify-around lg:justify-between lg:w-[35%] lg:mx-0 mb-8">

            <Link className="rounded-full shadow-xl hover:text-blue-600 hover:tada" to="https://www.facebook.com/tazangroup.bd/" target="_blank">
              <FaFacebook />
            </Link>

            <Link className="rounded-full
             shadow-xl hover:text-sky-600 hover:tada" to="https://www.linkedin.com/in/tazan-agro-ltd/?originalSubdomain=bd" target="_blank">
            <FaLinkedin />
            </Link>

            <Link className="rounded-full shadow-xl hover:text-red-600 bg-slate-100 hover:tada" to="https://www.youtube.com/@TazanGroup" target="_blank">
            <FaYoutube />
            </Link>

            
          </div>
        </div>

        <div className="w-[100%] lg:w-[40%] ">
          <Lottie animationData={animation} loop={true}></Lottie>
        </div>
      </div>

    {/* Other components of home */}
    <HomeCarousel></HomeCarousel>
    </div>
  );
};

export default Home;
