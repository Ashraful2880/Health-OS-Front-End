import React from "react";
import Sidebar from "./Sidebar";
import MobileMenu from "./MobileMenu";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);
  const [display, setDisplay] = React.useState("hidden");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div className="flex">
      {/* Sidebar Menu here */}
      <Sidebar
        open={open}
        display={display}
        setOpen={setOpen}
        setDisplay={setDisplay}
      />
      {/* Mobile Navigation */}
      <div
        className={`absolute top-16 min-h-screen ${
          mobileOpen
            ? " left-0 w-full openAnimation duration-500 mobile-menu-bg z-50"
            : " -left-full w-0 closeAnimation duration-500"
        }`}
      >
        <MobileMenu setMobileOpen={setMobileOpen} />
      </div>
      {/* Dashboard Header Area */}
      <div className={`flex-grow text-gray-800 bg-gray-100`}>
        <DashboardHeader
          open={open}
          setOpen={setOpen}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
