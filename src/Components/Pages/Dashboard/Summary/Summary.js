import axios from "axios";
import React from "react";
import { MdSummarize } from "react-icons/md";

const Summary = () => {
  const [certificates, setCertificates] = React.useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const files = certificates;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "UploadFromWebsite");
    const res = await fetch(`${process.env.REACT_APP_IMAGE_API_PATH}/upload`, {
      method: "POST",
      body: data,
    });
    const file = await res.json();
    const newCertificate = { certificates: file?.secure_url };

    axios
      .post(`${process.env.REACT_APP_API_PATH}/certificates`, newCertificate)
      .then(function (response) {
        alert("New Certificate Added");
      })
      .catch(function (error) {
        console.log(error);
      });
    e.target.reset();
  };

  return (
    <div className="footer-bg h-screen">
      {/* Heading Title */}
      <div className="lg:pt-3 md:pt-3 pt-2 lg:px-3 md:px-3 px-0 mx-2">
        <div className="text-xl bg-white lg:w-60 w-full flex items-center gap-x-2 px-5">
          <MdSummarize className="text-[#2563eb]" />
          <h3 className="font-semibold text-[#2563eb] py-1.5">Summary</h3>
        </div>
      </div>
      
    </div>
  );
};

export default Summary;
