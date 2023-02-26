import React, { useEffect } from "react";
import axios from "axios";
import {
  FaEnvelope,
  FaHeartbeat,
  FaIdCard,
  FaLocationArrow,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import DashboardHome from "../DashboardHome/DashboardHome";
import LoadingScreen from "../../../Shared/LoadingScreen/LoadingScreen";
import { TbWorldDownload } from "react-icons/tb";

const Overview = () => {
  const [orders, setOrders] = React.useState();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_PATH}/orders`).then((resp) => {
      setOrders(resp.data);
    });
  }, []);

  return (
    <div className=" h-screen bg-white">
      {/* Heading Title */}
      <div className="lg:pt-3 md:pt-3 pt-2 lg:px-3 md:px-3 px-0 mx-2">
        <div className="text-xl bg-white lg:w-60 w-full flex items-center gap-x-2 px-5">
          <FaHeartbeat className="text-[#2563eb]" />
          <h3 className="font-semibold text-[#2563eb] py-1.5">Overview</h3>
        </div>
      </div>
      <div>
        <h1 className="text-left text-2xl font-bold pl-10 pb-3 pt-1">Best Customer Of <span className="text-[#2563eb]">2022</span></h1>
        <div className="grid lg:grid-cols-3 d:grid-cols-2 grid-cols-1 lg:pb-20 pb-10 px-6">
          <div className="p-2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg shadow-md hover:shadow-none cursor-pointer duration-300">
              <div className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 flex justify-center items-center">
                <FaIdCard className="text-3xl text-[#2563eb]" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-600">Name</h2>
                <p className="text-[#2563eb] text-lg font-semibold">
                  Md.Ashraful Islam
                </p>
              </div>
            </div>
          </div>

          <div className="p-2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg shadow-md hover:shadow-none cursor-pointer duration-300">
              <div className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 flex justify-center items-center">
                <FaUser className="text-3xl text-[#2563eb]" />
              </div>

              <div className="flex-grow">
                <h2 className="text-gray-600">User Name</h2>
                <p className="text-[#2563eb] text-lg font-semibold">
                  ashraful2880
                </p>
              </div>
            </div>
          </div>

          <div className="p-2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg shadow-md hover:shadow-none cursor-pointer duration-300">
              <div className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 flex justify-center items-center">
                <FaEnvelope className="text-3xl text-[#2563eb]" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-600">Email</h2>
                <p className="text-[#2563eb] text-lg font-semibold">
                  contact.ashraful1@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="p-2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg shadow-md hover:shadow-none cursor-pointer duration-300">
              <div className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 flex justify-center items-center">
                <FaPhoneAlt className="text-3xl text-[#2563eb]" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-600">Phone</h2>
                <p className="text-[#2563eb] text-lg font-semibold">
                  01974238487
                </p>
              </div>
            </div>
          </div>

          <div className="p-2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg shadow-md hover:shadow-none cursor-pointer duration-300">
              <div className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 flex justify-center items-center">
                <FaLocationArrow className="text-3xl text-[#2563eb]" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-600">Address</h2>
                <p className="text-[#2563eb] text-lg font-semibold">
                  Khulna, Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>

          <div className="p-2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg shadow-md hover:shadow-none cursor-pointer duration-300">
              <div className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 flex justify-center items-center">
                <TbWorldDownload className="text-4xl text-[#2563eb]" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-600">Last Visited</h2>
                <p className="text-[#2563eb] text-lg font-semibold">
                  12-APR-2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-left text-2xl font-bold pl-10 -mb-4 pt-1">Overall Account <span className="text-[#2563eb]">Activity</span></h1>
      <DashboardHome />
    </div>
  );
};

export default Overview;
