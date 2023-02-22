import React from "react";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { FaAngleDoubleRight, FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const MainHeader = () => {
  const [hide, setHide] = React.useState(false);

  return (
    <div className="lg:border border-0  my-0 lg:mt-0 lg:shadow-md shadow-none">
      <nav className="bg-white lg:container lg:mx-auto">
        <div className="md:flex md:justify-between md:items-center">
          <div className="w-full">
            <div className="lg:block hidden">
              <Navbar />
            </div>
            <div className="lg:hidden block">
              <MobileNav />
            </div>
          </div>

          <div className="lg:block sm:hidden md:hidden">
            <div className="flex items-center gap-x-6">
              <Link
                to="/wishlist"
                className="relative hover:text-[#2563eb] duration-300"
              >
                <FiHeart className="text-2xl" />
                <div className="h-5 w-5 rounded-full bg-[#2563eb] flex flex-col justify-center items-center p-2 text-white font-bold absolute -top-4 left-3">
                  0
                </div>
              </Link>
              <Link
                to="/cart"
                className="relative hover:text-[#2563eb] duration-300"
              >
                <div className="h-5 w-5 rounded-full bg-[#2563eb] flex flex-col justify-center items-center p-2 text-white font-bold absolute -top-4 left-3">
                  0
                </div>
                <FiShoppingBag className="text-2xl" />
              </Link>
              <p className="font-semibold hover:text-[#2563eb] duration-300 cursor-pointer">
                $0.00
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainHeader;
