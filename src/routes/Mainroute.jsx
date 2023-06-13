import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  Dashboard,
  Iso,
  LandingPage,
  Login,
  Pratique,
  Questions,
  Users,
  OneQuestion,
  Register,
} from "../containers";
import { Navbar, Infonav, Sidebar, MainNavbar } from "../components";
import Cookies from "universal-cookie";
import PrivetRoute from "./PrivetRoute";

const Mainroute = () => {
  const location = useLocation();
  const cookies = new Cookies();
  let user = cookies.get("user");

  return (
    <div
      className={`h-screen ${user?.role === "admin" ? "px-4 md:px-6 xl:px-10" : "px-20"}`}
      // style={{ width: "95vw" }}
      style={{
        width: `${
          ["/register", "/login", "/question"].includes(location.pathname)
            ? "100vw"
            : "99vw"
        }`,
      }}
      // style={{["/register", "/login", "/question"].includes(location.pathname) ? {} : {}}}
    >
      {["/register", "/login", "/question"].includes(
        location.pathname
      ) ? null : (
        <Infonav />
      )}

      <div className="w-full h-full flex flex-row ">
        {["/register", "/login"].includes(location.pathname) ? null : (
          <>{user?.role !== "admin" ? null : <Sidebar />}</>
        )}
        <div
          className={`w-full flex flex-col ${
            user?.role !== "admin" ? "" : "pt-4 px-6"
          }`}
        >
          {["/register", "/login", "/question/:id"].includes(
            location.pathname
          ) ? null : (
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
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="users" element={<Users />} />
            <Route path="iso" element={<Iso />} />
            <Route
              path="question/:id"
              element={
                <PrivetRoute roles={["client", "admin"]}>
                  <OneQuestion />
                </PrivetRoute>
              }
            />
            <Route
              path="questions"
              element={
                // <PrivetRoute roles={['client', 'admin']}>
                <Questions />
                // </PrivetRoute>
              }
            />
            <Route
              path="pratique"
              element={
                // <PrivetRoute roles={['client', 'admin']}>
                <Pratique />
                // </PrivetRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Mainroute;
