import "./navbar.css";
import React from "react";

import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";
import UserIcon from "../../assets/icons/user.png";
import Dots from "../../assets/icons/4dots.png";

const Navbar = () => {
  return (
    <div className="kifeh__navbar h-20 w-full border-b flex flex-row items-center py-2 bg-white">
      <div className="kifeh__nvbar-logo h-full w-1/6  flex items-center ">
        <Link to="/" className="h-full w-fit">
          <img src={Logo} alt="logo" className="h-full w-auto" />
        </Link>
      </div>
      <div className="h-full ml-12 border-l my-6 " />
      <div className="kifeh__navbar-links w-full flex gap-6 ml-10  font-semibold text-lg">
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
      <div className="kifeh__navbar-auth w-1/12 flex items-center justify-end gap-6 ">
       <img src={UserIcon} alt="" className="w-auto h-auto" />
       <img src={Dots} alt="" className="w-auto h-auto" />
      </div>
    </div>
  );
};

export default Navbar;
