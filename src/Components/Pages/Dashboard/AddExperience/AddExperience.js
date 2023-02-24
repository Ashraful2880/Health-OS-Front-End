import React from "react";
import axios from 'axios';

const AddExperience = () => {
    const [startingDate, setStartingDate] = React.useState();
    const [endDate, setEndDate] = React.useState();
    const [designation, setDesignation] = React.useState();
    const [companyName, setCompanyName] = React.useState();
    const [address, setAddress] = React.useState();
    const [responsibility, setResponsibility] = React.useState();
    const [responsibility2, setResponsibility2] = React.useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newExperience = { startingDate, endDate, designation, companyName, address, responsibility, responsibility2 }
        axios
            .post(`${process.env.REACT_APP_API_PATH}/experience`, newExperience)
            .then(function (response) { alert("Experience Added Successfull") })
            .catch(function (error) { console.log(error); });
        e.target.reset();
    }

    return (
        <div className="footer-bg h-screen">
            <div className="lg:py-3 md:py-3 py-2 lg:px-3 md:px-3 px-0 mx-2">
                <div className="headingTitle bg-white lg:w-60 w-full">
                    <h3 className="text-xl text-left mb-4 font-semibold ml-1 text-[#2563eb] relative pl-10 py-1.5">
                        Add Experience
                    </h3>
                </div>
            </div>

            <div className="max-w-screen-lg mx-auto p-5 border myShadow rounded-md bg-white pb-6">
                <div className="text-center mb-10">
                    <p className="mt-4 text-sm leading-7 text-gray-800 font-semibold uppercase">
                        Fill The Form
                    </p>
                    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                        To <span className="text-indigo-600">add Experience</span>
                    </h3>
                </div>

                <form onSubmit={handleSubmit} className="w-full">
                    <div className="flex flex-wrap -mx-3 mb-6">

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                                Starting Date
                            </label>
                            <input onChange={(e) => setStartingDate(e.target.value)} className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white" type="text" placeholder="Enter Starting Date (July-2022)" />
                        </div>

                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                                End Date
                            </label>
                            <input onChange={(e) => setEndDate(e.target.value)} className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white" type="text" placeholder="Enter End Date" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                                Designation
                            </label>
                            <input onChange={(e) => setDesignation(e.target.value)} className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white" type="text" placeholder="Enter Designation" />
                        </div>

                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                                Company Name
                            </label>
                            <input onChange={(e) => setCompanyName(e.target.value)} className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white" type="text" placeholder="Enter Company Name" />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                                Responsibility
                            </label>
                            <input onChange={(e) => setResponsibility(e.target.value)} className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white" type="text" placeholder="Enter Responsibility" />
                        </div>

                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                                Responsibility Line-2
                            </label>
                            <input onChange={(e) => setResponsibility2(e.target.value)} className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white" type="text" placeholder="Enter Responsibility" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                                Address
                            </label>
                            <textarea cols={8} onChange={(e) => setAddress(e.target.value)} className="block w-full text-gray-700 border rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-blue-200 focus:bg-white" type="text" placeholder="Enter Company Address" />
                        </div>
                    </div>


                    <div className="flex justify-end w-full px-3">
                        <button className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                            Add Experience
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddExperience;