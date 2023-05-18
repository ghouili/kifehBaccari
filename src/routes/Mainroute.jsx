import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Dashboard, LandingPage, Login, Users } from "../containers";
import { Navbar, Infonav, Sidebar, MainNavbar } from "../components";
import Cookies from "universal-cookie";
import PrivetRoute from "./PrivetRoute";

const Mainroute = () => {
  const location = useLocation();
  const cookies = new Cookies();
  let user = cookies.get("user");

  return (
    <div className=" h-screen px-20" style={{ width: '95vw'}}>
      {["/register", "/login"].includes(location.pathname) ? null : <Infonav />}

      <div className="w-full h-full flex flex-row ">
        {["/register", "/login"].includes(location.pathname) ? null : (
          <>{user?.role !== "admin" ? null : <Sidebar />}</>
        )}
        <div
          className={`w-full flex flex-col ${
            user?.role !== "admin" ? "" : "pt-4 px-6"
          }`}
        >
          {["/register", "/login"].includes(location.pathname) ? null : (
            <>{user?.role !== "admin" ? <MainNavbar /> : <Navbar />}</>
          )}
          <Routes>
            <Route
              index
              element={
                <>{user?.role !== "admin" ? <LandingPage /> : <Dashboard />}</>

                // <PrivetRoute roles={['client', 'admin']} >
                // </PrivetRoute>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Mainroute;