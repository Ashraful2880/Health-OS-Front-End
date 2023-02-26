import React, { useEffect } from "react";
import axios from "axios";
import ModalLoader from "../../../Shared/ModalLoader/ModalLoader";
import {
  FaEnvelope,
  FaIdCard,
  FaLocationArrow,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import { TbWorldDownload } from "react-icons/tb";

const SingleCustomerDetails = ({ setView, productID }) => {
  const [singleCustomer, setSingleCustomer] = React.useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_PATH}/customer/${productID}`)
      .then((resp) => {
        setSingleCustomer(resp.data);
      });
  }, [productID]);

  return (
    <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
      <div className="flex items-center justify-center min-height-100vh lg:pt-4 md:pt-10 pt-20 px-4 pb-20 text-center">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-7xl sm:w-full">
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 footer-bg">
            <div className="pb-2 flex justify-between items-center border-b mb-6">
              <h2 className="text-2xl font-semibold">
                Details Of
                <span className="text-[#2563eb]"> {singleCustomer?.name}</span>
              </h2>
              <button
                onClick={() => setView(false)}
                type="button"
                className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-white hover:text-red-500 border border-red-500 duration-300 mr-2"
              >
                Close
              </button>
            </div>
          </div>
          {singleCustomer?._id ? (
            <div className="grid lg:grid-cols-3 d:grid-cols-2 grid-cols-1 lg:pb-20 pb-10 px-6">
              <div className="p-2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg shadow-md hover:shadow-none cursor-pointer duration-300">
                  <div className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 flex justify-center items-center">
                    <FaIdCard className="text-3xl text-[#2563eb]" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-600">Name</h2>
                    <p className="text-[#2563eb] text-lg font-semibold">
                      {singleCustomer?.name}
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
                      {singleCustomer?.userName}
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
                      {singleCustomer?.email}
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
                      {singleCustomer?.phone}
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
                      {singleCustomer?.address}
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
                      {singleCustomer?.LastVisited}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <ModalLoader />
          )}
        </div>
      </div>
    </div>
  );
};
export default SingleCustomerDetails;
