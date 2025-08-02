import React from "react";

const ModalLoader = () => {
  return (
    <div className="w-full h-[60vh] flex justify-center items-center">
      <div className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-[#2563eb] border-t-transparent"></div>
    </div>
  );
};
export default ModalLoader;
