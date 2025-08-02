import { Link } from "react-router-dom";
import { BiReceipt } from "react-icons/bi";
import { FaHome, FaEnvelope } from "react-icons/fa";

const MobileMenu = ({ setMobileOpen }) => {
  return (
    <nav className="flex flex-col mx-2 my-0 space-y-3 z-50 bg-white min-h-screen">
      <Link
        to=""
        className={`text-[17px] py-2 focus:text-[#2563EB] focus:bg-[#dbeafe] rounded-md pl-4 text-center pr-2 duration-300 `}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="flex items-center justify-start gap-x-4"
        >
          <FaHome className="text-[#2563EB]" />
          <h4 className="text-gray-900">Home</h4>
        </button>
      </Link>

      <Link
        to="allProducts"
        className={`text-[17px] py-2 focus:text-[#2563EB] focus:bg-[#dbeafe] rounded-md pl-5 text-center pr-2 duration-300 `}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="flex items-center justify-start gap-x-4"
        >
          <BiReceipt className="text-[#2563EB]" />
          <h4 className="text-gray-900">All Products</h4>
        </button>
      </Link>
      <Link
        to="addProduct"
        className={`text-[17px] py-2 focus:text-[#2563EB] focus:bg-[#dbeafe] rounded-md pl-5 text-center pr-2 duration-300 `}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="flex items-center justify-start gap-x-4"
        >
          <FaEnvelope className="text-[#2563EB]" />
          <h4 className="text-gray-900">Add Product</h4>
        </button>
      </Link>
      <Link
        to="orderList"
        className={`text-[17px] py-2 focus:text-[#2563EB] focus:bg-[#dbeafe] rounded-md pl-5 text-center pr-2 duration-300 `}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="flex items-center justify-start gap-x-4"
        >
          <FaEnvelope className="text-[#2563EB]" />
          <h4 className="text-gray-900">Order List</h4>
        </button>
      </Link>
      <Link
        to="manageOrders"
        className={`text-[17px] py-2 focus:text-[#2563EB] focus:bg-[#dbeafe] rounded-md pl-5 text-center pr-2 duration-300 `}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="flex items-center justify-start gap-x-4"
        >
          <FaEnvelope className="text-[#2563EB]" />
          <h4 className="text-gray-900">Manage Order</h4>
        </button>
      </Link>
      <Link
        to="customerList"
        className={`text-[17px] py-2 focus:text-[#2563EB] focus:bg-[#dbeafe] rounded-md pl-5 text-center pr-2 duration-300 `}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="flex items-center justify-start gap-x-4"
        >
          <FaEnvelope className="text-[#2563EB]" />
          <h4 className="text-gray-900">Customer List</h4>
        </button>
      </Link>
      <Link
        to="addCustomer"
        className={`text-[17px] py-2 focus:text-[#2563EB] focus:bg-[#dbeafe] rounded-md pl-5 text-center pr-2 duration-300 `}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="flex items-center justify-start gap-x-4"
        >
          <FaEnvelope className="text-[#2563EB]" />
          <h4 className="text-gray-900">Add Customer</h4>
        </button>
      </Link>
      <Link
        to="users"
        className={`text-[17px] py-2 focus:text-[#2563EB] focus:bg-[#dbeafe] rounded-md pl-5 text-center pr-2 duration-300 `}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="flex items-center justify-start gap-x-4"
        >
          <FaEnvelope className="text-[#2563EB]" />
          <h4 className="text-gray-900">Users List</h4>
        </button>
      </Link>
      <Link
        to="overview"
        className={`text-[17px] py-2 focus:text-[#2563EB] focus:bg-[#dbeafe] rounded-md pl-5 text-center pr-2 duration-300 `}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="flex items-center justify-start gap-x-4"
        >
          <FaEnvelope className="text-[#2563EB]" />
          <h4 className="text-gray-900">Overview</h4>
        </button>
      </Link>
      <Link
        to="summary"
        className={`text-[17px] py-2 focus:text-[#2563EB] focus:bg-[#dbeafe] rounded-md pl-5 text-center pr-2 duration-300 `}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="flex items-center justify-start gap-x-4"
        >
          <FaEnvelope className="text-[#2563EB]" />
          <h4 className="text-gray-900">Summary</h4>
        </button>
      </Link>
      <Link
        to="makeadmin"
        className={`text-[17px] py-2 focus:text-[#2563EB] focus:bg-[#dbeafe] rounded-md pl-5 text-center pr-2 duration-300 `}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="flex items-center justify-start gap-x-4"
        >
          <FaEnvelope className="text-[#2563EB]" />
          <h4 className="text-gray-900">Make Admin</h4>
        </button>
      </Link>
    </nav>
  );
};

export default MobileMenu;
