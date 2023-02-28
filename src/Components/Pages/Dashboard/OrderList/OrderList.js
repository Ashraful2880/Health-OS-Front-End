import React from "react";
import axios from "axios";
import { useEffect } from "react";
import LoadingScreen from "../../../Shared/LoadingScreen/LoadingScreen";
import { BsCardChecklist } from "react-icons/bs";

const OrderList = () => {
  const [orders, setOrders] = React.useState();

  // Get All Orders
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_PATH}/orders`).then((resp) => {
      setOrders(resp?.data);
    });
  }, []);

  return (
    <div className="min-h-screen footer-bg overflow-hidden">
      {/* Heading Title */}
      <div className="lg:pt-3 md:pt-3 pt-2 lg:px-3 md:px-3 px-0 mx-2">
        <div className="text-xl bg-white lg:w-60 w-full flex items-center gap-x-2 px-5">
          <BsCardChecklist className="text-[#2563eb]" />
          <h3 className="font-semibold text-[#2563eb] py-1.5">
            All Order List
          </h3>
        </div>
      </div>

      {orders?.length > 0 ? (
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
                      Product Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-[#2563eb] bg-[#2563eb] text-left text-sm font-bold text-white uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-5 py-3 border-b-2 border-[#2563eb] bg-[#2563eb] text-left text-sm font-bold text-white uppercase tracking-wider">
                      Shipping Address
                    </th>
                    <th className="px-5 py-3 border-b-2 border-[#2563eb] bg-[#2563eb] text-left text-sm font-bold text-white uppercase tracking-wider">
                      Total Amount
                    </th>
                    <th className="px-5 py-3 border-b-2 border-[#2563eb] bg-[#2563eb] text-left text-sm font-bold text-white uppercase tracking-wider">
                      Order Date
                    </th>
                    <th className="px-5 py-3 border-b-2 border-[#2563eb] bg-[#2563eb] text-left text-sm font-bold text-white uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders?.map((order, index) => (
                    <tr key={index + 1}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p> {index + 1} </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {order?.productName}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {order?.quantity}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {order?.address}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap">
                          ${order?.amount}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap">
                          13-Jan-2022
                        </p>
                      </td>
                      <td className="px-1 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap flex items-center gap-x-2">
                          {order?.status === "Pending" && (
                            <span className="bg-gray-200 px-3 py-1 rounded-full font-semibold">
                              {" "}
                              {order?.status}{" "}
                            </span>
                          )}
                          {order?.status === "Approved" && (
                            <span className="bg-green-600 text-white px-3 py-1 rounded-full font-semibold">
                              {" "}
                              {order?.status}{" "}
                            </span>
                          )}
                          {order?.status === "Rejected" && (
                            <span className="bg-red-500 text-white px-3 py-1 rounded-full font-semibold">
                              {" "}
                              {order?.status}{" "}
                            </span>
                          )}
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
