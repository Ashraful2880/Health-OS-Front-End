import React from "react";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { VscClose } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { CgLogOut } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

const DashboardHeader = ({ open, setOpen, mobileOpen, setMobileOpen }) => {
  const alert = useAlert();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    alert.success("Logout Successful");
    navigate("/home");
  };

  return (
    <div>
      <header
        className={`flex items-center lg:h-20 md:h-20 h-16 ${
          open === true ? "z-50" : "px-2"
        } bg-white border-b`}
      >
        <button
          className="mx-2 px-4 hidden sm:block"
          onClick={() => setOpen(open === true ? false : true)}
        >
          {open ? (
            <div className="bg-[#FEE2E2] text-[#DC2626] h-8 w-8 p-1 rounded-full duration-300 flex flex-col justify-center items-center">
              <VscClose className="text-2xl" />
            </div>
          ) : (
            <div className="bg-[#DBEAFE] text-[#2563EB] h-8 w-8 p-1 rounded-full duration-300 flex flex-col justify-center items-center">
              <RiBarChartHorizontalLine className="text-lg" />
            </div>
          )}
        </button>
        {mobileOpen ? (
          <div
            onClick={() => setMobileOpen(mobileOpen === true ? false : true)}
            className="bg-[#FEE2E2] text-[#DC2626] h-8 w-8 p-1 rounded-full duration-300 flex flex-col justify-center items-center"
          >
            <VscClose className="text-2xl" />
          </div>
        ) : (
          <div className="h-8 w-8 p-1 rounded-full duration-300 flex flex-col justify-center items-center">
            <button
              onClick={() => setMobileOpen(mobileOpen === true ? false : true)}
              className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-[#DBEAFE] hover:text-gray-800 focus:bg-[#DBEAFE] focus:text-gray-800 rounded-full duration-200"
            >
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>
          </div>
        )}
        {/* Header Search Area */}
        <div className="relative w-full max-w-md lg:-ml-10 md:-ml-4 ml-2">
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="absolute h-5 w-5 mt-3 ml-3 text-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            role="search"
            placeholder="Search Here..."
            className="lg:py-2 md:py-2 py-1.5 pl-10 pr-4 w-full border placeholder-gray-400 focus:bg-gray-50 rounded-lg focus:outline-[#2563EB]"
          />
        </div>

        <div className="flex flex-shrink-0 items-center ml-auto mr-5">
          {/* {user && ( */}
          <button
            onClick={() => alert("User profile Coming")}
            className="inline-flex items-center p-2 rounded-lg"
          >
            <div className="flex flex-col items-end leading-tight">
              <span className="font-semibold">
                {/* {user?.displayName || ""} */}
                Ashraful Islam
              </span>
            </div>
            <IoIosArrowDown className="mx-2 hidden lg:block md:block" />
          </button>
          {/* )} */}
          <div className="lg:border-l md:border-l border-l-0 pl-2 space-x-1">
            {/* {user && ( */}
            <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full hidden lg:inline-block md:inline-block">
              <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
              <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            {/* )} */}
            <button
              onClick={handleLogOut}
              className="relative lg:p-2 md:p-2 py-2"
            >
              <CgLogOut className="text-3xl bg-[#FEE2E2] text-[#E96D6D] p-1 flex flex-col justify-center items-center rounded-full" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default DashboardHeader;
