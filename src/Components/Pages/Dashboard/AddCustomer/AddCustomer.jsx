import { useState } from "react";
import { useAlert } from "react-alert";
import { IoMdPersonAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Label from "../../../Shared/Input/Label";
import SharedButton from "../../../Shared/UI/SharedButton/SharedButton";
import { useAddCustomerMutation } from "../../../../features/customerSlice/customerSlice";

const AddCustomer = () => {
  const alert = useAlert();
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [userName, setUserName] = useState();
  const [addCustomer, { isLoading }] = useAddCustomerMutation();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = { name, userName, email, phone, address };
    try {
      await addCustomer(newData).unwrap();
      alert.success("Customer Added Successful");
      navigate("/dashboard/customerList");
    } catch (error) {
      alert.error(
        error?.data?.message || error?.message || "Failed to add customer"
      );
    }
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
          <div className="lg:flex block justify-between items-center gap-x-4 mb-3">
            <div className="w-full">
              <Label title="Customer Name" />
              <input
                type="text"
                placeholder="Enter Customer Name"
                onChange={(e) => setName(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white"
              />
            </div>

            <div className="w-full">
              <Label title="Customer Username" />
              <input
                type="text"
                placeholder="Enter Customer Username"
                onChange={(e) => setUserName(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white"
              />
            </div>
          </div>

          <div className="lg:flex block justify-between items-center gap-x-4 mb-3">
            <div className="w-full">
              <Label title="Customer Email" />
              <input
                type="email"
                placeholder="Enter Customer Email"
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white"
              />
            </div>

            <div className="w-full">
              <Label title="Customer number" />
              <input
                type="number"
                placeholder="Enter Customer Number"
                onChange={(e) => setPhone(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white"
              />
            </div>
          </div>

          <div className="flex justify-between items-center gap-x-4 mb-3">
            <div className="w-full">
              <Label title="Customer Address" />
              <textarea
                rows={4}
                type="text"
                placeholder="Enter Customer Address"
                onChange={(e) => setAddress(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white"
              />
            </div>
          </div>

          <div className="flex justify-start w-full px-3">
            <SharedButton
              type="submit"
              title="Add Customer"
              variant="primary"
              loading={isLoading}
              disabled={isLoading}
              loadingText="Adding..."
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
