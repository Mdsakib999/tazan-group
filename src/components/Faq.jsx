import React from "react";
import "./Home.css";

const Faq = () => {
  return (
    <div>
      <div className="text-center mt-16 mb-10">
        <h1 className="text-3xl lg:text-5xl font-bold">
          Frequently Asked Question
        </h1>
        <p className="text-lg text-gray-500 mt-4">
          Unlocking Insights, Delving into the Frequently Inquired Aspects of
          Our Company, Product, and Services.
        </p>
      </div>

      <div className="lg:flex justify-center items-center">
        <div className="w-[90%] mx-auto lg:mx-0 lg:w-[55%]">
          <div className="collapse collapse-plus bg-base-200 mb-1">
            <input type="radio" name="my-accordion-3" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              What is The Payment Method?
            </div>
            <div className="collapse-content ">
              <p className="bg-white px-2 py-2 rounded-md shadow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ea ab quasi ut. At error explicabo veritatis mollitia delectus voluptatum eos vel quasi earum, nemo ipsa doloremque! Explicabo, cum consectetur.</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-1">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Our delivery system?
            </div>
            <div className="collapse-content">
              <p className="bg-white px-2 py-2 rounded-md shadow">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, corporis dolorum deserunt fugiat recusandae pariatur rerum placeat nemo explicabo libero fuga animi consequuntur at nam architecto esse molestias? Nulla, eaque!</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mb-1">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p className="bg-white px-2 py-2 rounded-md shadow">hello</p>
            </div>
          </div>
        </div>

        <div className="w-[70%] mx-auto lg:mx-0 lg:w-[35%]">
          <img
            className="hover:tada"
            src="https://i.ibb.co/NtpRDqF/question-mark-faq-information-question-eeb65c2f76ecda3fcc359187d66ddf75.png"
            alt="Question mark"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
