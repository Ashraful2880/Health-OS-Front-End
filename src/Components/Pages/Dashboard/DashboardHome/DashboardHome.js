import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import LoadingScreen from "../../../Shared/LoadingScreen/LoadingScreen";

const DashboardHome = () => {
  const [users, setUsers] = React.useState();
  const [customers, setCustomers] = React.useState();
  const location = useLocation();
  const pathName = location?.pathname;

  // Get All Users Data
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_PATH}/users`).then((resp) => {
      setUsers(resp?.data);
    });
    // Get All Customers Data
    axios.get(`${process.env.REACT_APP_API_PATH}/customers`).then((resp) => {
      setCustomers(resp?.data);
    });
  }, []);
  const admin = users?.filter((user) => user?.role === "Admin");

  return (
    <div className="min-h-screen">
      {!pathName.includes("dashboard/overview") &&
        !pathName.includes("dashboard/summary") && (
          <div className="lg:pt-3 md:pt-3 pt-2 lg:px-3 md:px-3 px-0 mx-2">
            <div className="text-xl bg-white lg:w-60 w-full flex items-center gap-x-2 px-5">
              <FaHome className="text-[#2563eb]" />
              <h3 className="font-semibold text-[#2563eb] py-1.5">
                Dashboard Home
              </h3>
            </div>
          </div>
        )}
      {users?.length > 0 ? (
        <main className="px-6 pb-5 space-y-6 mt-10">
          <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="flex items-center p-8 bg-white shadow rounded-lg cursor-pointer hover:shadow-md duration-300 relative group overflow-hidden">
              <div className="h-full w-full bg-[#2563eb] absolute top-0 right-0 translate-x-[88%] group-hover:translate-x-0 translate-y-[60%] group-hover:translate-y-0 rounded-l-full group-hover:rounded-l-none duration-300"></div>
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-[#2563eb] bg-blue-100 group-hover:bg-white rounded-full mr-6 z-50">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="z-50">
                <span className="block text-3xl font-bold text-[#2563eb] group-hover:text-white">
                  {customers?.length || 0}
                </span>
                <span className="block text-gray-500 group-hover:text-white z-50">
                  Active Customer
                </span>
              </div>
            </div>
            <div className="flex items-center p-8 bg-white shadow rounded-lg cursor-pointer hover:shadow-md duration-300 relative group overflow-hidden">
              <div className="h-full w-full bg-green-600 absolute top-0 right-0 translate-x-[88%] group-hover:translate-x-0 translate-y-[60%] group-hover:translate-y-0 rounded-l-full group-hover:rounded-l-none duration-300"></div>
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 group-hover:bg-white rounded-full mr-6 z-50">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div className="z-50">
                <span className="block text-3xl font-bold text-green-600 group-hover:text-white">
                  {users?.length || 0}
                </span>
                <span className="block text-gray-500 group-hover:text-white">
                  Regular Users
                </span>
              </div>
            </div>
            <div className="flex items-center p-8 bg-white shadow rounded-lg cursor-pointer hover:shadow-md duration-300 relative group overflow-hidden">
              <div className="h-full w-full bg-red-500 absolute top-0 right-0 translate-x-[88%] group-hover:translate-x-0 translate-y-[60%] group-hover:translate-y-0 rounded-l-full group-hover:rounded-l-none duration-300"></div>
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 group-hover:bg-white rounded-full mr-6 z-50">
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
                    d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                  />
                </svg>
              </div>
              <div className="z-50 group-hover:text-white">
                <span className="inline-block text-2xl font-bold">
                  {admin?.length || 1}
                </span>
                <span className="block text-gray-500 group-hover:text-white">
                  Smart Admin
                </span>
              </div>
            </div>
            <div className="flex items-center p-8 bg-white shadow rounded-lg cursor-pointer hover:shadow-md duration-300 relative group overflow-hidden">
              <div className="h-full w-full bg-[#2563eb] absolute top-0 right-0 translate-x-[88%] group-hover:translate-x-0 translate-y-[60%] group-hover:translate-y-0 rounded-l-full group-hover:rounded-l-none duration-300"></div>
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-[#2563eb] bg-blue-100 group-hover:bg-white rounded-full mr-6 z-50">
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
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div className="z-50 group-hover:text-white">
                <span className="block text-2xl font-bold">83%</span>
                <span className="block text-gray-500 group-hover:text-white">
                  Success Rate
                </span>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default DashboardHome;
