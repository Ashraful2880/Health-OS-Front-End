import axios from "axios";
import React, { useEffect } from "react";

const EditBlogs = ({ setEdit, id }) => {
    const [blogData, setBlogData] = React.useState();
    const [imagePrev, setImagePrev] = React.useState();
    const [title, setTitle] = React.useState();
    const [description, setDescription] = React.useState();
    const [link, setLink] = React.useState();
    const [date, setdate] = React.useState();
    const [read, setRead] = React.useState();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_PATH}/blogs/${id}`)
            .then(resp => { setBlogData(resp.data); });
    }, [id]);

    const handleEdit = async (e) => {
        e.preventDefault();
        const files = imagePrev;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "UploadFromWebsite");
        const res = await fetch(`${process.env.REACT_APP_IMAGE_API_PATH}/upload`,
            { method: "PUT", body: data, },);
        const file = await res.json();

        const newBlog = { image: file?.secure_url, title, description, link, date, read }
        axios
            .post(`${process.env.REACT_APP_API_PATH}/blogs`, newBlog)
            .then(function (response) { alert("Blog Post Successfull") })
            .catch(function (error) { console.log(error); });
        e.target.reset();
    }

    return (
        <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
            <div className="flex items-center justify-center min-height-100vh lg:pt-4 md:pt-10 pt-20 px-4 pb-20 text-center">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-900 opacity-75" />
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-7xl sm:w-full">
                    <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 footer-bg">
                        <div className="pb-2 flex justify-between items-center border-b mb-6">
                            <h2 className="text-2xl text-indigo-600 font-semibold">
                                Edit Blog Details
                            </h2>
                            <button onClick={() => setEdit(false)} type="button" className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-white hover:text-red-500 border border-red-500 duration-300 mr-2">
                                Close
                            </button>
                        </div>
                        <form onSubmit={handleEdit} className="w-full">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                                        Blog Title
                                    </label>
                                    <input onChange={(e) => setTitle(e.target.value)} defaultValue={blogData?.title} className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white" type="text" placeholder="Enter Blog Title" />
                                </div>

                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                                        Blog Link
                                    </label>
                                    <input onChange={(e) => setLink(e.target.value)} defaultValue={blogData?.link} className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white" type="text" placeholder="Enter Posted Blog Link" />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">

                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                                        Published Date
                                    </label>
                                    <input onChange={(e) => setdate(e.target.value)} defaultValue={blogData?.date} className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white" type="text" placeholder="Enter Blog Published date ( Mar 5, 2022) " />
                                </div>

                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                                        Blog Read Time
                                    </label>
                                    <input onChange={(e) => setRead(e.target.value)} defaultValue={blogData?.read} className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white" type="text" placeholder="Enter Blog read Time (5 min read)" />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">

                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                                        Blog description
                                    </label>
                                    <textarea defaultValue={blogData?.description} rows={4} onChange={(e) => setDescription(e.target.value)} className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white" type="text" placeholder="Enter Blog description" />
                                </div>

                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                                        Blog Image
                                    </label>
                                    <div className="flex items-center justify-start bg-grey-lighter overflow-hidden">
                                        <label className="w-64 flex flex-col items-center px-4 py-3 bg-white text-blue-600 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white duration-300">
                                            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                            </svg>
                                            <span className="mt-2 text-base leading-normal">
                                                {blogData?.image && blogData?.image || "Select Blog Image"}
                                            </span>
                                            <input type='file' className="hidden" onChange={(e) => setImagePrev(e.target.files)} />
                                        </label>
                                    </div>
                                </div>

                            </div>

                            <div className="flex justify-end w-full px-3">
                                <button className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                                    Update Changes
                                </button>
                            </div>

                        </form>
                    </div>
                    {/* <div className="footer-bg px-4 py-3 text-right">
                        <button onClick={() => setEdit(false)} type="button" className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-white hover:text-red-500 border border-red-500 duration-300 mr-2">
                            Close
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default EditBlogs;