import React from "react";
import axios from "axios";
import { MdAdminPanelSettings } from "react-icons/md";
import { useAlert } from "react-alert";

const MakeAdmin = () => {
  const alert = useAlert();
  const [adminEmail, setAdminEmail] = React.useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const admin = { email: adminEmail };

    axios
      .put(`${process.env.REACT_APP_API_PATH}/services`, admin)
      .then(function (response) {
        alert.success("Admin Added Successfull");
      })
      .catch(function (error) {
        alert.error(error);
      });
    e.target.reset();
  };

  return (
    <div className="bg-shape h-screen">
      {/* Heading Title */}
      <div className="lg:pt-3 md:pt-3 pt-2 lg:px-3 md:px-3 px-0 mx-2">
        <div className="text-xl bg-white lg:w-60 w-full flex items-center gap-x-2 px-5">
          <MdAdminPanelSettings className="text-[#2563eb]" />
          <h3 className="font-semibold text-[#2563eb] py-1.5">Make Admin</h3>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto p-5 border myShadow rounded-md bg-white lg:pb-14 pb-6">
        <div className="text-center mb-10">
          <p className="mt-4 text-sm leading-7 text-gray-800 font-semibold uppercase">
            Enter an Email
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            To <span className="text-[#2563eb]"> Make An Admin </span>
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-wrap -mx-3 mb-4 justify-center">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                Enter Admin Email
              </label>
              <input
                onChange={(e) => setAdminEmail(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white"
                type="email"
                placeholder="Enter a Email to make an admin"
              />
            </div>
          </div>

          <div className="flex justify-center w-full px-3">
            <button
              className="shadow bg-[#2563eb] hover:bg-white text-white hover:text-[#2563eb] font-bold py-2 px-6 rounded border border-[#2563eb] duration-300"
              type="submit"
            >
              Make Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
