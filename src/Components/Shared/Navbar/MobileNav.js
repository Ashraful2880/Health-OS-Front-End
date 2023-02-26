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
            onClick={() => setHide(false)}
          >
            Home
          </Link>
          <ul className="flex justify-center">
            <li className="group">
              <Link
                to="/shopCategory/All"
                className="text-md font-semibold hover:text-[#2563eb] focus:text-[#2563eb] duration-300 my-0 flex items-end py-5"
                onClick={() => setHide(false)}
              >
                <span className="font-semibold "> Browse Categories </span>
                <FaAngleDown className="ml-1 text-md" />
              </Link>
              <div className="w-full text-left px-6 mb-36 sm:mb-0 bg-[#0b1144]  hidden absolute top-16 left-0 shadow-xl overflow-hidden group-hover:block">
                <div className="w-full flex flex-wrap justify-between megaMenuAnimation">
                  <div className="lg:w-1/4 md:w-1/2 w-full lg:pt-4 px-4 lg:border-b-0 border-b sm:border-r border-gray-600">
                    <div className="flex items-center border-b border-gray-600 mb-4">
                      <h3 className="text-xl text-[#2563eb] font-bold mb-5">
                        Top Categories
                      </h3>
                    </div>
                    <div className="text-gray-100 text-md flex flex-col">
                      <Link
                        to="/shopCategory/All"
                        className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                        onClick={() => setHide(false)}
                      >
                        <FaAngleDoubleRight className="mr-2 text-md" />
                        <span> All Products</span>
                      </Link>
                      <Link
                        to="/shopCategory/medicalEquipments"
                        className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                        onClick={() => setHide(false)}
                      >
                        <FaAngleDoubleRight className="mr-2 text-md" />
                        <span> Medical Equipments </span>
                      </Link>
                      <Link
                        to="/shopCategory/medicine"
                        className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                        onClick={() => setHide(false)}
                      >
                        <FaAngleDoubleRight className="mr-2 text-md" />
                        <span> All Medicine </span>
                      </Link>
                      <Link
                        to="/shopCategory/emergencyKits"
                        className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                        onClick={() => setHide(false)}
                      >
                        <FaAngleDoubleRight className="mr-2 text-md" />
                        Emergency Kits
                      </Link>
                      <Link
                        to="/shopCategory/mask"
                        className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                        onClick={() => setHide(false)}
                      >
                        <FaAngleDoubleRight className="mr-2 text-md" />
                        Mask Collections
                      </Link>
                      <Link
                        to="/shopCategory/medicalItems"
                        className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                        onClick={() => setHide(false)}
                      >
                        <FaAngleDoubleRight className="mr-2 text-md" />
                        Medical Items
                      </Link>
                      <Link
                        to="/shopCategory/others"
                        className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                        onClick={() => setHide(false)}
                      >
                        <FaAngleDoubleRight className="mr-2 text-md" />
                        UnCategorized
                      </Link>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 lg:w-1/4 lg:pt-4 px-4 border-b sm:border-r lg:border-b-0 lg:border-r border-gray-600">
                    <div className="flex items-center border-b border-gray-600 mb-4">
                      <h3 className="text-xl text-[#2563eb] font-bold mb-5">
                        Special Products
                      </h3>
                    </div>
                    <div className="text-gray-100 text-md flex flex-col">
                      <Link
                        to="/home"
                        className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                        onClick={() => setHide(false)}
                      >
                        <FaAngleDoubleRight className="mr-2 text-md" />
                        Top Trending
                      </Link>
                      <Link
                        to="/home"
                        className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                        onClick={() => setHide(false)}
                      >
                        <FaAngleDoubleRight className="mr-2 text-md" />
                        Best Selling
                      </Link>
                      <Link
                        to="/home"
                        className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                        onClick={() => setHide(false)}
                      >
                        <FaAngleDoubleRight className="mr-2 text-md" />
                        New Arraival
                      </Link>
                      <Link
                        to="/home"
                        className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                        onClick={() => setHide(false)}
                      >
                        <FaAngleDoubleRight className="mr-2 text-md" />
                        Hot Sales
                      </Link>
                      <Link
                        to="/sanitizers"
                        className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                        onClick={() => setHide(false)}
                      >
                        <FaAngleDoubleRight className="mr-2 text-md" />
                        sanitizer Collections
                      </Link>
                      <Link
                        to="/home"
                        className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                        onClick={() => setHide(false)}
                      >
                        <FaAngleDoubleRight className="mr-2 text-md" />
                        Brand Of The Week
                      </Link>
                      <Link
                        to="/home"
                        className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                        onClick={() => setHide(false)}
                      >
                        <FaAngleDoubleRight className="mr-2 text-md" />
                        App Info
                      </Link>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 lg:w-1/4 px-4 pb-6 lg:pt-4 pt-6 lg:border-b-0 md:border-b-0 border-b border-r cursor-pointer border-gray-600">
                    <div className="flex items-center border-b border-gray-600 mb-4">
                      <h3 className="text-xl text-[#2563eb] font-bold mb-5">
                        Latest News
                      </h3>
                    </div>
                    <h4 className="text-[#2563eb] mb-2 font-bold flex items-center gap-x-0">
                      <FaAngleDoubleRight className="mr-1 text-md" />
                      <span> For Sellar </span>
                    </h4>
                    <p className="text-gray-300 text-sm">
                      This proposal is a win-win situation which will cause a
                      stellar paradigm shift, let's touch base off-line before
                      we fire the new ux experience.
                    </p>
                    <h4 className="text-[#2563eb] my-2 font-bold flex items-center gap-x-1">
                      <FaAngleDoubleRight className="mr-1 text-md" />
                      For Buyer
                    </h4>
                    <p className="text-gray-300 text-sm">
                      This proposal is a win-win situation which will cause a
                      stellar paradigm shift, let's touch base off-line before
                      we fire the new ux experience.
                    </p>
                  </div>
                  <ul className="w-full sm:w-1/2 lg:w-1/4 px-4 pb-6 lg:pt-4 pt-6 lg:border-b-0 md:border-b-0 border-b border-r border-gray-600 cursor-pointer">
                    <div className="flex items-center border-b border-gray-600 mb-4">
                      <h3 className="text-xl text-[#2563eb] font-bold mb-5">
                        Weekly Hot
                      </h3>
                    </div>
                    <Link to="/women" onClick={() => setHide(false)}>
                      <img
                        src="https://res.cloudinary.com/ashraful-islam/image/upload/v1677009072/Health-OS/Others/Categories-Mega_Menu_Feature_at1grz.png"
                        alt="Drop Down Bannar"
                        className="rounded-lg"
                      />
                    </Link>
                    <p className="text-gray-100 text-sm mt-4">
                      This is a no-brainer to wash your face, or we need to
                      future-proof this high performance keywords granularity.
                    </p>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <Link
            className="text-md font-semibold hover:text-[#2563eb] focus:text-[#2563eb] duration-300 flex items-center gap-x-1"
            to="/shopCategory/All"
          >
            Shop Now
          </Link>
          <Link
            to="/about"
            className="text-md font-semibold hover:text-[#2563eb] focus:text-[#2563eb] duration-300 flex justify-center items-center gap-x-1 my-2"
            onClick={() => setHide(false)}
          >
            About
          </Link>
          <Link
            to="/blogs"
            className="text-md font-semibold hover:text-[#2563eb] focus:text-[#2563eb] duration-300 flex justify-center items-center gap-x-1 my-2"
            onClick={() => setHide(false)}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-md font-semibold hover:text-[#2563eb] focus:text-[#2563eb] duration-300 flex justify-center items-center gap-x-1 my-2 pb-3"
            onClick={() => setHide(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
