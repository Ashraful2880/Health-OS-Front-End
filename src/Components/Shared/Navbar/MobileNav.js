import React, { useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Images/logo.png";

const MobileNav = () => {
  const [hide, setHide] = React.useState(false);
  const [items, setItems] = React.useState();
  const [wishListItems, setWishListItems] = React.useState();
  const [changes, setChanges] = React.useState(0);

  const totalPrice = items?.reduce(
    (accumulator, currentValue) => accumulator + currentValue?.price,
    0
  );

  useEffect(() => {
    const myCartProduct = localStorage.getItem("cart");
    setItems(JSON.parse(myCartProduct));
    setChanges(changes + 1);
  }, [items, changes]);

  useEffect(() => {
    const wishListProduct = localStorage.getItem("wishList");
    setWishListItems(JSON.parse(wishListProduct));
    setChanges(changes + 1);
  }, [wishListItems, changes]);

  return (
    <div className="w-full flex flex-col items-center gap-x-12 border shadow-md">
      {/* Logo & Humbergar Menu Area */}

      <div className="w-full flex justify-between items-center bg-white z-50 px-8 pt-3 pb-1">
        <div>
          <Link to="/" onClick={() => setHide(false)}>
            <div className="flex items-center gap-x-2">
              <img src={logo} alt="Main Logo" className="w-8 py-2" />
              <h4 className="font-semibold text-lg text-[#15A9E3]">
                HEALTH OS
              </h4>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-6">
            <Link
              to="/wishlist"
              className="relative hover:text-[#2563eb] duration-300"
              onClick={() => setHide(false)}
            >
              <FiHeart className="text-2xl" />
              <div className="h-5 w-5 rounded-full bg-[#2563eb] flex flex-col justify-center items-center p-2 text-white font-bold absolute -top-4 left-3">
                {wishListItems?.length || 0}
              </div>
            </Link>
            <Link
              to="/cart"
              className="relative hover:text-[#2563eb] duration-300"
              onClick={() => setHide(false)}
            >
              <div className="h-5 w-5 rounded-full bg-[#2563eb] flex flex-col justify-center items-center p-2 text-white font-bold absolute -top-4 left-3">
                {items?.length || 0}
              </div>
              <FiShoppingBag className="text-2xl" />
            </Link>
            <Link to="/cart" onClick={() => setHide(false)}>
              <p className="font-semibold hover:text-[#2563eb] duration-300 cursor-pointer">
                ${totalPrice}
              </p>
            </Link>
          </div>
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
        <div className="bg-[#0b1144] w-full text-white rounded-lg pt-5 pb-3 megaMenuAnimation min-h-screen flex flex-col justify-start items-center">
          <button
            onClick={() => setHide(false)}
            className="py-2 my-2 border w-[90%] rounded-full"
          >
            <Link
              to="/home"
              className="text-md font-semibold hover:text-[#2563eb] focus:text-[#2563eb] duration-300"
            >
              Home
            </Link>
          </button>

          <button
            onClick={() => setHide(false)}
            className="py-2 my-2 border w-[90%] rounded-full"
          >
            <Link
              className="text-md font-semibold hover:text-[#2563eb] focus:text-[#2563eb] duration-300"
              to="/shopCategory/All"
              onClick={() => setHide(false)}
            >
              Shop Now
            </Link>
          </button>

          <button
            onClick={() => setHide(false)}
            className="py-2 my-2 border w-[90%] rounded-full"
          >
            <Link
              to="/about"
              className="text-md font-semibold hover:text-[#2563eb] focus:text-[#2563eb] duration-300"
              onClick={() => setHide(false)}
            >
              About
            </Link>
          </button>
          <button
            onClick={() => setHide(false)}
            className="py-2 my-2 border w-[90%] rounded-full"
          >
            <Link
              to="/blogs"
              className="text-md font-semibold hover:text-[#2563eb] focus:text-[#2563eb] duration-300"
              onClick={() => setHide(false)}
            >
              Blog
            </Link>
          </button>
          <button
            onClick={() => setHide(false)}
            className="py-2 my-2 border w-[90%] rounded-full"
          >
            <Link
              to="/contact"
              className="text-md font-semibold hover:text-[#2563eb] focus:text-[#2563eb] duration-300"
              onClick={() => setHide(false)}
            >
              Contact
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
