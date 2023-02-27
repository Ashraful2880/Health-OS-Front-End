import axios from "axios";
import React from "react";
import Select from "react-select";
import { BsStar, BsStarFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import Rating from "react-rating";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

const AddProduct = () => {
  const alert = useAlert();
  const navigate = useNavigate();

  const categories = [
    { value: "medicalEquip", label: "Medical Equipment" },
    { value: "medicine", label: "Medicine" },
    { value: "emergencyKits", label: "Emergency Kits" },
    { value: "mask", label: "Masks" },
    { value: "gloves", label: "Gloves" },
    { value: "sanitizer", label: "Sanitizers" },
    { value: "medicalItems", label: "Medical Items" },
    { value: "others", label: "Others" },
  ];

  const allSlugs = [
    { value: "featured", label: "Featured Products" },
    { value: "trending", label: "Top Trending" },
    { value: "newArrival", label: "New Arrival" },
    { value: "bestSellar", label: "Best Sellar" },
    ,
  ];

  const [productImage, setProductImage] = React.useState();
  const [rating, setRating] = React.useState(0);
  const [name, setName] = React.useState();
  const [price, setPrice] = React.useState();
  const [offerPrice, setOfferPrice] = React.useState();
  const [category, setCategory] = React.useState();
  const [slug, setSlug] = React.useState();
  const [SKU, setSKU] = React.useState();

  // All On Change Function Here

  const handleCategoryChange = (selectedOption) => {
    setCategory(selectedOption);
  };
  const handleSlugChange = (selectedOption) => {
    setSlug(selectedOption);
  };
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleImage = async (files) => {
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "UploadFromWebsite");
    const res = await fetch(`${process.env.REACT_APP_IMAGE_API_PATH}/upload`, {
      method: "POST",
      body: data,
    });
    const file = await res.json();
    setProductImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      productImage: productImage?.secure_url,
      rating,
      name,
      price,
      offerPrice,
      category: category.value,
      slug: slug.value,
      SKU,
    };
    axios
      .post(`${process.env.REACT_APP_API_PATH}/products`, newProduct)
      .then(function (response) {
        alert.success("Project Submitted Successfull");
        navigate("/dashboard/allProducts");
      })
      .catch(function (error) {
        alert.error(error.message);
      });
    e.target.reset();
  };
  //   Custom Style For React Select
  const customStyles = {
    control: (base, state) => ({
      ...base,
      height: "40px",
      "min-height": "40px",
      textAlign: "left",
    }),
  };

  return (
    <div className="bg-shape min-h-screen">
      {/* Heading Title */}
      <div className="lg:pt-3 md:pt-3 pt-2 lg:px-3 md:px-3 px-0 mx-2">
        <div className="text-xl bg-white lg:w-60 w-full flex items-center gap-x-2 px-5">
          <FaCartPlus className="text-[#2563eb]" />
          <h3 className="font-semibold text-[#2563eb] py-1.5">Add Product</h3>
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto p-5 border myShadow rounded-md">
        <div className="text-center mb-10">
          <p className="mt-4 text-sm leading-7 text-gray-800 font-semibold uppercase">
            Fill The Product Details
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            To <span className="text-[#2563eb]">Add A Product</span>
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          {/* Product Name & Category */}
          <div className="lg:flex block justify-between items-center gap-x-4 mb-6">
            <div className="w-full">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                Product Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-2.5 px-4 leading-tight focus:outline-blue-200 focus:bg-white"
                type="text"
                placeholder="Enter Product Name"
              />
            </div>

            <div className="w-full lg:mt-0 mt-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                Product Category
              </label>
              <Select
                id="category"
                name="category"
                value={category}
                onChange={handleCategoryChange}
                options={categories}
                placeholder="Select Product Category"
                styles={customStyles}
              />
            </div>
          </div>
          {/* Product Slug & Current Price */}
          <div className="lg:flex block justify-between items-center gap-x-4 mb-6">
            <div className="w-full">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                Product Slug
              </label>
              <Select
                id="slug"
                name="slug"
                value={slug}
                onChange={handleSlugChange}
                options={allSlugs}
                placeholder="Select Product Slug"
                styles={customStyles}
              />
            </div>

            <div className="w-full lg:mt-0 mt-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                Current Price
              </label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-2.5 px-4 leading-tight focus:outline-blue-200 focus:bg-white"
                type="number"
                placeholder="Enter Product Price"
              />
            </div>
          </div>
          {/* Offer Price & SKU */}
          <div className="lg:flex block justify-between items-center gap-x-4 mb-6">
            <div className="w-full">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold text-start mb-2">
                Offer Price
              </label>
              <input
                onChange={(e) => setOfferPrice(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-2.5 px-4 leading-tight focus:outline-blue-200 focus:bg-white"
                type="number"
                placeholder="Enter Offer Price"
              />
            </div>

            <div className="w-full lg:mt-0 mt-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                SKU
              </label>
              <input
                onChange={(e) => setSKU(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-2.5 px-4 leading-tight focus:outline-blue-200 focus:bg-white"
                type="text"
                placeholder="Enter SKU Number Example:(277)"
              />
            </div>
          </div>
          {/* Rating And Product Image */}
          <div className="lg:flex block justify-between items-center gap-x-4 mb-6">
            <div className="w-full">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                Product Image
              </label>
              <div className="flex items-center justify-start bg-grey-lighter overflow-hidden">
                <label className="lg:w-64 md:w-80 w-full flex flex-col items-center px-4 py-3 bg-white text-blue-600 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white duration-300">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                  <span className="mt-2 text-base leading-normal">
                    {productImage?.original_filename || "Select Product Image"}
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => handleImage(e.target.files)}
                  />
                </label>
              </div>
            </div>

            <div className="w-full lg:mt-0 mt-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                You Can Change Your Product Rating
              </label>
              <button className="flex items-center border py-1.5 px-2 w-full">
                <Rating
                  initialRating={0}
                  onClick={handleRatingChange}
                  emptySymbol={
                    <BsStar className="text-gray-400 text-xl mr-2" />
                  }
                  fullSymbol={
                    <BsStarFill className="text-[#FFB627] text-xl mr-2" />
                  }
                  fractions={2}
                  stop={5}
                />
              </button>
            </div>
          </div>

          <div className="flex justify-start w-full px-3 pb-4">
            <button
              className="shadow bg-[#2563eb] hover:bg-white text-white hover:text-[#2563eb] border border-[#2563eb] font-bold py-2 px-6 rounded duration-300"
              type="submit"
            >
              Update Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
