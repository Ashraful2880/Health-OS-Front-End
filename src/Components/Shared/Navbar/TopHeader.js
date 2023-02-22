import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { CgTwitter } from "react-icons/cg";
import { GrInstagram } from "react-icons/gr";
import { ImGooglePlus } from "react-icons/im";

const TopHeader = () => {
  return (
    <div className="bg-[#2563eb] py-2 lg:block hidden">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-white">Free Shipping For All Order Of $99</p>
        <div className="flex items-center gap-x-4">
          <a
            href="https://www.facebook.com/ashraful2880"
            target="blank"
            className="text-white text-lg"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.facebook.com/ashraful2880"
            target="blank"
            className="text-white text-lg"
          >
            <CgTwitter />
          </a>
          <a
            href="https://www.facebook.com/ashraful2880"
            target="blank"
            className="text-white text-lg"
          >
            <GrInstagram />
          </a>
          <a
            href="https://www.facebook.com/ashraful2880"
            target="blank"
            className="text-white text-lg"
          >
            <ImGooglePlus />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
