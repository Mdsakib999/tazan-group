import React from 'react';
import animation from "../assets/131315-bot-robot.json";
import Lottie from "lottie-react";

const Home = () => {
    return (
        <div>
          <div className="lg:flex justify-evenly items-center">
        <div className="lg:w-[50%] p-10 lg:p-0">
          <h1 className="lg:text-5xl font-semibold mb-4 leading-tight">
            Welcome to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-lime-500 hover:from-lime-500 hover:to-green-700 font-bold">
              Tazan Group, 
            </span> <br></br>
            
          </h1>
          <p className="text-4xl mb-4"> Quality You Can Trust</p>
          <p className="text-slate-500 hover:text-black">
            ""
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