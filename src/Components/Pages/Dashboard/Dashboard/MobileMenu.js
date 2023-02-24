import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaUsers, FaUsersCog, FaUserEdit, FaEnvelope } from 'react-icons/fa';
import { GoLaw } from 'react-icons/go';
import { BiLogOutCircle, BiUserPlus, BiReceipt } from 'react-icons/bi';
import { BsListCheck, BsCardChecklist } from 'react-icons/bs';
import { MdManageAccounts, MdAppRegistration, MdMiscellaneousServices } from 'react-icons/md';
import { RiTeamLine, RiListCheck, RiFileListLine } from 'react-icons/ri';
import { IoIosCreate } from 'react-icons/io';

const MobileMenu = ({ setMobileOpen }) => {
    return (
        <nav className="flex flex-col mx-2 my-6 space-y-3">
            <Link to="/home" className={`text-[17px] py-2 focus:text-[#2563EB] focus:bg-[#dbeafe] rounded-md pl-4 text-center pr-2 duration-300 `}>
                <button onClick={() => setMobileOpen(false)} className="flex items-center justify-start gap-x-4">
                    <FaHome className="text-[#2563EB]"/>
                    <h4 className="text-gray-900">Home</h4>
                </button>
            </Link>
            {/* User Section Menu */}
            <div
                className={`accordion accordion-item cursor-pointer w-full text-[17px] items-center gap-x-4 justify-center pl-5 rounded-md"} `}
                id='accordionExample3'>
                <div
                    className={`w-full flex items-center collapsed relative accordion-button rounded-md duration-300 `}
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#userCollapse'
                    aria-expanded='false'
                    aria-controls='userCollapse'>

                    <div className={`text-[17px] rounded-md py-2 flex items-center cursor-pointer justify-start gap-x-4 text-center`} >
                        <FaUser className="text-[#2563EB]" />
                        <h4 className="text-gray-900">User Section</h4>
                    </div>
                </div>
                {/* User Sub Menu */}

                <div
                    className='flex flex-col accordion-collapse collapse ml-4'
                    data-bs-parent='#accordionExample3'
                    id='userCollapse'>
                    <div className="my-1">
                        <Link
                            to='/createTeam'
                            className="text-gray-900 focus:bg-[#dbeafe] rounded-md duration-300 px-2 py-2 block w-full">
                            <div className="flex items-center gap-x-4" onClick={() => setMobileOpen(false)}>
                                <RiTeamLine className="ml-2 text-[#2563EB]" />
                                <h4>Create Team</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="my-1">
                        <Link
                            to='/manageTeam'
                            className=" text-gray-900 focus:bg-[#dbeafe] rounded-md duration-300 px-2 py-2 block w-full">
                            <div className="flex items-center gap-x-4" onClick={() => setMobileOpen(false)}>
                                <FaUsersCog className="ml-2 text-[#2563EB]" />
                                <h4>Manage Team</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="my-1">
                        <Link
                            to='/createUser'
                            className=" text-gray-900 focus:bg-[#dbeafe] rounded-md duration-300 px-2 py-2 block w-full">
                            <div className="flex items-center gap-x-4" onClick={() => setMobileOpen(false)}>
                                <BiUserPlus className="ml-2 text-[#2563EB]" />
                                <h4>Create User</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="my-1">
                        <Link
                            to='/manageUser'
                            className=" text-gray-900 focus:bg-[#dbeafe] rounded-md duration-300 px-2 py-2 block w-full">
                            <div className="flex items-center gap-x-4" onClick={() => setMobileOpen(false)}>
                                <MdManageAccounts className="ml-2 text-[#2563EB]" />
                                <h4>Manage User</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Lawyer Section Menu */}
            <div
                className={`accordion accordion-item cursor-pointer w-full text-[17px] items-center gap-x-4 justify-center pl-5 rounded-md"} `}
                id='accordionExample3'>
                <div
                    className={`w-full flex items-center collapsed relative accordion-button rounded-md duration-300 `}
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#lawyerCollapse'
                    aria-expanded='false'
                    aria-controls='lawyerCollapse'>

                    <div className={`text-[17px] rounded-md py-2 flex items-center cursor-pointer justify-start gap-x-4 text-center`} >
                        <GoLaw className="text-[#2563EB]"/>
                        <h4 className="text-gray-900">Lawyer Section</h4>
                    </div>
                </div>
                {/* User Sub Menu */}

                <div
                    className='flex flex-col accordion-collapse collapse ml-4'
                    data-bs-parent='#accordionExample3'
                    id='lawyerCollapse'>
                    <div className="my-1">
                        <Link
                            to='/registerLawyer'
                            className="text-gray-900 focus:bg-[#dbeafe] rounded-md duration-300 px-2 py-2 block w-full">
                            <div className="flex items-center gap-x-4" onClick={() => setMobileOpen(false)}>
                                <MdAppRegistration className="ml-2 text-[#2563EB]" />
                                <h4>Register Lawyer</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="my-1">
                        <Link
                            to='/lawyerList'
                            className=" text-gray-900 focus:bg-[#dbeafe] rounded-md duration-300 px-2 py-2 block w-full">
                            <div className="flex items-center gap-x-4" onClick={() => setMobileOpen(false)}>
                                <BsListCheck className="ml-2 text-[#2563EB]" />
                                <h4>Lawyer List</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Customer Section Menu */}

            <div
                className={`accordion accordion-item cursor-pointer w-full text-[17px] items-center gap-x-4 justify-center pl-5 rounded-md"} `}
                id='accordionExample3'>
                <div
                    className={`w-full flex items-center collapsed relative accordion-button rounded-md duration-300 `}
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#customerCollapse'
                    aria-expanded='false'
                    aria-controls='customerCollapse'>

                    <div className={`text-[17px] rounded-md py-2 flex items-center cursor-pointer justify-start gap-x-4 text-center`} >
                        <FaUsers className="text-[#2563EB]"/>
                        <h4 className="text-gray-900">Cusatomer Section</h4>
                    </div>
                </div>
                {/* User Sub Menu */}

                <div
                    className='flex flex-col accordion-collapse collapse ml-4'
                    data-bs-parent='#accordionExample3'
                    id='customerCollapse'>
                    <div className="my-1">
                        <Link
                            to='/registerCustomer'
                            className="text-gray-900 focus:bg-[#dbeafe] rounded-md duration-300 px-2 py-2 block w-full">
                            <div className="flex items-center gap-x-4" onClick={() => setMobileOpen(false)}>
                                <FaUserEdit className="ml-2 text-[#2563EB]" />
                                <h4>Register Customer</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="my-1">
                        <Link
                            to='/customerList'
                            className=" text-gray-900 focus:bg-[#dbeafe] rounded-md duration-300 px-2 py-2 block w-full">
                            <div className="flex items-center gap-x-4" onClick={() => setMobileOpen(false)}>
                                <RiListCheck className="ml-2 text-[#2563EB]" />
                                <h4>Customer List</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Service Section Menu */}

            <div
                className={`accordion accordion-item cursor-pointer w-full text-[17px] items-center gap-x-4 justify-center pl-5 rounded-md"} `}
                id='accordionExample3'>
                <div
                    className={`w-full flex items-center collapsed relative accordion-button rounded-md duration-300 `}
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#serviceCollapse'
                    aria-expanded='false'
                    aria-controls='serviceCollapse'>

                    <div className={`text-[17px] rounded-md py-2 flex items-center cursor-pointer justify-start gap-x-4 text-center`} >
                        <MdMiscellaneousServices className="text-[#2563EB]"/>
                        <h4 className="text-gray-900">Service</h4>
                    </div>
                </div>
                {/* User Sub Menu */}

                <div
                    className='flex flex-col accordion-collapse collapse ml-4'
                    data-bs-parent='#accordionExample3'
                    id='serviceCollapse'>
                    <div className="my-1">
                        <Link
                            to='/createService'
                            className="text-gray-900 focus:bg-[#dbeafe] rounded-md duration-300 px-2 py-2 block w-full">
                            <div className="flex items-center gap-x-4" onClick={() => setMobileOpen(false)}>
                                <IoIosCreate className="ml-2 text-[#2563EB]" />
                                <h4>Create Service</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="my-1">
                        <Link
                            to='/serviceList'
                            className=" text-gray-900 focus:bg-[#dbeafe] rounded-md duration-300 px-2 py-2 block w-full">
                            <div className="flex items-center gap-x-4" onClick={() => setMobileOpen(false)}>
                                <BsCardChecklist className="ml-2 text-[#2563EB]" />
                                <h4>Service List</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <Link to="/cusTaxIssue" className={`text-[17px] py-2 focus:text-[#2563EB] focus:bg-[#dbeafe] rounded-md pl-5 text-center pr-2 duration-300 `}>
                <button onClick={() => setMobileOpen(false)} className="flex items-center justify-start gap-x-4">
                    <BiReceipt className="text-[#2563EB]"/>
                    <h4 className="text-gray-900">Customer Tax Issue</h4>
                </button>
            </Link>
            <Link to="/inbox" className={`text-[17px] py-2 focus:text-[#2563EB] focus:bg-[#dbeafe] rounded-md pl-5 text-center pr-2 duration-300 `}>
                <button onClick={() => setMobileOpen(false)} className="flex items-center justify-start gap-x-4">
                    <FaEnvelope className="text-[#2563EB]"/>
                    <h4 className="text-gray-900">Inbox</h4>
                </button>
            </Link>

            <div className="inline-flex items-center justify-center border-t border-gray-200">
                <button className="text-[17px] mx-2 w-full hover:text-[#2563EB] hover:bg-[#dbeafe] focus:bg-[#dbeafe] focus:text-[#2563EB] rounded-md flex items-center justify-center my-2 py-2">
                    <BiLogOutCircle className="mt-1 text-red-600 animate-ping" />
                    <h4 className="text-gray-900 ml-4">Logout</h4>
                </button>
            </div>
        </nav>
    );
};

export default MobileMenu;