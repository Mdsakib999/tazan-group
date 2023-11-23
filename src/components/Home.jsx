import React from "react";
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
            </span>{" "}
            <br></br>
          </h1>
          <p className="text-4xl mb-4"> Quality You Can Trust</p>
          <p className="text-slate-500 hover:text-black">
            ""Empowering Agriculture, Enriching Livestock: Tazan Group - Your
            Gateway to Premium Agro Medicines at Affordable Prices!" "Elevate
            Your Harvest, Nurture Your Livestock: Tazan Group - Pioneering
            Affordable Excellence in Agro Medicine Solutions!" "Cultivating
            Health, Harvesting Prosperity: Tazan Group - Where Quality Meets
            Affordability in Agro Medicine for a Thriving Livestock Industry!"
            At Tazan Group, our commitment is rooted in the provision of
            top-tier agro medicine, catering specifically to the health and
            well-being of poultry, cattle, and aquatic life. As a leading agro
            medicine provider, we take pride in our mission to empower
            agriculture by offering premium solutions at prices that make a
            difference. With a focus on quality, our products ensure the
            vitality of your livestock, elevating your harvest and contributing
            to the prosperity of the farming community. At Tazan Group, we
            believe that access to superior agro medicine should not be a luxury
            but a fundamental right for every farmer. Join us in cultivating a
            future where health and affordability coexist, forging a path
            towards sustainable and thriving agriculture."
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
