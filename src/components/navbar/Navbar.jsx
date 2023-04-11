import "./navbar.css";
import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="kifeh__navbar h-14 w-full border flex flex-row items-center">
      <div className="kifeh__nvbar-logo w-1/5 border flex items-center justify-center">
        <h1>LOGO</h1>
      </div>
      <div className="kifeh__navbar-links w-3/5 flex gap-6 ml-10 border font-semibold text-xl">
        <Link
          to="/"
          className="trasition duration-300 ease-in-out hover:text-blue-600"
        >
          Home
        </Link>
        <Link
          to="#about"
          className="trasition duration-300 ease-in-out hover:text-blue-600"
        >
          About us
        </Link>
        <Link
          to="#contact"
          className="trasition duration-300 ease-in-out hover:text-blue-600"
        >
          Contact us
        </Link>
      </div>
      <div className="kifeh__navbar-auth flex items-center border">
        <Link to="/login">
          <button className="relative inline-flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-md group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            <span className="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
              Authenticate
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
