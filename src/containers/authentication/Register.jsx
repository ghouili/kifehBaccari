import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

import { path } from "../../utils/Variables";
import Logo from "../../assets/images/login.png";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    cin: "",
    email: "",
    nom: "",
    prenom: "",
    adress: "",
    tel: "",
    password: "",
    confirmPassword: "",
    avatar: "avatar.png",
    role: "",
    active: true,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (user.password !== user.confirmPassword) {
      return swal("Error!", "Passwords do not match", "error");
    }

    try {
      const response = await fetch(`${path}user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const result = await response.json();

      console.log(result);
      if (result.success === true) {
        swal("Success!", result.message, "success");
        return navigate("/login");
      } else {
        return swal("Error!", result.message, "error");
      }
    } catch (error) {
      console.error(error);
      return swal(
        "Error!",
        "Something went wrong. Please try again later.",
        "error"
      );
    }
  };

  return (
    <div className="min-h-screen text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 border bg-white shadow-md sm:rounded-lg flex justify-center flex-1">
        <div className="p-6 w-full border">
          <div className="w-full self-start">
            <img src={Logo} className="w-32 mx-auto" alt="" />
          </div>
          <div className="mt-6 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
            <div className="w-full flex-1 mt-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="">
                    <input
                      className={`w-full px-8 py-4 rounded-lg font-medium border placeholder-gray-500 text-sm focus:outline-none ${
                        errors.cin
                          ? " bg-red-50 border-2 border-red-700"
                          : "bg-gray-100 border border-gray-200 "
                      }`}
                      type="number"
                      name="cin"
                      value={user.cin}
                      onChange={handleChange}
                      placeholder="CIN"
                      required
                    />
                    <span className="text-sm text-red-700 font-sm -mt-1">
                      {errors.cin}
                    </span>
                  </div>
                  <div className="">
                    <input
                      className={`w-full px-8 py-4 rounded-lg font-medium border placeholder-gray-500 text-sm focus:outline-none ${
                        errors.email
                          ? " bg-red-50 border-2 border-red-700"
                          : "bg-gray-100 border border-gray-200 "
                      }`}
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                    />
                    <span className="text-sm text-red-700 font-sm -mt-1">
                      {errors.email}
                    </span>
                  </div>
                  <div className="">
                    <input
                      className={`w-full px-8 py-4 rounded-lg font-medium border placeholder-gray-500 text-sm focus:outline-none ${
                        errors.nom
                          ? " bg-red-50 border-2 border-red-700"
                          : "bg-gray-100 border border-gray-200 "
                      }`}
                      type="text"
                      name="nom"
                      value={user.nom}
                      onChange={handleChange}
                      placeholder="Last Name"
                      required
                    />
                    <span className="text-sm text-red-700 font-sm -mt-1">
                      {errors.nom}
                    </span>
                  </div>
                  <div className="">
                    <input
                      className={`w-full px-8 py-4 rounded-lg font-medium border placeholder-gray-500 text-sm focus:outline-none ${
                        errors.prenom
                          ? " bg-red-50 border-2 border-red-700"
                          : "bg-gray-100 border border-gray-200 "
                      }`}
                      type="text"
                      name="prenom"
                      value={user.prenom}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                    />
                    <span className="text-sm text-red-700 font-sm -mt-1">
                      {errors.prenom}
                    </span>
                  </div>
                  <div className="">
                    <input
                      className={`w-full px-8 py-4 rounded-lg font-medium border placeholder-gray-500 text-sm focus:outline-none ${
                        errors.adress
                          ? " bg-red-50 border-2 border-red-700"
                          : "bg-gray-100 border border-gray-200 "
                      }`}
                      type="text"
                      name="adress"
                      value={user.adress}
                      onChange={handleChange}
                      placeholder="Address"
                      required
                    />
                    <span className="text-sm text-red-700 font-sm -mt-1">
                      {errors.adress}
                    </span>
                  </div>
                  <div className="">
                    <input
                      className={`w-full px-8 py-4 rounded-lg font-medium border placeholder-gray-500 text-sm focus:outline-none ${
                        errors.tel
                          ? " bg-red-50 border-2 border-red-700"
                          : "bg-gray-100 border border-gray-200 "
                      }`}
                      type="tel"
                      name="tel"
                      value={user.tel}
                      onChange={handleChange}
                      placeholder="Phone"
                      required
                    />
                    <span className="text-sm text-red-700 font-sm -mt-1">
                      {errors.tel}
                    </span>
                  </div>
                  <div className="">
                    <input
                      className={`w-full px-8 py-4 rounded-lg font-medium border placeholder-gray-500 text-sm focus:outline-none ${
                        errors.password
                          ? " bg-red-50 border-2 border-red-700"
                          : "bg-gray-100 border border-gray-200 "
                      }`}
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      placeholder="Password"
                      required
                    />
                    <span className="text-sm text-red-700 font-sm -mt-1">
                      {errors.password}
                    </span>
                  </div>
                  <div className="">
                    <input
                      className={`w-full px-8 py-4 rounded-lg font-medium border placeholder-gray-500 text-sm focus:outline-none ${
                        errors.confirmPassword
                          ? " bg-red-50 border-2 border-red-700"
                          : "bg-gray-100 border border-gray-200 "
                      }`}
                      type="password"
                      name="confirmPassword"
                      value={user.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm Password"
                      required
                    />
                    <span className="text-sm text-red-700 font-sm -mt-1">
                      {errors.confirmPassword}
                    </span>
                  </div>
                 
                </div>
                <div className="flex justify-center items-center mt-6">
                  <button
                    type="submit"
                    className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
            <div className="my-2 border-b text-center">
              <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                Or sign up with email or social login
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Link
                to="/login"
                className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-gray-100 text-gray-800 flex items-center justify-center transition duration-200 hover:underline focus:outline-none"
              >
                <i className="fab fa-google text-gray-500 w-6 h-6" />
                <span className="ml-4">Sign up with Google</span>
              </Link>
            </div>
            <div className="flex mt-8 justify-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="ml-1 text-blue-700">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
