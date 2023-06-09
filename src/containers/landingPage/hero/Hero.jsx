import React from "react";

import { Link } from "react-router-dom";

import Line_01 from "../../../assets/images/line_l.png";
import Missle from "../../../assets/images/head7_rock.png";
import HeadImage from "../../../assets/images/head_img7.png";
import HeadBG from "../../../assets/images/head7_bg.png";

import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className=" relative w-full flex flex-row ">
      <div className="absolute w-full h-full top-0 left-0 -z-10">
        <img src={HeadBG} alt="" className="w-full h-full" />
      </div>

      <div className="h-full w-1/2 flex flex-col gap-10 py-20 px-10">
        <div className="flex items-center gap-2">
          <img src={Line_01} alt="" className="h-2 w-auto" />
          <h5 className="text-PuroleCustomColor font-medium">
            {" "}
            Get Solid Solution{" "}
          </h5>
        </div>

        <div className="flex flex-col gap-6 text-6xl font-bold ">
          <h1 className="text-black ">Choose The</h1>
          <span className="flex gap-2">
            <h1 className="">#01</h1>
            <h1 className="gradient__text">IT Solutions</h1>
          </span>
          <h1 className="text-black ">WP Theme.</h1>
        </div>

        <div className="flex items-center gap-10">
          <button
            type="button"
            className=" flex items-center text-white bg-PuroleCustomColor focus:outline-none focus:ring-4  font-medium rounded-full text-sm pl-8 pr-3 py-2.5 text-center"
          >
            Get Started Now
            <div className="ml-2 rounded-full bg-white p-2 text-black">
              <FaLongArrowAltRight />
            </div>
          </button>
          <div className="flex flex-col text-sm">
            <span className="text-gray-600">Support Email</span>
            <Link to="#" className="font-medium text-black">
              info@support-iteck.com
            </Link>
          </div>
        </div>
      </div>

      <div className=" relative h-full w-1/2 flex flex-col items-center justify-center gap-10 py-20 px-10 ">
        <img src={HeadImage} alt="" className="w-full h-auto" />
        <div className="absolute top-24 -right-6">
          <img src={Missle} alt="" className="bouncing-image w-auto h-auto" />
          {/* missle */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
