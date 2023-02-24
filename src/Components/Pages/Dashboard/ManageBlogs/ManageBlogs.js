import axios from "axios";
import React, { useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { RiEditFill } from "react-icons/ri";
import Loader from "../../Shared/Loader/Loader";
import EditBlogs from "./EditBlogs";

const ManageBlogs = () => {
    const [blogs, setBlogs] = React.useState();
    const [edit, setEdit] = React.useState(false)
    const [id, setId] = React.useState()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_PATH}/blogs`)
            .then(resp => { setBlogs(resp?.data); });
    }, [])

    const handleEdit = (id) => {
        setEdit(true);
        setId(id)
    }

    const handleDelete = () => {
        alert("Delete Function Coming Soon")
    }


    return (
        <div className="footer-bg h-screen">
            <div className="lg:py-3 md:py-3 py-2 lg:px-3 md:px-3 px-0 mx-2">
                <div className="headingTitle bg-white lg:w-60 w-full">
                    <h3 className="text-xl text-left mb-4 font-semibold ml-1 text-[#2563eb] relative pl-10 py-1.5">
                        Manage All Blogs
                    </h3>
                </div>
            </div>

            {blogs?.length > 0 ?
                <div className="mx-auto px-6">
                    <div className="py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th className="px-5 py-3 border-b-2 border-indigo-500 bg-indigo-500 text-left text-sm text-white font-normal">
                                            SL No
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-indigo-500 bg-indigo-500 text-left text-sm text-white font-normal">
                                            Title
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-indigo-500 bg-indigo-500 text-left text-sm text-white font-normal">
                                            Description
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-indigo-500 bg-indigo-500 text-left text-sm text-white font-normal">
                                            Published Date
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-indigo-500 bg-indigo-500 text-left text-sm text-white font-normal">
                                            Read Time
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-indigo-500 bg-indigo-500 text-left text-sm text-white font-normal">
                                            Image
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-indigo-500 bg-indigo-500 text-left text-sm text-white font-normal">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {blogs?.map((blog, index) =>
                                        <tr key={index + 1} className="border">
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                                                <p> {index + 1} </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {blog?.title}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {blog?.description}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {blog?.date}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {blog?.read}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    <img src={blog?.image} alt="Blog_image" className="h-8 w-8 rounded-full" />
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    <div className="flex gap-x-2 items-center">
                                                        <button onClick={() => handleEdit(blog?._id)} className="text-green-600 text-2xl">
                                                            <RiEditFill />
                                                        </button>
                                                        <button onClick={() => handleDelete()} className="text-red-500 text-2xl">
                                                            <AiFillDelete />
                                                        </button>
                                                    </div>
                                                </p>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> :
                <Loader />}
            {edit && <EditBlogs setEdit={setEdit} id={id} />}
        </div>
    )
}

export default ManageBlogs;