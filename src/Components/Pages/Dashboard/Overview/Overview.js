import React from "react";
import axios from "axios";
import { FaHeartbeat } from "react-icons/fa";

const Overview = () => {
  const [imagePrev, setImagePrev] = React.useState();
  const [title, setTitle] = React.useState();
  const [description, setDescription] = React.useState();
  const [link, setLink] = React.useState();
  const [date, setdate] = React.useState();
  const [read, setRead] = React.useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const files = imagePrev;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "UploadFromWebsite");
    const res = await fetch(`${process.env.REACT_APP_IMAGE_API_PATH}/upload`, {
      method: "POST",
      body: data,
    });
    const file = await res.json();

    const newBlog = {
      image: file?.secure_url,
      title,
      description,
      link,
      date,
      read,
    };
    axios
      .post(`${process.env.REACT_APP_API_PATH}/blogs`, newBlog)
      .then(function (response) {
        alert("Blog Post Successfull");
      })
      .catch(function (error) {
        console.log(error);
      });
    e.target.reset();
  };

  return (
    <div className="bannar-gradient h-screen">
      {/* Heading Title */}
      <div className="lg:pt-3 md:pt-3 pt-2 lg:px-3 md:px-3 px-0 mx-2">
        <div className="text-xl bg-white lg:w-60 w-full flex items-center gap-x-2 px-5">
          <FaHeartbeat className="text-[#2563eb]" />
          <h3 className="font-semibold text-[#2563eb] py-1.5">Overview</h3>
        </div>
      </div>
      
    </div>
  );
};

export default Overview;
