import React from "react";

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

      <img
        className="mt-5"
        src="https://i.ibb.co/dKhRdHm/concept-success-business-solid-business-team-standing-each-other-arms-crossed-front-him-160672-28525.png"
        alt="formal group picture"
      />

      <div className="bg-black text-white px-4 py-6 shadow-lg">
        <p className="font-bold text-xl text-center mb-4">
          Why Should Join Us?
        </p>
        <div className="flex justify-evenly text-center font-semibold">
          <p className="border-r-2">Competitive Salary</p>
          <p className="border-r-2">Work-Life Balance</p>
          <p className="border-r-2">Paid Time Off</p>
          <p >Provident Fund</p>
        </div>
      </div>

      <h1 className="text-center mt-2 lg:mt-5 text-xl lg:text-4xl font-bold underline">Current Opening</h1>

      <div className="w-[95%] lg:w-[85%] mt-3 lg:mt-7 px-2 py-2 lg:px-4 lg:py-3 mx-auto flex justify-between items-center bg-gray-100 rounded-lg mb-8 shadow-lg">
        <p className="font-semibold text-base lg:text-xl">Marketing Officer</p>
        <p className="hidden lg:block font-semibold text-base lg:text-xl">Mid Senior</p>
        <p className="font-semibold text-base lg:text-xl">Last Date 30 Jan</p>
        <p className="btn btn-warning">View Details</p>
      </div>

    </div>
  );
};

export default Career;
