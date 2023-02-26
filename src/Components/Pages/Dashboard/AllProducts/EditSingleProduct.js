import axios from "axios";
import React, { useEffect } from "react";
import Rating from "react-rating";
import Select from "react-select";
import { BsStar, BsStarFill } from "react-icons/bs";
import ModalLoader from "../../../Shared/ModalLoader/ModalLoader";
import { useForm } from "react-hook-form";
import { useAlert } from "react-alert";

const EditSingleProduct = ({ setEdit, productID, updated, setUpdated }) => {
  const alert = useAlert();

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

  //   Product All State Here

  const [productImage, setProductImage] = React.useState();
  const [productData, setProductData] = React.useState();
  const [rating, setRating] = React.useState(productData?.rating);
  const [category, setCategory] = React.useState(productData?.category);
  const [slug, setSlug] = React.useState(productData?.slug);

  const { handleSubmit, reset, register } = useForm({
    defaultValues: {
      productImage: "",
      rating: "",
      name: "",
      price: "",
      offerPrice: "",
      category: "",
      slug: "",
      SKU: "",
    },
  });

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

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_PATH}/products/${productID}`)
      .then((resp) => {
        setProductData(resp.data);
        reset(resp.data);
      });
  }, [productID, reset]);

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

  const onSubmit = (data) => {
    const updateProduct = {
      productImage: productImage?.secure_url,
      rating,
      category,
      slug,
      ...data,
    };

    axios
      .put(
        `${process.env.REACT_APP_API_PATH}/products/${productID}`,
        updateProduct
      )
      .then(function (response) {
        alert.success("Product Update Successfull");
        setUpdated(updated + 1);
        setEdit(false);
      })
      .catch(function (error) {
        alert.error(error?.message);
      });
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
    <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
      <div className="flex items-center justify-center min-height-100vh lg:pt-4 md:pt-10 pt-20 px-4 pb-20 text-center">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-7xl sm:w-full">
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 footer-bg">
            <div className="pb-2 flex justify-between items-center border-b mb-6">
              <h2 className="text-2xl text-[#2563eb] font-semibold">
                Edit Product Details
              </h2>
              <button
                onClick={() => setEdit(false)}
                type="button"
                className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-white hover:text-red-500 border border-red-500 duration-300 mr-2"
              >
                Close
              </button>
            </div>
            {productData?._id ? (
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                {/* Product Name & Category */}
                <div className="flex justify-between items-center gap-x-4 mb-6">
                  <div className="w-full">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                      Product Name
                    </label>
                    <input
                      {...register("name", { required: true })}
                      className="block w-full text-gray-700 border rounded-sm py-2.5 px-4 leading-tight focus:outline-blue-200 focus:bg-white"
                      type="text"
                      placeholder="Enter Product Name"
                    />
                  </div>

                  <div className="w-full">
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
                      defaultInputValue={productData?.category}
                      styles={customStyles}
                      {...register("category", { required: true })}
                    />
                  </div>
                </div>
                {/* Product Slug & Current Price */}
                <div className="flex justify-between items-center gap-x-4 mb-6">
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
                      defaultInputValue={productData?.slug}
                      styles={customStyles}
                      {...register("slug", { required: true })}
                    />
                  </div>

                  <div className="w-full">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                      Current Price
                    </label>
                    <input
                      {...register("price", { required: true })}
                      className="block w-full text-gray-700 border rounded-sm py-2.5 px-4 leading-tight focus:outline-blue-200 focus:bg-white"
                      type="number"
                      placeholder="Enter Product Price"
                    />
                  </div>
                </div>
                {/* Offer Price & SKU */}
                <div className="flex justify-between items-center gap-x-4 mb-6">
                  <div className="w-full">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold text-start mb-2">
                      Offer Price
                    </label>
                    <input
                      {...register("offerPrice")}
                      className="block w-full text-gray-700 border rounded-sm py-2.5 px-4 leading-tight focus:outline-blue-200 focus:bg-white"
                      type="number"
                      placeholder="Enter Offer Price"
                    />
                  </div>

                  <div className="w-full">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                      SKU
                    </label>
                    <input
                      {...register("SKU", { required: true })}
                      className="block w-full text-gray-700 border rounded-sm py-2.5 px-4 leading-tight focus:outline-blue-200 focus:bg-white"
                      type="text"
                      placeholder="Enter SKU Number Example:(277)"
                    />
                  </div>
                </div>
                {/* Rating And Product Image */}
                <div className="flex justify-between items-center gap-x-4 mb-6">
                  <div className="w-full">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                      Product Image
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
                          {productImage?.original_filename ||
                            "Select Product Image"}
                        </span>
                        <input
                          type="file"
                          className="hidden"
                          defaultValue={productImage?.secure_url}
                          onChange={(e) => handleImage(e.target.files)}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="w-full">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-start">
                      You Can Change Your Product Rating
                    </label>
                    <div className="flex items-center border py-1.5 px-2">
                      <Rating
                        initialRating={productData?.rating}
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
                    </div>
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
            ) : (
              <ModalLoader />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSingleProduct;
