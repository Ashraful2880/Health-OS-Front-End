import { useState } from "react";
import Select from "react-select";
import Rating from "react-rating";
import { useAlert } from "react-alert";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Label from "../../../Shared/Input/Label";
import { BsStar, BsStarFill } from "react-icons/bs";
import SharedButton from "../../../Shared/UI/SharedButton/SharedButton";
import { allSlugOptions } from "../../../../utils/options/allSlugOptions";
import { CategoryOptions } from "../../../../utils/options/CategoryOptions";
import { useAddProductMutation } from "../../../../features/product/productSlice";

const AddProduct = () => {
  const alert = useAlert();
  const navigate = useNavigate();
  const [SKU, setSKU] = useState();
  const [slug, setSlug] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState();
  const [offerPrice, setOfferPrice] = useState();
  const [productImage, setProductImage] = useState();

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

  const [addProduct, { isLoading }] = useAddProductMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      SKU,
      name,
      price,
      rating,
      offerPrice,
      slug: slug.value,
      category: category.value,
      productImage: productImage?.secure_url,
    };
    try {
      await addProduct(newProduct).unwrap();
      alert.success("Project Submitted Successful");
      navigate("/dashboard/allProducts");
    } catch (error) {
      alert.error(
        error?.data?.message || error?.message || "Failed to add product"
      );
    }
    e.target.reset();
  };

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
              <Label title="Product Name" />
              <input
                onChange={(e) => setName(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-2.5 px-4 leading-tight focus:outline-blue-200 focus:bg-white"
                type="text"
                placeholder="Enter Product Name"
              />
            </div>

            <div className="w-full lg:mt-0 mt-4">
              <Label title="Product Category" />
              <Select
                id="category"
                name="category"
                value={category}
                styles={customStyles}
                options={CategoryOptions}
                onChange={handleCategoryChange}
                placeholder="Select Product Category"
              />
            </div>
          </div>
          {/* Product Slug & Current Price */}
          <div className="lg:flex block justify-between items-center gap-x-4 mb-6">
            <div className="w-full">
              <Label title="Product Slug" />
              <Select
                id="slug"
                name="slug"
                value={slug}
                styles={customStyles}
                options={allSlugOptions}
                onChange={handleSlugChange}
                placeholder="Select Product Slug"
              />
            </div>

            <div className="w-full lg:mt-0 mt-4">
              <Label title="Current Price" />
              <input
                type="number"
                placeholder="Enter Product Price"
                onChange={(e) => setPrice(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-2.5 px-4 leading-tight focus:outline-blue-200 focus:bg-white"
              />
            </div>
          </div>
          {/* Offer Price & SKU */}
          <div className="lg:flex block justify-between items-center gap-x-4 mb-6">
            <div className="w-full">
              <Label title="Offer Price" />
              <input
                type="number"
                placeholder="Enter Offer Price"
                onChange={(e) => setOfferPrice(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-2.5 px-4 leading-tight focus:outline-blue-200 focus:bg-white"
              />
            </div>

            <div className="w-full lg:mt-0 mt-4">
              <Label title="SKU" />
              <input
                type="text"
                onChange={(e) => setSKU(e.target.value)}
                className="block w-full text-gray-700 border rounded-sm py-2.5 px-4 leading-tight focus:outline-blue-200 focus:bg-white"
                placeholder="Enter SKU Number Example:(277)"
              />
            </div>
          </div>
          {/* Rating And Product Image */}
          <div className="lg:flex block justify-between items-center gap-x-4 mb-6">
            <div className="w-full">
              <Label title="Product Image" />
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
              <Label title="Product Rating" />
              <button className="flex items-center border py-1.5 px-2 w-full">
                <Rating
                  stop={5}
                  fractions={2}
                  initialRating={0}
                  onClick={handleRatingChange}
                  emptySymbol={
                    <BsStar className="text-gray-400 text-xl mr-2" />
                  }
                  fullSymbol={
                    <BsStarFill className="text-[#FFB627] text-xl mr-2" />
                  }
                />
              </button>
            </div>
          </div>

          <div className="flex justify-start w-full px-3 pb-4">
            <SharedButton
              type="submit"
              title="Update Changes"
              variant="primary"
              loading={isLoading}
              disabled={isLoading}
              loadingText="Adding..."
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
