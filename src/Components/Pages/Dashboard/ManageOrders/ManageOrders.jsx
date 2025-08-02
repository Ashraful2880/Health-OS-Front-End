import { useAlert } from "react-alert";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { BsGearFill } from "react-icons/bs";
import LoadingScreen from "../../../Shared/LoadingScreen/LoadingScreen";
import {
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
} from "../../../../features/orderSlice/orderSlice";

const ManageOrders = () => {
  const alert = useAlert();
  const { data: orders, isLoading } = useGetAllOrdersQuery();
  const [updateOrderStatus] = useUpdateOrderStatusMutation();

  // Change Order To Approve
  const approve = async (id) => {
    try {
      await updateOrderStatus({ orderID: id, status: "Approved" }).unwrap();
      alert.success("Product Approved Successful");
    } catch (error) {
      alert.error(error?.data?.message || error?.message || "Approve failed");
    }
  };
  
  // Change Order To Reject
  const reject = async (id) => {
    try {
      await updateOrderStatus({ orderID: id, status: "Rejected" }).unwrap();
      alert.success("Status Rejected Successful");
    } catch (error) {
      alert.error(error?.data?.message || error?.message || "Reject failed");
    }
  };

  return (
    <div className="footer-bg h-screen">
      {/* Heading Title */}
      <div className="lg:pt-3 md:pt-3 pt-2 lg:px-3 md:px-3 px-0 mx-2">
        <div className="text-xl bg-white lg:w-60 w-full flex items-center gap-x-2 px-5">
          <BsGearFill className="text-[#2563eb]" />
          <h3 className="font-semibold text-[#2563eb] py-1.5">Manage Orders</h3>
        </div>
      </div>
      {isLoading ? (
        <LoadingScreen />
      ) : orders?.length > 0 ? (
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
                      Status
                    </th>
                    <th className="px-5 py-3 border-b-2 border-[#2563eb] bg-[#2563eb] text-left text-sm font-bold text-white uppercase tracking-wider">
                      Order Date
                    </th>
                    <th className="px-5 py-3 border-b-2 border-[#2563eb] bg-[#2563eb] text-left text-sm font-bold text-white uppercase tracking-wider">
                      Action
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
                          20-Dec-2022
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {order?.status === "Pending" && (
                            <span className="bg-gray-200 px-3 py-1 rounded-full font-semibold">
                              {order?.status}
                            </span>
                          )}
                          {order?.status === "Approved" && (
                            <span className="bg-green-600 text-white px-3 py-1 rounded-full font-semibold">
                              {order?.status}
                            </span>
                          )}
                          {order?.status === "Rejected" && (
                            <span className="bg-red-500 text-white px-3 py-1 rounded-full font-semibold">
                              {order?.status}
                            </span>
                          )}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                        <p className="text-gray-900 whitespace-no-wrap flex items-center gap-x-2">
                          {order?.status === "Approved" ? (
                            <button
                              onClick={() => reject(order?._id)}
                              className="h-7 w-7 bg-red-500 hover:bg-white text-white hover:text-red-600 border border-red-500 rounded-full flex justify-center items-center duration-300 text-xl"
                            >
                              <RxCross2 />
                            </button>
                          ) : (
                            <button
                              onClick={() => approve(order?._id)}
                              className="h-7 w-7 bg-[#2563eb] hover:bg-white text-white hover:text-[#2563eb] border border-[#2563eb] rounded-full flex justify-center items-center duration-300"
                            >
                              <FaCheck />
                            </button>
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

export default ManageOrders;
