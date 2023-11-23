import React from "react";
import animation from "../assets/131315-bot-robot.json";
import Lottie from "lottie-react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="lg:flex justify-evenly items-center">
        <div className="lg:w-[50%] p-10 lg:p-0">
          <p className="lg:text-6xl font-semibold mt-20  leading-tight font-serif">
            Welcome To
          </p>

          <h1 className="text-transparent lg:text-6xl bg-clip-text bg-gradient-to-r from-green-600 to-lime-300 hover:from-lime-400 hover:to-green-700 font-bold my-4">
            Tazan Group
          </h1>

          <p className="text-4xl mb-4 font-semibold gradient-text-animation font-mono">
            Quality You Can Trust
          </p>

          

          <p className="text-slate-500 hover:text-black text-lg">
            
          At Tazan Group, our commitment is rooted in the provision of top-tier agro medicine, catering specifically to the health and well-being of poultry, cattle, and aquatic life. As a leading agro medicine provider, we take pride in our mission to empower agriculture by offering premium solutions at prices that make a difference. At Tazan Group, we believe that access to superior agro medicine should not be a luxury but a fundamental right for every farmer.
          </p>
        </div>

        <div>
          <Lottie animationData={animation} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Home;
