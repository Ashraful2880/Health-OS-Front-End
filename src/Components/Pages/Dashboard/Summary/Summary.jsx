import { MdSummarize } from "react-icons/md";
import DashboardHome from "../DashboardHome/DashboardHome";

const Summary = () => {
  return (
    <div className="footer-bg h-screen">
      {/* Heading Title */}
      <div className="lg:pt-3 md:pt-3 pt-2 lg:px-3 md:px-3 px-0 mx-2">
        <div className="text-xl bg-white lg:w-60 w-full flex items-center gap-x-2 px-5">
          <MdSummarize className="text-[#2563eb]" />
          <h3 className="font-semibold text-[#2563eb] py-1.5">Summary</h3>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-left text-2xl font-bold pl-10 -mb-4 pt-1">
          Overall Account <span className="text-[#2563eb]">Activity</span>
        </h1>
        <DashboardHome />
      </div>
    </div>
  );
};

export default Summary;
