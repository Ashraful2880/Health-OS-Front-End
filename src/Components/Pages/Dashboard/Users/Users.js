import React from "react";
import axios from "axios";
import { useEffect } from "react";
import LoadingScreen from "../../../Shared/LoadingScreen/LoadingScreen";
import { BsCardChecklist } from "react-icons/bs";

const Users = () => {
  const [userLists, setUserLists] = React.useState();

  // Get All Users
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_PATH}/users`).then((resp) => {
      setUserLists(resp?.data);
    });
  }, []);

  return (
    <div className="h-screen footer-bg">
      {/* Heading Title */}
      <div className="lg:pt-3 md:pt-3 pt-2 lg:px-3 md:px-3 px-0 mx-2">
        <div className="text-xl bg-white lg:w-60 w-full flex items-center gap-x-2 px-5">
          <BsCardChecklist className="text-[#2563eb]" />
          <h3 className="font-semibold text-[#2563eb] py-1.5">
            All Users List
          </h3>
        </div>
      </div>

      {userLists?.length > 0 ? (
        <div className="mx-auto px-6">
          <div className="py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-[#2563eb] bg-[#2563eb] text-left text-sm font-bold text-white uppercase tracking-wider">
                      SL No
                    </th>
                    <th className="px-5 py-3 border-b-2 border-[#2563eb] bg-[#2563eb] text-left text-sm font-bold text-white uppercase tracking-wider">
                      User Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-[#2563eb] bg-[#2563eb] text-left text-sm font-bold text-white uppercase tracking-wider">
                      User Email
                    </th>
                    <th className="px-5 py-3 border-b-2 border-[#2563eb] bg-[#2563eb] text-left text-sm font-bold text-white uppercase tracking-wider">
                      User Contact
                    </th>
                    <th className="px-5 py-3 border-b-2 border-[#2563eb] bg-[#2563eb] text-left text-sm font-bold text-white uppercase tracking-wider">
                      Address
                    </th>
                    <th className="px-5 py-3 border-b-2 border-[#2563eb] bg-[#2563eb] text-left text-sm font-bold text-white uppercase tracking-wider">
                      Created Date
                    </th>
                    <th className="px-5 py-3 border-b-2 border-[#2563eb] bg-[#2563eb] text-left text-sm font-bold text-white uppercase tracking-wider">
                      User ID
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {userLists?.map((currentUser, index) => (
                    <tr key={index + 1}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p> {index + 1} </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {currentUser?.name}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {currentUser?.email}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {currentUser?.phone}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap">
                          ${currentUser?.address}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {currentUser?.createdAt}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap flex items-center gap-x-2">
                          {currentUser?._id}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default Users;
