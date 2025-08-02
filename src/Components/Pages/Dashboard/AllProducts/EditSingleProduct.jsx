import Rating from "react-rating";
import Select from "react-select";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Label from "../../../Shared/Input/Label";
import { BsStar, BsStarFill } from "react-icons/bs";
import ModalLoader from "../../../Shared/ModalLoader/ModalLoader";
import SharedButton from "../../../Shared/UI/SharedButton/SharedButton";
import { CategoryOptions } from "../../../../utils/options/CategoryOptions";
import { allSlugOptions } from "./../../../../utils/options/allSlugOptions";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../../../../features/product/productSlice";

const EditSingleProduct = ({ setEdit, productID }) => {
  const alert = useAlert();
  const { data: productData } = useGetProductByIdQuery(productID, {
    skip: !productID,
  });
  const [productImage, setProductImage] = useState();
  const [slug, setSlug] = useState(productData?.slug);
  const [rating, setRating] = useState(productData?.rating);
  const [category, setCategory] = useState(productData?.category);
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();

  const { handleSubmit, register, reset } = useForm();

  // Set form values when productData loads

  useEffect(() => {
    if (productData) {
      reset({
        SKU: productData.SKU || "",
        slug: productData.slug || "",
        name: productData.name || "",
        price: productData.price || "",
        rating: productData.rating || 0,
        category: productData.category || "",
        offerPrice: productData.offerPrice || "",
        productImage: productData.productImage || "",
      });
      setSlug(productData.slug);
      setRating(productData.rating);
      setCategory(productData.category);
    }
  }, [productData, reset]);

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

  const onSubmit = async (data) => {
    const updateData = {
      slug,
      rating,
      category,
      productImage: productImage?.secure_url,
      ...data,
    };
    try {
      await updateProduct({ productID, updateProduct: updateData }).unwrap();
      alert.success("Product Update Successfull");
      setEdit(false);
    } catch (error) {
      alert.error(error?.data?.message || error?.message || "Update failed");
    }
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
                    <Label title="Product Name" valueFor="name" />
                    <input
                      {...register("name", { required: true })}
                      className="block w-full text-gray-700 border rounded-sm py-2.5 px-4 leading-tight focus:outline-blue-200 focus:bg-white"
                      type="text"
                      placeholder="Enter Product Name"
                    />
                  </div>

                  <div className="w-full">
                    <Label valueFor="category" title="Product Category" />
                    <Select
                      id="category"
                      name="category"
                      value={category}
                      styles={customStyles}
                      options={CategoryOptions}
                      onChange={handleCategoryChange}
                      placeholder="Select Product Category"
                      defaultInputValue={productData?.category}
                      {...register("category", { required: true })}
                    />
                  </div>
                </div>
                {/* Product Slug & Current Price */}
                <div className="flex justify-between items-center gap-x-4 mb-6">
                  <div className="w-full">
                    <Label valueFor="slug" title="Product Slug" />
                    <Select
                      id="slug"
                      name="slug"
                      value={slug}
                      options={allSlugOptions}
                      onChange={handleSlugChange}
                      placeholder="Select Product Slug"
                      defaultInputValue={productData?.slug}
                      styles={customStyles}
                      {...register("slug", { required: true })}
                    />
                  </div>

                  <div className="w-full">
                    <Label valueFor="price" title="Current Price" />
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
                    <Label title="Offer Price" />
                    <input
                      {...register("offerPrice")}
                      className="block w-full text-gray-700 border rounded-sm py-2.5 px-4 leading-tight focus:outline-blue-200 focus:bg-white"
                      type="number"
                      placeholder="Enter Offer Price"
                    />
                  </div>

                  <div className="w-full">
                    <Label title="SKU" />
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
                    <Label title="Product Image" />
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
                    <Label title="Product Rating" />
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
                  <SharedButton
                    type="submit"
                    // width="w-full"
                    title="Update Changes"
                    variant="primary"
                    loading={isUpdating}
                    disabled={isUpdating}
                    loadingText="Updating..."
                  />
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
