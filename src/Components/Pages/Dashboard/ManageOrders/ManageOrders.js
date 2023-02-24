import React from "react";
import { BsGearFill } from "react-icons/bs";

const ManageOrders = () => {
  return (
    <div className="footer-bg h-screen">
      {/* Heading Title */}
      <div className="lg:pt-3 md:pt-3 pt-2 lg:px-3 md:px-3 px-0 mx-2">
        <div className="text-xl bg-white lg:w-60 w-full flex items-center gap-x-2 px-5">
          <BsGearFill className="text-[#2563eb]" />
          <h3 className="font-semibold text-[#2563eb] py-1.5">Manage Orders</h3>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
