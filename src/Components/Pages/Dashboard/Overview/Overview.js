import React from "react";
import axios from "axios";

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
      <div className="lg:py-3 md:py-3 py-2 lg:px-3 md:px-3 px-0 mx-2">
        <div className="headingTitle bg-white lg:w-60 w-full">
          <h3 className="text-xl text-left mb-4 font-semibold ml-1 text-[#2563eb] relative pl-10 py-1.5">
            Post Blog
          </h3>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto p-5 border myShadow rounded-md bg-white pb-6">
        <div className="text-center mb-10">
          <p className="mt-4 text-sm leading-7 text-gray-800 font-semibold uppercase">
            Fill The Form
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            To <span className="text-indigo-600">Post a blog</span>
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                Blog Title
              </label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white"
                type="text"
                placeholder="Enter Blog Title"
              />
            </div>

            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                Blog Link
              </label>
              <input
                onChange={(e) => setLink(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white"
                type="text"
                placeholder="Enter Posted Blog Link"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                Published Date
              </label>
              <input
                onChange={(e) => setdate(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white"
                type="text"
                placeholder="Enter Blog Published date ( Mar 5, 2022) "
              />
            </div>

            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                Blog Read Time
              </label>
              <input
                onChange={(e) => setRead(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white"
                type="text"
                placeholder="Enter Blog read Time (5 min read)"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                Blog description
              </label>
              <textarea
                rows={4}
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white"
                type="text"
                placeholder="Enter Blog description"
              />
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                Blog Image
              </label>
              <div className="flex items-center justify-start bg-grey-lighter overflow-hidden">
                <label className="w-64 flex flex-col items-center px-4 py-3 bg-white text-blue-600 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white duration-300">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                  <span className="mt-2 text-base leading-normal">
                    {(imagePrev && imagePrev[0]?.name) || "Select Blog Image"}
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => setImagePrev(e.target.files)}
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end w-full px-3">
            <button
              className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
              type="submit"
            >
              Post Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Overview;
