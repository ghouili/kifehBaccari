import "./login.css";
import React from "react";

import LogoImage from "../../assets/images/login.png";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row items-center h-full w-full">
      <div className="w-full md:w-1/2 flex items-center justify-center ">
        <img src={LogoImage} alt="login" className="w-4/5 sm:w-1/2 md:w-full lg:w-4/5 h-auto" />
      </div>
      <div className="w-full md:w-1/2  ">
        <form action="" className="w-full flex flex-col items-center gap-10">
          <h1 className="text-3xl font-bold text-center">Login Form</h1>
          <div className="flex flex-col gap-6 w-4/5 ">
            <div className="flex flex-col gap-4 ">
              <label htmlFor="username" className="text-lg font-medium">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Your Username"
                className="border border-gray-500 bg-gray-100 rounded-md px-4 py-2 outline-none focus:outline-none "
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="password"  className="text-lg font-medium" >Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                className="border border-gray-500 bg-gray-100 rounded-md px-4 py-2 outline-none focus:outline-none "
              />
            </div>
            <div className="flex flex-row items-center gap-2">
              <input
                type="checkbox"
                value=""
                id="rememberme"
                className="border border-gray-500 bg-gray-100 w-4 h-4"
              />

              <label htmlFor="rememberme"  className="text-lg font-medium" >Remember me</label>
            </div>
            <div className="flex justify-center  ">
            <button
              type="button"
              class="w-1/3 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
              LOGIN
            </button>
              </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
