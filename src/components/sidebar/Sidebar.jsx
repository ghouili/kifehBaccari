import "./sidebar.css";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsBank2 } from "react-icons/bs";
import { TbLayoutDashboard } from "react-icons/tb";
import { GiShop } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";
import { GiPackedPlanks } from "react-icons/gi";

import { GeneralContext } from "../../Hooks/context/GeneralContext";
import Logo from "../../assets/images/logo.png";
import MiniLogo from "../../assets/images/MiniSebmlogo.png";

const Sidebar = () => {
  const { sidebarOpen, ToggleSidebar } = useContext(GeneralContext);
  const location = useLocation();
  return (
    <div id="main__sidebar" className="sidebar flex flex-col gap-4 bg-white">
      <div
        className={`w-full bg-white flex justify-center items-center ${
          sidebarOpen ? "px-6 py-4" : "p-3"
        } `}
      >
        <img
          src={sidebarOpen ? Logo : MiniLogo}
          alt="logo"
          className={`${sidebarOpen ? "w-full h-auto" : "w-full h-auto"}`}
        />
      </div>
      <div className="px-3 flex flex-col gap-3">
        {/* Dashboard::: */}
        <Link
          to="/"
          className={`rounded-md flex flex-row items-center px-3 py-2 gap-2 text-base font-semibold hover:text-gray-800 hover:bg-gray-200 ${
            location.pathname === "/"
              ? "text-gray-100 bg-customColor"
              : "text-gray-800"
          } `}
        >
          <TbLayoutDashboard size={26} />
          <span>Dashboard</span>
        </Link>

        {/* user::: */}
        <Link
          to="/users"
          className={`rounded-md flex flex-row items-center px-3 py-2 gap-2 text-base font-semibold  hover:text-gray-800 hover:bg-gray-200 ${
            location.pathname === "/users"
              ? "text-gray-100 bg-customColor"
              : "text-gray-800"
          } `}
        >
          <FiUsers size={26} />
          <span>Users</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
