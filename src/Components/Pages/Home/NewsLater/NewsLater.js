import React from "react";
import newslater from "../../../../Assets/Images/Others/newslater.jpg";

const NewsLater = () => {
  return (
    <div className="relative">
      <img src={newslater} alt="Newslater" className="w-full" />
      <div className="flex flex-col w-full items-start absolute left-32 top-24">
        <h2 className="text-4xl font-bold mb-8">
          Subscribe Our <span className="text-[#2563eb]">Newslater</span>
        </h2>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter Email"
            className="py-2 px-4 rounded-md w-96 border border-[#2563eb]"
          />
          <input
            type="submit"
            value="Subscribe"
            className="py-2 px-4 bg-[#2563eb] hover:bg-white text-white hover:text-[#2563eb] border border-[#2563eb] ml-4 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLater;
