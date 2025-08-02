import {
  RiAdminFill,
  RiServiceFill,
  RiFileListFill,
  RiListUnordered,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import Tooltip from "react-simple-tooltip";
import logo from "../../../../Assets/Images/logo.png";
import { MdOutlineManageAccounts } from "react-icons/md";
import { BsFillBagPlusFill, BsGearFill } from "react-icons/bs";
import { FaHome, FaBlog, FaBusinessTime } from "react-icons/fa";

const Sidebar = ({ open }) => {
  return (
    <div>
      <aside className={`hidden sm:flex z-50`}>
        <div
          className={`${
            open === true ? " w-60 duration-300" : "w-20 duration-300"
          } bg-white`}
        >
          <div className={`h-20 bg-white border-b`}>
            <Link
              to="/home"
              className={`inline-flex items-center justify-center h-20 w-60  
            ${open === true ? "" : "mr-20"}`}
            >
              {open ? (
                <>
                  <img src={logo} alt="Logo" className="w-8" />
                  <h2 className="font-bold text-2xl text-[#0E2558] logo-font ml-1.5">
                    <span className="text-[#15A9E3]">H</span>ealth{" "}
                    <span className="text-[#15A9E3]">O</span>S
                  </h2>
                </>
              ) : (
                <img src={logo} alt="Logo" className="w-8 -ml-40" />
              )}
            </Link>
          </div>

          <div
            className={`${
              open === true
                ? "flex openMenuAnimation"
                : "block closeMenuAnimation"
            } bg-white`}
          >
            <div
              className={`flex-grow flex flex-col justify-between text-[#2563EB] h-[91vh] border-r`}
            >
              <nav className="flex flex-col mx-2 my-6 space-y-3 pb-5">
                <Link
                  to=""
                  className={`duration-75 text-[17px] py-2 hover:text-[#2563EB] hover:bg-[#dbeafe] focus:text-[#2563EB] focus:bg-[#dbeafe] rounded-md flex items-center 
                ${
                  open ? "justify-start gap-x-4 pl-4" : "justify-center"
                } duration-300`}
                >
                  {open ? (
                    <>
                      <FaHome />
                      <h4 className="text-gray-900">Home</h4>
                    </>
                  ) : (
                    <Tooltip
                      padding={3}
                      content="Home"
                      placement="top"
                      fontSize="15px"
                      color="#2563EB"
                      border="#2563EB"
                      className="w-full"
                      fadeDuration={500}
                      background="#DBEAFE"
                    >
                      <FaHome className="w-full" />
                    </Tooltip>
                  )}
                </Link>

                <Link
                  to="allProducts"
                  className={`duration-75 text-[17px] py-2 hover:text-[#2563EB] hover:bg-[#dbeafe] focus:text-[#2563EB] focus:bg-[#dbeafe] rounded-md flex items-center 
                ${
                  open ? "justify-start gap-x-4 pl-4" : "justify-center"
                } duration-300`}
                >
                  {open ? (
                    <>
                      <RiFileListFill />
                      <h4 className="text-gray-900">All Products</h4>
                    </>
                  ) : (
                    <Tooltip
                      padding={3}
                      placement="top"
                      fontSize="15px"
                      color="#2563EB"
                      border="#2563EB"
                      content="Products"
                      className="w-full"
                      fadeDuration={500}
                      background="#DBEAFE"
                    >
                      <RiFileListFill className="w-full" />
                    </Tooltip>
                  )}
                </Link>

                <Link
                  to="addProduct"
                  className={`duration-75 text-[17px] py-2 hover:text-[#2563EB] hover:bg-[#dbeafe] focus:text-[#2563EB] focus:bg-[#dbeafe] rounded-md flex items-center 
                  ${
                    open ? "justify-start gap-x-4 pl-4" : "justify-center"
                  } duration-300`}
                >
                  {open ? (
                    <>
                      <BsFillBagPlusFill />
                      <h4 className="text-gray-900">Add Product</h4>
                    </>
                  ) : (
                    <Tooltip
                      padding={3}
                      color="#2563EB"
                      fontSize="15px"
                      border="#2563EB"
                      placement="right"
                      className="w-full"
                      fadeDuration={500}
                      background="#DBEAFE"
                      content="Add Product"
                    >
                      <BsFillBagPlusFill className="w-full" />
                    </Tooltip>
                  )}
                </Link>

                <Link
                  to="orderList"
                  className={`duration-75 text-[17px] py-2 hover:text-[#2563EB] hover:bg-[#dbeafe] focus:text-[#2563EB] focus:bg-[#dbeafe] rounded-md flex items-center 
                  ${
                    open ? "justify-start gap-x-4 pl-4" : "justify-center"
                  } duration-300`}
                >
                  {open ? (
                    <>
                      <RiListUnordered />
                      <h4 className="text-gray-900">Order List</h4>
                    </>
                  ) : (
                    <Tooltip
                      padding={3}
                      fontSize="15px"
                      color="#2563EB"
                      border="#2563EB"
                      placement="right"
                      className="w-full"
                      fadeDuration={500}
                      background="#DBEAFE"
                      content="Order List"
                    >
                      <RiListUnordered className="w-full" />
                    </Tooltip>
                  )}
                </Link>

                <Link
                  to="manageOrders"
                  className={`duration-75 text-[17px] py-2 hover:text-[#2563EB] hover:bg-[#dbeafe] focus:text-[#2563EB] focus:bg-[#dbeafe] rounded-md flex items-center 
                  ${
                    open ? "justify-start gap-x-4 pl-4" : "justify-center"
                  } duration-300`}
                >
                  {open ? (
                    <>
                      <BsGearFill />
                      <h4 className="text-gray-900">Manage Orders</h4>
                    </>
                  ) : (
                    <Tooltip
                      padding={3}
                      fontSize="15px"
                      color="#2563EB"
                      border="#2563EB"
                      placement="right"
                      className="w-full"
                      fadeDuration={500}
                      background="#DBEAFE"
                      content="Manage Orders"
                    >
                      <BsGearFill className="w-full" />
                    </Tooltip>
                  )}
                </Link>

                <Link
                  to="customerList"
                  className={`duration-75 text-[17px] py-2 hover:text-[#2563EB] hover:bg-[#dbeafe] focus:text-[#2563EB] focus:bg-[#dbeafe] rounded-md flex items-center 
                  ${
                    open ? "justify-start gap-x-4 pl-4" : "justify-center"
                  } duration-300`}
                >
                  {open ? (
                    <>
                      <MdOutlineManageAccounts />
                      <h4 className="text-gray-900">Customer List</h4>
                    </>
                  ) : (
                    <Tooltip
                      padding={3}
                      fontSize="15px"
                      color="#2563EB"
                      border="#2563EB"
                      placement="right"
                      className="w-full"
                      fadeDuration={500}
                      background="#DBEAFE"
                      content="Customer List"
                    >
                      <MdOutlineManageAccounts className="w-full" />
                    </Tooltip>
                  )}
                </Link>

                <Link
                  to="addCustomer"
                  className={`duration-75 text-[17px] py-2 hover:text-[#2563EB] hover:bg-[#dbeafe] focus:text-[#2563EB] focus:bg-[#dbeafe] rounded-md flex items-center 
                  ${
                    open ? "justify-start gap-x-4 pl-4" : "justify-center"
                  } duration-300`}
                >
                  {open ? (
                    <>
                      <FaBlog />
                      <h4 className="text-gray-900">Add Customer</h4>
                    </>
                  ) : (
                    <Tooltip
                      padding={3}
                      fontSize="15px"
                      color="#2563EB"
                      border="#2563EB"
                      className="w-full"
                      placement="right"
                      fadeDuration={500}
                      background="#DBEAFE"
                      content="Add Customer"
                    >
                      <FaBlog className="w-full" />
                    </Tooltip>
                  )}
                </Link>

                <Link
                  to="users"
                  className={`duration-75 text-[17px] py-2 hover:text-[#2563EB] hover:bg-[#dbeafe] focus:text-[#2563EB] focus:bg-[#dbeafe] rounded-md flex items-center 
                  ${
                    open ? "justify-start gap-x-4 pl-4" : "justify-center"
                  } duration-300`}
                >
                  {open ? (
                    <>
                      <FaBlog />
                      <h4 className="text-gray-900">Users List</h4>
                    </>
                  ) : (
                    <Tooltip
                      padding={3}
                      color="#2563EB"
                      fontSize="15px"
                      border="#2563EB"
                      placement="right"
                      className="w-full"
                      fadeDuration={500}
                      background="#DBEAFE"
                      content="Users List"
                    >
                      <FaBlog className="w-full" />
                    </Tooltip>
                  )}
                </Link>

                <Link
                  to="overview"
                  className={`duration-75 text-[17px] py-2 hover:text-[#2563EB] hover:bg-[#dbeafe] focus:text-[#2563EB] focus:bg-[#dbeafe] rounded-md flex items-center 
                  ${
                    open ? "justify-start gap-x-4 pl-4" : "justify-center"
                  } duration-300`}
                >
                  {open ? (
                    <>
                      <RiServiceFill />
                      <h4 className="text-gray-900">Overview</h4>
                    </>
                  ) : (
                    <Tooltip
                      padding={3}
                      fontSize="15px"
                      color="#2563EB"
                      border="#2563EB"
                      placement="right"
                      content="Overview"
                      className="w-full"
                      fadeDuration={500}
                      background="#DBEAFE"
                    >
                      <RiServiceFill className="w-full" />
                    </Tooltip>
                  )}
                </Link>

                <Link
                  to="summary"
                  className={`duration-75 text-[17px] py-2 hover:text-[#2563EB] hover:bg-[#dbeafe] focus:text-[#2563EB] focus:bg-[#dbeafe] rounded-md flex items-center 
                  ${
                    open ? "justify-start gap-x-4 pl-4" : "justify-center"
                  } duration-300`}
                >
                  {open ? (
                    <>
                      <FaBusinessTime />
                      <h4 className="text-gray-900">Summary</h4>
                    </>
                  ) : (
                    <Tooltip
                      padding={3}
                      fontSize="15px"
                      color="#2563EB"
                      border="#2563EB"
                      content="Summary"
                      className="w-full"
                      placement="right"
                      fadeDuration={500}
                      background="#DBEAFE"
                    >
                      <FaBusinessTime className="w-full" />
                    </Tooltip>
                  )}
                </Link>

                <Link
                  to="makeadmin"
                  className={`duration-75 text-[17px] py-2 hover:text-[#2563EB] hover:bg-[#dbeafe] focus:text-[#2563EB] focus:bg-[#dbeafe] rounded-md flex items-center 
                  ${
                    open ? "justify-start gap-x-4 pl-4" : "justify-center"
                  } duration-300`}
                >
                  {open ? (
                    <>
                      <RiAdminFill />
                      <h4 className="text-gray-900">Make Admin</h4>
                    </>
                  ) : (
                    <Tooltip
                      padding={3}
                      fontSize="15px"
                      color="#2563EB"
                      border="#2563EB"
                      className="w-full"
                      placement="right"
                      fadeDuration={500}
                      content="Make Admin"
                      background="#DBEAFE"
                    >
                      <RiAdminFill className="w-full" />
                    </Tooltip>
                  )}
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
