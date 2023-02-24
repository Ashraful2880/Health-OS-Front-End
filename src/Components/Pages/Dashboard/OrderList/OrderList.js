import React from "react";
import axios from "axios";
import { useEffect } from "react";
import LoadingScreen from "../../../Shared/LoadingScreen/LoadingScreen";
import { BsCardChecklist } from "react-icons/bs";

const OrderList = () => {
  const [mails, setMails] = React.useState();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_PATH}/contact`).then((resp) => {
      setMails(resp?.data);
    });
  }, []);

  return (
    <div className="h-screen footer-bg">
      {/* Heading Title */}
      <div className="lg:pt-3 md:pt-3 pt-2 lg:px-3 md:px-3 px-0 mx-2">
        <div className="text-xl bg-white lg:w-60 w-full flex items-center gap-x-2 px-5">
          <BsCardChecklist className="text-[#2563eb]" />
          <h3 className="font-semibold text-[#2563eb] py-1.5">
            All Order List
          </h3>
        </div>
      </div>

      {mails?.length > 0 ? (
        <div className="mx-auto px-6">
          <div className="py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-indigo-500 bg-indigo-500 text-left text-sm font-bold text-white uppercase tracking-wider">
                      SL No
                    </th>
                    <th className="px-5 py-3 border-b-2 border-indigo-500 bg-indigo-500 text-left text-sm font-bold text-white uppercase tracking-wider">
                      From
                    </th>
                    <th className="px-5 py-3 border-b-2 border-indigo-500 bg-indigo-500 text-left text-sm font-bold text-white uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-indigo-500 bg-indigo-500 text-left text-sm font-bold text-white uppercase tracking-wider">
                      Number
                    </th>
                    <th className="px-5 py-3 border-b-2 border-indigo-500 bg-indigo-500 text-left text-sm font-bold text-white uppercase tracking-wider">
                      Subject
                    </th>
                    <th className="px-5 py-3 border-b-2 border-indigo-500 bg-indigo-500 text-left text-sm font-bold text-white uppercase tracking-wider">
                      Message
                    </th>
                    <th className="px-5 py-3 border-b-2 border-indigo-500 bg-indigo-500 text-left text-sm font-bold text-white uppercase tracking-wider">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mails?.map((mail, index) => (
                    <tr key={index + 1}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p> {index + 1} </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {mail?.userEmail}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {mail?.userName}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {mail?.number}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {mail?.subject}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {mail?.message}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {mail?.submitTime}
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

export default OrderList;
