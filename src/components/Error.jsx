import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorAni from "../assets/98488-bot-error-404.json";
import Lottie from "lottie-react";

const Error = () => {
  const { error, status } = useRouteError();
  return (
    <div className="w-[50%] mx-auto">
        <Link to="/"><button
            className="px-4 py-2 border rounded-md
            lg:ml-44
            lg:w-[50%]
      
          text-white font-semibold bg-gradient-to-r from-green-600 to-lime-300 hover:from-lime-300 hover:to-green-600 mt-10 "
          >
            Back to Home
          </button></Link>

          <p className="text-2xl text-red-600 font-semibold mt-5 text-center">This page is not available</p>
      <div className="w-[70%] mx-auto">
        <Lottie animationData={errorAni} loop={true}></Lottie>
      </div>
      
      <h1 className="text-4xl text-center font-bold">{status}</h1>
    </div>
  );
};

export default Error;
