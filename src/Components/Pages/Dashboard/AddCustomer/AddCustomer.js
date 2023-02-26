import React from "react";
import axios from "axios";
import { IoMdPersonAdd } from "react-icons/io";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

const AddCustomer = () => {
  const alert = useAlert();
  const navigate = useNavigate();

  const [name, setName] = React.useState();
  const [userName, setUserName] = React.useState();
  const [email, setEmail] = React.useState();
  const [phone, setPhone] = React.useState();
  const [address, setAddress] = React.useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = { name, userName, email, phone, address };
    axios
      .post(`${process.env.REACT_APP_API_PATH}/customers`, newData)
      .then(function (response) {
        alert.success("Customer Added Successfull");
        navigate("/dashboard/customerList");
      })
      .catch(function (error) {
        alert.error(error?.message);
      });
    e.target.reset();
  };

  return (
    <div className="footer-bg h-screen">
      {/* Heading Title */}
      <div className="lg:pt-3 md:pt-3 pt-2 lg:px-3 md:px-3 px-0 mx-2">
        <div className="text-xl bg-white lg:w-60 w-full flex items-center gap-x-2 px-5">
          <IoMdPersonAdd className="text-[#2563eb]" />
          <h3 className="font-semibold text-[#2563eb] py-1.5">Add Customer</h3>
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto p-5 border myShadow rounded-md bg-white pb-6">
        <div className="text-center mb-10">
          <p className="mt-4 text-sm leading-7 text-gray-800 font-semibold uppercase">
            Fill With Customer Info
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            To <span className="text-[#2563eb]">Add a Customer</span>
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex justify-between items-center gap-x-4 mb-3">
            <div className="w-full">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                Customer Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white"
                type="text"
                placeholder="Enter Customer Name"
              />
            </div>

            <div className="w-full">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                Customer Username
              </label>
              <input
                onChange={(e) => setUserName(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white"
                type="text"
                placeholder="Enter Customer Username"
              />
            </div>
          </div>

          <div className="flex justify-between items-center gap-x-4 mb-3">
            <div className="w-full">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                Customer Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white"
                type="email"
                placeholder="Enter Customer Email"
              />
            </div>

            <div className="w-full">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                Customer Phone
              </label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white"
                type="number"
                placeholder="Enter Customer Number"
              />
            </div>
          </div>

          <div className="flex justify-between items-center gap-x-4 mb-3">
            <div className="w-full">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                Cusromer Address
              </label>
              <textarea
                rows={4}
                onChange={(e) => setAddress(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white"
                type="text"
                placeholder="Enter Customer Address"
              />
            </div>
          </div>

          <div className="flex justify-start w-full px-3">
            <button
              className="shadow bg-[#2563eb] hover:bg-white text-white hover:text-[#2563eb] font-bold py-2 px-6 rounded border border-[#2563eb] duration-300"
              type="submit"
            >
              Add Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
