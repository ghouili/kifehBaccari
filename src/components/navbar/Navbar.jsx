import "./navbar.css";
import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";
import UserIcon from "../../assets/icons/user.png";
import Dots from "../../assets/icons/4dots.png";
import axios from "axios";
import { path } from "../../utils/Variables";

const Navbar = () => {
  const [isos, setIsos] = useState([]);
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef(null);

  const fetchData = async () => {
    const result = await axios.get(`${path}iso`);

    setIsos(result.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggleMenu(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Unbind the event listener on cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="kifeh__navbar z-20 h-20 w-full border-b flex flex-row items-center py-2 bg-transparent">
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
        <div ref={menuRef}
        className="cursor-pointer"
        >
          <div
            onClick={() => setToggleMenu(!toggleMenu)}
            className="trasition duration-300 ease-in-out hover:text-blue-600"
          >
            Check ISO
          </div>
          {!toggleMenu ? null : (
            <div
              className="scale-up-ver-top shadow-md flex flex-col items-center gap-2 px-4 py-2 font-medium 
              rounded-md z-30 absolute top-20  left-1/4 ml-6 bg-white border "
            >
              {isos.map(({ _id, iso }) => (
                <>
                  <Link
                    key={_id}
                    to={`/question/${_id}`}
                    className="w-full px-3 py-1 text-center hover:bg-customColor hover:text-white rounded-md"
                  >
                    {iso}
                  </Link>
                  <div className="w-full border-b " />
                </>
              ))}
            </div>
          )}
        </div>
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
