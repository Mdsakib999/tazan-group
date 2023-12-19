import React from "react";
import animation from "../assets/Animation - 1702966470394.json";
import Lottie from "lottie-react";

const ContactUs = () => {
  return (
    <div>
      <div className="text-center mt-16 mb-10">
        <h1 className="text-3xl lg:text-5xl font-bold">Contact Us</h1>
        <p className="text-lg text-gray-500 mt-3">
        From Seed to Success, We're Here to Help. Rooted in Relationships, Start the Conversation, Growing Together.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="md:w-[40%] b">
      
          <Lottie animationData={animation} loop={true}></Lottie>
        
      </div>

        <div className="md:w-1/2">
          <div className="text-lg font-bold mb-6">Get In Touch</div>
          <form action="#" className="w-full">
            <div className="flex flex-wrap -mx-2 mb-6">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full h-12 border-2 border-gray-300 rounded px-4 focus:outline-none focus:border-green-500 transition duration-300"
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full h-12 border-2 border-gray-300 rounded px-4 focus:outline-none focus:border-green-500 transition duration-300"
                />
              </div>
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full h-12 border-2 border-gray-300 rounded px-4 focus:outline-none focus:border-green-500 transition duration-300"
              />
            </div>
            <div className="mb-6">
              <textarea
                cols="30"
                rows="10"
                placeholder="Write your Message..."
                required
                className="w-full h-32 border-2 border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-500  transition duration-300"
              ></textarea>
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="bg-blue-500 border-2 text-white px-6 py-3 rounded-full text-lg font-semibold  hover:bg-white hover:text-blue-500 border-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Address part */}
      <div className="md:w-1/2 ">
        <div className="text-lg font-bold mb-3">Head Office</div>
        <p>Hathazari Road, Baluchara</p>
        <p>Chittagong-4214, Bangladesh.</p>
        <p>Tel: 0088-031-682739</p>
        <p>E-mail: info@tazangroup.com</p>

        <div className="text-lg font-bold mt-6">Liaison Office</div>
        <p>382, Tangi Diverson Road (4th floor)</p>
        <p>Mogbazar, Dhaka-1212</p>
        <p>E-mail: tazanagro@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactUs;