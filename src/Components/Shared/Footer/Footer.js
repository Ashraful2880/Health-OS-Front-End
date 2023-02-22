import React from "react";
import {
  FaAngleDoubleRight,
  FaFacebookF,
  FaInstagram,
  FaLocationArrow,
  FaPhoneAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Images/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#0b1144]">
      {/* Top footer Area */}
      <div className="border-b border-b-gray-500">
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center lg:py-14 py-6">
          <Link to="/home" className="lg:mb-2 mb-5 flex justify-center items-center">
            <img className="w-1/12" src={logo} alt="Main Logo" />
            <h4 className="mx-2 font-bold text-white text-xl mt-1">
              <span className="text-[#2563eb]">H</span>ealth
              <span className="text-[#2563eb]"> OS </span>
            </h4>
          </Link>
          <div className="lg:flex justify-center items-center hidden group">
            <p>
              <FaLocationArrow className="bg-white group-hover:bg-[#2563eb] duration-300 p-2 text-[#2563eb] group-hover:text-white border border-white group-hover:border-[#2563eb] rounded-full mr-5 h-10 w-10 flex flex-vol justify-center items-center" />
            </p>
            <div>
              <p className="text-white group-hover:text-[#2563eb] duration-300 cursor-pointer text-left">
                No: 58 A, East Madison Street,
              </p>
              <p className="text-white group-hover:text-[#2563eb] duration-300 cursor-pointer text-left">
                Baltimore, MD, USA 4508.
              </p>
            </div>
          </div>
          <div className="lg:flex justify-center items-center hidden group">
            <FaPhoneAlt className="bg-white group-hover:bg-[#2563eb] duration-300 p-2 text-[#2563eb] group-hover:text-white border border-white group-hover:border-[#2563eb] rounded-full mr-5 h-10 w-10 flex flex-vol justify-center items-center" />
            <h2 className="text-white group-hover:text-[#2563eb] duration-300 cursor-pointer text-left">
              +123-456-7890
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <Link to="/home">
              <FaFacebookF className="p-2 mx-2 bg-white hover:bg-[#2563eb] text-[#2563eb] hover:text-white border border-white hover:border-[#2563eb] duration-300 rounded-full h-10 w-10 text-xl flex flex-col justify-center items-center" />
            </Link>
            <Link to="/home">
              <FaTwitter className="p-2 mx-2 bg-white hover:bg-[#2563eb] text-[#2563eb] hover:text-white border border-white hover:border-[#2563eb] duration-300 rounded-full h-10 w-10 text-xl flex flex-col justify-center items-center" />
            </Link>
            <Link to="/home">
              <FaInstagram className="p-2 mx-2 bg-white hover:bg-[#2563eb] text-[#2563eb] hover:text-white border border-white hover:border-[#2563eb] duration-300 rounded-full h-10 w-10 text-xl flex flex-col justify-center items-center" />
            </Link>
            <Link to="/home">
              <FaWhatsapp className="p-2 mx-2 bg-white hover:bg-[#2563eb] text-[#2563eb] hover:text-white border border-white hover:border-[#2563eb] duration-300 rounded-full h-10 w-10 text-xl flex flex-col justify-center items-center" />
            </Link>
          </div>
        </div>
      </div>
      {/* Bottom footer Area */}
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 place-content-center place-items-center lg:py-14 py-6 text-white w-full">
        <div>
          <div className="text-start w-full flex flex-col justify-start items-start gap-3">
            <h4 className="lg:mb-6 mb-0 lg:mt-0 mt-6 text-xl font-bold">
              Legal
            </h4>
            <Link
              to="/home"
              className="text-lg text-gray-300 hover:text-[#2563eb] duration-300 flex items-center gap-3"
            >
              <FaAngleDoubleRight className="mt-0.5" />
              <p>Terms Of Service</p>
            </Link>
            <Link
              to="/home"
              className="text-lg text-gray-300 hover:text-[#2563eb] duration-300 flex items-center gap-3"
            >
              <FaAngleDoubleRight className="mt-0.5" />
              <p>Privacy Policy</p>
            </Link>
            <Link
              to="/home"
              className="text-lg text-gray-300 hover:text-[#2563eb] duration-300 flex items-center gap-3"
            >
              <FaAngleDoubleRight className="mt-0.5" />
              <p>Cookies</p>
            </Link>
            <Link
              to="/home"
              className="text-lg text-gray-300 hover:text-[#2563eb] duration-300 flex items-center gap-3"
            >
              <FaAngleDoubleRight className="mt-0.5" />
              <p>Ad Cookies</p>
            </Link>
          </div>
        </div>

        <div>
          <div className="text-start w-full flex flex-col justify-start items-start gap-3">
            <h4 className="lg:mb-6 mb-0 lg:mt-0 mt-6 text-xl font-bold">
              Partners
            </h4>
            <Link
              to="/home"
              className="text-lg text-gray-300 hover:text-[#2563eb] duration-300 flex items-center gap-3"
            >
              <FaAngleDoubleRight className="mt-0.5" />
              <p>Retailers</p>
            </Link>
            <Link
              to="/home"
              className="text-lg text-gray-300 hover:text-[#2563eb] duration-300 flex items-center gap-3"
            >
              <FaAngleDoubleRight className="mt-0.5" />
              <p>Affiliate</p>
            </Link>
            <Link
              to="/home"
              className="text-lg text-gray-300 hover:text-[#2563eb] duration-300 flex items-center gap-3"
            >
              <FaAngleDoubleRight className="mt-0.5" />
              <p>Developers</p>
            </Link>
            <Link
              to="/home"
              className="text-lg text-gray-300 hover:text-[#2563eb] duration-300 flex items-center gap-3"
            >
              <FaAngleDoubleRight className="mt-0.5" />
              <p>Press Release</p>
            </Link>
          </div>
        </div>
        <div>
          <div className="text-start w-full flex flex-col justify-start items-start gap-3">
            <h4 className="lg:mb-6 mb-0 lg:mt-0 mt-6 text-xl font-bold">
              Service
            </h4>
            <Link
              to="/about"
              className="text-lg text-gray-300 hover:text-[#2563eb] duration-300 flex items-center gap-3"
            >
              <FaAngleDoubleRight className="mt-0.5" />
              <p>About Us</p>
            </Link>
            <Link
              to="/home"
              className="text-lg text-gray-300 hover:text-[#2563eb] duration-300 flex items-center gap-3"
            >
              <FaAngleDoubleRight className="mt-0.5" />
              <p>Careers</p>
            </Link>
            <Link
              to="/home"
              className="text-lg text-gray-300 hover:text-[#2563eb] duration-300 flex items-center gap-3"
            >
              <FaAngleDoubleRight className="mt-0.5" />
              <p>Buzz</p>
            </Link>
            <Link
              to="/home"
              className="text-lg text-gray-300 hover:text-[#2563eb] duration-300 flex items-center gap-3"
            >
              <FaAngleDoubleRight className="mt-0.5" />
              <p>Activity Index</p>
            </Link>
          </div>
        </div>
        <div>
          <div className="text-start w-full flex flex-col justify-start items-start gap-3">
            <h4 className="lg:mb-6 mb-0 lg:mt-0 mt-6 text-xl font-bold">
              Information
            </h4>
            <Link
              to="/about"
              className="text-lg text-gray-300 hover:text-[#2563eb] duration-300 flex items-center gap-3"
            >
              <FaAngleDoubleRight className="mt-0.5" />
              <p>Company</p>
            </Link>
            <Link
              to="/home"
              className="text-lg text-gray-300 hover:text-[#2563eb] duration-300 flex items-center gap-3"
            >
              <FaAngleDoubleRight className="mt-0.5" />
              <p>Partners</p>
            </Link>
            <Link
              to="/home"
              className="text-lg text-gray-300 hover:text-[#2563eb] duration-300 flex items-center gap-3"
            >
              <FaAngleDoubleRight className="mt-0.5" />
              <p>Programmes</p>
            </Link>
            <Link
              to="/home"
              className="text-lg text-gray-300 hover:text-[#2563eb] duration-300 flex items-center gap-3"
            >
              <FaAngleDoubleRight className="mt-0.5" />
              <p>Members</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
