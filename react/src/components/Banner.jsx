import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="px-4 py-32 bg-black mx-auto">
      <div className="text-white text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Welcome To Our Blog
        </h1>
        <p className="text-gray-300 lg:w-3/5 mx-auto mb-5 font-sans">
          Start Your Blog Today And Join The Community Of Writers, We offer
          everything you need to know from helpful tips to tuturial
        </p>
        <div>
          <Link to="/" className="font-medium hover:text-orange-500 inline-flex items-center ">
            Learn More <FaArrowRight className="mt-1 ml-2"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
