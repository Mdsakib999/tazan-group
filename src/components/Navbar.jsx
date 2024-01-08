import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
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
            <Link to="/career" className="">Career</Link>
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
  );
};

export default Navbar;
