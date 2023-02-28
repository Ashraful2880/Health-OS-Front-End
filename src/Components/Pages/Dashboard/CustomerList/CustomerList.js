import React from "react";
import axios from "axios";
import { useEffect } from "react";
import LoadingScreen from "../../../Shared/LoadingScreen/LoadingScreen";
import { BsCardChecklist } from "react-icons/bs";
import { FaEye, FaTrash } from "react-icons/fa";
import SingleCustomerDetails from "./SingleCustomerDetails";
import { useAlert } from "react-alert";

const CustomerList = () => {
  const alert = useAlert();
  const [customers, setCustomers] = React.useState();
  const [productID, setProductId] = React.useState();
  const [view, setView] = React.useState(false);
  const [updated, setUpdated] = React.useState(0);

  // Get All Customers
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_PATH}/customers`).then((resp) => {
      setCustomers(resp?.data);
    });
  }, [updated]);

  // View Single Customer

  const handleView = (id) => {
    setProductId(id);
    setView(true);
  };

  // Delete A Customer

  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_PATH}/customer/${id}`)
      .then((response) => {
        setUpdated(updated + 1);
        alert.success("Deleted Successfully");
      })
      .catch((error) => {
        alert.error("Deleted Failed");
      });
  };

  return (
    <div className="h-screen footer-bg">
      {/* Heading Title */}
      <div className="lg:pt-3 md:pt-3 pt-2 lg:px-3 md:px-3 px-0 mx-2">
        <div className="text-xl bg-white lg:w-60 w-full flex items-center gap-x-2 px-5">
          <BsCardChecklist className="text-[#2563eb]" />
          <h3 className="font-semibold text-[#2563eb] py-1.5">
            All Customer List
          </h3>
        </div>
      </div>

      {customers?.length > 0 ? (
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
                      Customer Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-[#2563eb] bg-[#2563eb] text-left text-sm font-bold text-white uppercase tracking-wider">
                      User Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-[#2563eb] bg-[#2563eb] text-left text-sm font-bold text-white uppercase tracking-wider">
                      Customer Email
                    </th>
                    <th className="px-5 py-3 border-b-2 border-[#2563eb] bg-[#2563eb] text-left text-sm font-bold text-white uppercase tracking-wider">
                      Contact Number
                    </th>
                    <th className="px-5 py-3 border-b-2 border-[#2563eb] bg-[#2563eb] text-left text-sm font-bold text-white uppercase tracking-wider">
                      Address
                    </th>
                    <th className="px-5 py-3 border-b-2 border-[#2563eb] bg-[#2563eb] text-left text-sm font-bold text-white uppercase tracking-wider">
                      Register Date
                    </th>
                    <th className="px-5 py-3 border-b-2 border-[#2563eb] bg-[#2563eb] text-left text-sm font-bold text-white uppercase tracking-wider">
                      Remarks
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {customers?.map((customer, index) => (
                    <tr key={index + 1}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p> {index + 1} </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {customer?.name}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {customer?.userName}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {customer?.email}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {customer?.phone}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {customer?.address}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap">
                          12-Nov-2021
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start flex justify-center items-center gap-x-4">
                        <div className="whitespace-no-wrap py-5">
                          <button
                            onClick={() => handleView(customer?._id)}
                            className="text-white hover:text-[#2563eb] bg-[#2563eb] hover:bg-white p-1.5 text-xl h-7 w-7 whitespace-no-wrap flex justify-center items-center gap-x-2 border border-[#2563eb] rounded-full duration-300"
                          >
                            <FaEye />
                          </button>
                        </div>
                        <div className="whitespace-no-wrap py-5">
                          <button
                            onClick={() => handleDelete(customer?._id)}
                            className="text-white hover:text-red-600 bg-red-500 hover:bg-white p-1.5 text-xl h-7 w-7 whitespace-no-wrap flex justify-center items-center gap-x-2 border border-red-500 rounded-full duration-300"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {view && (
            <SingleCustomerDetails setView={setView} productID={productID} />
          )}
        </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default CustomerList;
