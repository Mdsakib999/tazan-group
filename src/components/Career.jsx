import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { FaSellsy, FaLaptopCode } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { SiWebmoney } from "react-icons/si";

const Career = () => {
  return (
    <div>
      <h1 className="mt-5 text-xl text-center font-semibold lg:text-3xl ">
        Where passion <span className="font-bold text-green-600">Ignites</span>,
        Purpose guides
      </h1>
      <h1 className="text-center font-semibold text-lg lg:text-3xl lg:mb-10">
        Discover your calling, Craft your professional journey.
      </h1>

      <div className=" mt-4 lg:mt-8 lg:w-[65%] lg:mx-auto">
        <img
          className="w-full"
          src="https://i.ibb.co/dKhRdHm/concept-success-business-solid-business-team-standing-each-other-arms-crossed-front-him-160672-28525.png"
          alt="formal group picture"
        />
      </div>

      <div className="bg-black text-white px-4 py-6 lg:py-8 shadow-lg rounded-ss-2xl rounded-ee-2xl">
        <p className="font-bold text-xl lg:text-2xl text-center mb-4 lg:mb-7">
          Why Should Join Us?
        </p>
        <div className="flex justify-evenly text-center font-semibold">
          <p className="lg:flex-1 border-r-2 lg:border-r-4 lg:text-xl">
            Competitive Salary
          </p>
          <p className="lg:flex-1 border-r-2 lg:border-r-4 lg:text-xl">
            Work-Life Balance
          </p>
          <p className="lg:flex-1 border-r-2 lg:border-r-4 lg:text-xl">
            Paid Time Off
          </p>
          <p className="lg:flex-1 lg:text-xl">Provident Fund</p>
        </div>
      </div>

      {/*  */}
      <div className=" my-20 grid grid-cols-2 lg:grid-cols-3 gap-0">
      <div className=" flex flex-col items-center justify-center py-5 lg:py-12 hover:bg-slate-100 border-r-2 border-b-2">
        <FaSellsy className="text-5xl lg:text-6xl" />
        <p className="text-xl lg:text-2xl font-semibold">Marketing and Sales</p>
      </div>
      <div className="flex flex-col items-center justify-center py-5 lg:py-12 lg:border-r-2 border-b-2 hover:bg-slate-100">
        <FaLaptopCode className="text-5xl lg:text-6xl" />
        <p className="text-xl lg:text-2xl font-semibold">Software & IT</p>
      </div>
      <div className="flex flex-col items-center justify-center py-5 lg:py-12 border-b-2 border-r-2 lg:border-r-0 hover:bg-slate-100">
        <FaShippingFast className="text-5xl lg:text-6xl" />
        <p className="text-xl lg:text-2xl font-semibold">Logistic & Legal</p>
      </div>
      <div className="flex flex-col items-center justify-center  py-5 lg:py-12 lg:border-r-2 border-b-2 lg:border-b-0 hover:bg-slate-100">
        <RiCustomerService2Fill className="text-5xl lg:text-6xl" />
        <p className="text-xl lg:text-2xl font-semibold">Customer Service</p>
      </div>
      <div className="flex flex-col items-center justify-center  py-5 lg:py-12 border-r-2 hover:bg-slate-100">
        <RiMoneyDollarCircleLine className="text-5xl lg:text-6xl" />
        <p className="text-xl lg:text-2xl font-semibold">Accounts & Finance</p>
      </div>
      <div className=" flex flex-col items-center justify-center  py-5 lg:py-12 hover:bg-slate-100">
        <SiWebmoney className="text-5xl lg:text-6xl" />
        <p className="text-xl lg:text-2xl font-semibold">Digital Marketing</p>
      </div>
    </div>
      

      <h1 className="text-center mt-5 lg:mt-8 text-xl lg:text-4xl font-bold underline">
        Current Opening
      </h1>

      <div className="w-[95%] lg:w-[85%] mt-5 lg:mt-9 px-2 py-2 lg:px-4 lg:py-4 mx-auto flex justify-between items-center bg-slate-100 rounded-lg mb-20 shadow-lg hover:shadow-xl">
        <p className="font-semibold text-base lg:text-2xl">Marketing Officer</p>
        <p className="hidden lg:block font-semibold text-base lg:text-2xl">
          Mid Senior
        </p>
        <p className="font-semibold text-base lg:text-2xl">Last Date 30 Jan</p>

        <p
          className="px-3 lg:px-4 py-3 rounded-md
          text-white lg:text-xl font-semibold bg-gradient-to-r from-green-600 to-lime-400 hover:from-lime-300 hover:to-green-600"
        >
          View Details
        </p>
      </div>
    </div>
  );
};

export default Career;
