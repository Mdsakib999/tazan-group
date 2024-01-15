import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* 1st */}
      <div className="navbar bg-base-100 sticky top-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About US</Link>
              </li>
              <li>
                <Link to="/products">Product</Link>
              </li>
              <li>
                <details>
                  <summary>Sister Concern </summary>
                  <ul className="p-2">
                    <li>
                      <a>Tazan Agro Ltd.</a>
                    </li>
                    <li>
                      <a>Farhana Enterprise</a>
                    </li>
                    <li>
                      <a>Tazan Feeds Ltd.</a>
                    </li>
                    <li>
                      <a>Tazan Eco Resort</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/success">Success Stories</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          <Link to="/" className="flex items-center">
            <div className="w-8 rounded-full mr-2 cursor-pointer">
              <img
                className="rounded-full w-full h-10"
                src="/src/assets/images/TG-removebg-preview-cut.png"
              />
            </div>

            <p className="font-bold lg:text-2xl cursor-pointer group">
              Ta
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-lime-500 group-hover:from-lime-500 group-hover:to-green-700">
                zan Gro
              </span>
              up
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="font-semibold menu menu-horizontal text-xl">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/products">Product</Link>
              {/* Have to add sister */}
            </li>

            <li>
              <details>
                <summary>Sister Concern </summary>
                <ul className="p-2">
                  <li>
                    <a>Tazan Agro Ltd.</a>
                  </li>
                  <li>
                    <a>Farhana Enterprise</a>
                  </li>
                  <li>
                    <a>Tazan Feeds Ltd.</a>
                  </li>
                  <li>
                    <a>Tazan Eco Resort</a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <Link to="/career" className="">
                Career
              </Link>
            </li>


            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/contact">
            <p
              className="px-3 lg:px-4 py-2 rounded-md
          text-white lg:text-xl font-bold bg-gradient-to-r from-green-600 to-lime-400 hover:from-lime-300 hover:to-green-600  ..."
            >
              Contact Us
            </p>
          </Link>
        </div>
      </div>

      {/* practice */}

      <div className=" bg-zinc-100 px-4 py-4">



              <ul className="flex items-center justify-center font-semibold">

                {/*1st*/}
                <li className="relative group px-3 py-2">
                  <button
                    className="hover:opacity-50 cursor-default"
                    aria-haspopup="true"
                  >
                    Products
                  </button>
                  <div class="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                    <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                      <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>

                      <div class="relative z-10">
                        <div class="grid grid-cols-2 gap-6">
                          <div>
                            <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                              The Suite
                            </p>
                            <ul class="mt-3 text-[15px]">
                              <li>
                                <a
                                  href="#"
                                  class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  Course Editor
                                  <p class="text-gray-500 font-normal">
                                    All-in-one editor
                                  </p>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  Accept payments
                                  <p class="text-gray-500 font-normal">
                                    Pre-build payments page
                                  </p>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  Closed Captioning
                                  <p class="text-gray-500 font-normal">
                                    Use AI to generate captions
                                  </p>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                              Extensions
                            </p>
                            <ul class="mt-3 text-[15px]">
                              <li>
                                <a
                                  href="#"
                                  class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  Plugins
                                  <p class="text-gray-500 font-normal">
                                    Tweak existing functionality
                                  </p>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  Batch uploads
                                  <p class="text-gray-500 font-normal">
                                    Get your time back
                                  </p>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  Social sharing
                                  <p class="text-gray-500 font-normal">
                                    Generate content for socials
                                  </p>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/*2st*/}
                <li className="relative group px-3 py-2">
                  <button
                    className="hover:opacity-50 cursor-default"
                    aria-haspopup="true"
                  >
                    Solutions
                  </button>
                  <div class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                    <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                      <div class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                      <div class="relative z-10">
                        <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                          Use cases
                        </p>
                        <ul class="mt-3 text-[15px]">
                          <li>
                            <a
                              href="#"
                              class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                            >
                              Creators
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                            >
                              Streamers
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                            >
                              Influence
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                            >
                              Programming
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                            >
                              Design
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                {/*3rd*/}
                <li className="relative group px-3 py-2">
                  <button class="hover:opacity-50 cursor-pointer">
                    Resources
                  </button>
                  <div class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
                    <div class=" relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                      <div class="w-10  h-10 bg-white transform rotate-45 absolute -top-1 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                      <div class="relative z-10">
                        <ul class="text-[15px]">
                          <li>
                            <a
                              href="#"
                              class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Get Support
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Blog
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Case Studies
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Guides
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              News &amp; Events
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

              </ul>
     

          
      </div>
      
    </>
  );
};

export default Navbar;
