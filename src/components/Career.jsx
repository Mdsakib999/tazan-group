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
    </div>
  );
};

export default Career;
