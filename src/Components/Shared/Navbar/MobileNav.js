import React from "react";
import { CgTwitter } from "react-icons/cg";
import {
  FaAngleDoubleRight,
  FaAngleDown,
  FaBars,
  FaFacebookF,
} from "react-icons/fa";
import { GrClose, GrInstagram } from "react-icons/gr";
import { ImGooglePlus } from "react-icons/im";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Images/logo.png";

const MobileNav = () => {
  const [hide, setHide] = React.useState(false);

  return (
    <div className="w-full flex flex-col items-center gap-x-12 border shadow-md">
      {/* Logo & Humbergar Menu Area */}

      <div className="w-full flex justify-between items-center bg-white z-50 px-8">
        <div>
          <Link to="/">
            <div className="flex items-center gap-x-2">
              <img src={logo} alt="Main Logo" className="w-8 py-2" />
              <h4 className="font-semibold text-lg text-[#15A9E3]">
                HEALTH OS
              </h4>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-x-4">
          <a
            href="https://www.facebook.com/ashraful2880"
            target="blank"
            className="text-[#2563eb] text-lg"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.facebook.com/ashraful2880"
            target="blank"
            className="text-[#2563eb] text-lg"
          >
            <CgTwitter />
          </a>
          <a
            href="https://www.facebook.com/ashraful2880"
            target="blank"
            className="text-[#2563eb] text-lg"
          >
            <GrInstagram />
          </a>
          <a
            href="https://www.facebook.com/ashraful2880"
            target="blank"
            className="text-[#2563eb] text-lg"
          >
            <ImGooglePlus />
          </a>
        </div>

        {hide ? (
          <button
            className="text-2xl text-red-500"
            onClick={() => setHide(false)}
          >
            <GrClose className="text-red-500" />
          </button>
        ) : (
          <button
            className="text-2xl text-[#2563eb]"
            onClick={() => setHide(true)}
          >
            <FaBars />
          </button>
        )}
      </div>

      {/* Menu Item Here */}

      {hide && (
        <div className="bg-[#0b1144] w-full text-white rounded-lg pt-5 pb-3 megaMenuAnimation min-h-screen flex flex-col justify-start items-start pl-40">
          <Link
            to="/home"
            className="text-md font-semibold hover:text-[#2563eb] focus:text-[#2563eb] duration-300"
            onClick={() => setHide(true)}
          >
            Home
          </Link>

          <Link
            className="text-md font-semibold hover:text-[#2563eb] focus:text-[#2563eb] duration-300 flex items-center gap-x-1"
            to="/shopCategory/All"
            onClick={() => setHide(true)}
          >
            Shop Now
          </Link>

          <Link
            to="/about"
            className="text-md font-semibold hover:text-[#2563eb] focus:text-[#2563eb] duration-300 flex items-center gap-x-1"
            onClick={() => setHide(true)}
          >
            About
          </Link>
          <Link
            to="/blogs"
            className="text-md font-semibold hover:text-[#2563eb] focus:text-[#2563eb] duration-300 flex items-center gap-x-1"
            onClick={() => setHide(true)}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-md font-semibold hover:text-[#2563eb] focus:text-[#2563eb] duration-300 flex items-center gap-x-1"
            onClick={() => setHide(true)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
