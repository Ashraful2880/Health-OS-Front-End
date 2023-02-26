import React from "react";
import { FaAngleDoubleRight, FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex items-center gap-x-12 relative z-50">
      <Link
        to="/home"
        className="text-md font-semibold hover:text-[#2563eb] focus:text-[#2563eb] duration-300"
      >
        Home
      </Link>
      <ul className="flex justify-center">
        <li className="group">
          <Link
            to="/shopCategory/All"
            className="text-md font-semibold hover:text-[#2563eb] focus:text-[#2563eb] duration-300 my-0 flex items-end py-5"
          >
            <span className="font-semibold "> Browse Categories </span>
            <FaAngleDown className="ml-1 text-md" />
          </Link>
          <div className="w-full text-left px-6 mb-36 sm:mb-0 bg-[#0b1144]  hidden absolute top-16 left-0 shadow-xl overflow-hidden group-hover:block">
            <div className="w-full flex flex-wrap justify-between megaMenuAnimation">
              <div className="lg:w-1/4 md:w-1/2 w-full lg:pt-4 px-4 lg:border-b-0 border-b sm:border-r border-gray-600">
                <div className="flex items-center border-b border-gray-600 mb-4">
                  <h3 className="text-xl text-white font-bold mb-5">
                    Top Categories
                  </h3>
                </div>
                <div className="text-gray-100 text-md flex flex-col">
                  <Link
                    to="/shopCategory/All"
                    className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                  >
                    <FaAngleDoubleRight className="mr-2 text-md" />
                    <span> All Products</span>
                  </Link>
                  <Link
                    to="/shopCategory/medicalEquipments"
                    className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                  >
                    <FaAngleDoubleRight className="mr-2 text-md" />
                    <span> Medical Equipments </span>
                  </Link>
                  <Link
                    to="/shopCategory/medicine"
                    className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                  >
                    <FaAngleDoubleRight className="mr-2 text-md" />
                    <span> All Medicine </span>
                  </Link>
                  <Link
                    to="/shopCategory/emergencyKits"
                    className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                  >
                    <FaAngleDoubleRight className="mr-2 text-md" />
                    Emergency Kits
                  </Link>
                  <Link
                    to="/shopCategory/mask"
                    className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                  >
                    <FaAngleDoubleRight className="mr-2 text-md" />
                    Mask Collections
                  </Link>
                  <Link
                    to="/shopCategory/medicalItems"
                    className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                  >
                    <FaAngleDoubleRight className="mr-2 text-md" />
                    Medical Items
                  </Link>
                  <Link
                    to="/shopCategory/others"
                    className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                  >
                    <FaAngleDoubleRight className="mr-2 text-md" />
                    UnCategorized
                  </Link>
                  <div className="flex items-center my-4">
                    <Link to="/shopCategory/" className="w-full">
                      <img
                        className="w-full mb-2"
                        src="https://res.cloudinary.com/ashraful-islam/image/upload/v1677010983/Health-OS/Others/1_rkbro2.png"
                        alt="shop banner"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 lg:pt-4 px-4 border-b sm:border-r lg:border-b-0 lg:border-r border-gray-600">
                <div className="flex items-center border-b border-gray-600 mb-4">
                  <h3 className="text-xl text-white font-bold mb-5">
                    Special Products
                  </h3>
                </div>
                <div className="text-gray-100 text-md flex flex-col">
                  <Link
                    to="/home"
                    className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                  >
                    <FaAngleDoubleRight className="mr-2 text-md" />
                    Top Trending
                  </Link>
                  <Link
                    to="/home"
                    className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                  >
                    <FaAngleDoubleRight className="mr-2 text-md" />
                    Best Selling
                  </Link>
                  <Link
                    to="/home"
                    className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                  >
                    <FaAngleDoubleRight className="mr-2 text-md" />
                    New Arraival
                  </Link>
                  <Link
                    to="/home"
                    className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                  >
                    <FaAngleDoubleRight className="mr-2 text-md" />
                    Hot Sales
                  </Link>
                  <Link
                    to="/sanitizers"
                    className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                  >
                    <FaAngleDoubleRight className="mr-2 text-md" />
                    sanitizer Collections
                  </Link>
                  <Link
                    to="/home"
                    className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                  >
                    <FaAngleDoubleRight className="mr-2 text-md" />
                    Brand Of The Week
                  </Link>
                  <Link
                    to="/home"
                    className="mb-3 hover:text-[#2563eb] duration-300 flex items-center gap-x-1"
                  >
                    <FaAngleDoubleRight className="mr-2 text-md" />
                    App Info
                  </Link>
                  <div className="flex items-center my-4">
                    <Link to="/shopCategory/BagPack" className="w-full">
                      <img
                        className="w-full mb-2"
                        src="https://res.cloudinary.com/ashraful-islam/image/upload/v1677010983/Health-OS/Others/2_za6qzo.png"
                        alt="shop banner"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4 pb-6 lg:pt-4 pt-6 lg:border-b-0 md:border-b-0 border-b border-r cursor-pointer border-gray-600">
                <div className="flex items-center border-b border-gray-600 mb-4">
                  <h3 className="text-xl text-white font-bold mb-5">
                    Latest News
                  </h3>
                </div>
                <h4 className="text-white mb-2 font-bold flex items-center gap-x-0">
                  <FaAngleDoubleRight className="mr-1 text-md" />
                  <span> For Sellar </span>
                </h4>
                <p className="text-gray-300 text-sm">
                  This proposal is a win-win situation which will cause a
                  stellar paradigm shift, let's touch base off-line before we
                  fire the new ux experience.
                </p>
                <h4 className="text-white my-2 font-bold flex items-center gap-x-1">
                  <FaAngleDoubleRight className="mr-1 text-md" />
                  For Buyer
                </h4>
                <p className="text-gray-300 text-sm">
                  This proposal is a win-win situation which will cause a
                  stellar paradigm shift, let's touch base off-line before we
                  fire the new ux experience.
                </p>
                <div className="flex items-center mb-4 lg:mt-20 mt-10">
                  <Link to="/shopCategory/Women" className="mb-2 w-full">
                    <img
                      className="mb-2 w-full"
                      src="https://res.cloudinary.com/ashraful-islam/image/upload/v1677010984/Health-OS/Others/3_qitakq.png"
                      alt="shop banner"
                    />
                  </Link>
                </div>
              </div>
              <ul className="w-full sm:w-1/2 lg:w-1/4 px-4 pb-6 lg:pt-4 pt-6 lg:border-b-0 md:border-b-0 border-b border-r border-gray-600 cursor-pointer">
                <div className="flex items-center border-b border-gray-600 mb-4">
                  <h3 className="text-xl text-white font-bold mb-5">
                    Weekly Hot
                  </h3>
                </div>
                <Link to="/women">
                  <img
                    src="https://res.cloudinary.com/ashraful-islam/image/upload/v1677009072/Health-OS/Others/Categories-Mega_Menu_Feature_at1grz.png"
                    alt="Drop Down Bannar"
                    className="rounded-lg"
                  />
                </Link>
                <p className="text-gray-100 text-sm mt-4 mb-4">
                  This is a no-brainer to wash your face
                </p>
                <div className="flex items-center mb-4">
                  <Link to="/shopCategory/Kids" className="mx-1">
                    <img
                      src="https://res.cloudinary.com/ashraful-islam/image/upload/v1677010983/Health-OS/Others/4_v13bxk.jpg"
                      alt="Drop Down Bannar"
                    />
                  </Link>
                  <Link to="/shopCategory/Women" className="mx-1">
                    <img
                      src="https://res.cloudinary.com/ashraful-islam/image/upload/v1677010983/Health-OS/Others/5_stqhrv.jpg"
                      alt="Drop Down Bannar"
                    />
                  </Link>
                </div>
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
        className="text-md font-semibold hover:text-[#2563eb] focus:text-[#2563eb] duration-300 flex items-center gap-x-1"
      >
        About
      </Link>
      <Link
        to="/blogs"
        className="text-md font-semibold hover:text-[#2563eb] focus:text-[#2563eb] duration-300 flex items-center gap-x-1"
      >
        Blog
      </Link>
      <Link
        to="/contact"
        className="text-md font-semibold hover:text-[#2563eb] focus:text-[#2563eb] duration-300 flex items-center gap-x-1"
      >
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
