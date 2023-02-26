import React, { useEffect } from "react";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";
import axios from "axios";
import LoadingScreen from "../../../Shared/LoadingScreen/LoadingScreen";
import ModalLoader from "../../../Shared/ModalLoader/ModalLoader";

const ViewSingleProduct = ({ setView, productID }) => {
  const [singleProduct, setSingleProduct] = React.useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_PATH}/products/${productID}`)
      .then((resp) => {
        setSingleProduct(resp.data);
      });
  }, [productID]);

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
                View Product Details
              </h2>
              <button
                onClick={() => setView(false)}
                type="button"
                className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-white hover:text-red-500 border border-red-500 duration-300 mr-2"
              >
                Close
              </button>
            </div>
          </div>
          {singleProduct?._id ? (
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:pb-20 pb-10">
              <div className="w-full">
                <img
                  src={singleProduct?.productImage}
                  alt="product"
                  className="w-80 mx-auto"
                />
              </div>
              <div className="w-full lg:text-left text-center">
                <h3 className="font-bold lg:text-3xl text-xl">
                  {singleProduct?.name}
                </h3>
                <h4 className="text-md text-gray-400">
                  Category: {singleProduct?.category}
                </h4>
                {singleProduct?.slug && (
                  <h4 className="text-md text-gray-400">
                    Slug: {singleProduct?.slug}
                  </h4>
                )}

                <div className="flex items-center gap-x-2 mt-2 lg:mb-4 mb-1">
                  <p className="text-lg font-semibold text-[#2563eb]">
                    Price ${singleProduct?.price}
                  </p>
                  {singleProduct?.offerPrice && (
                    <p className="text-md font-semibold text-gray-400 line-through">
                      Price ${singleProduct?.price}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-x-2">
                  <Rating
                    readonly
                    className="text-orange-500"
                    emptySymbol={<BsStar className="text-gray-400" />}
                    fullSymbol={<BsStarFill className="text-[#FFB627]" />}
                    initialRating={singleProduct?.rating}
                  />
                  <p className="mb-1 text-gray-400 text-sm font-semibold">
                    (125 Customeer Review)
                  </p>
                </div>
                <p className="font-semibold">SKU: {singleProduct?.SKU}</p>
                <p className="mt-5 text-gray-600 tracking-wider lg:block hidden">
                  <span className="font-bold text-orange-500">
                    {singleProduct?.name}
                  </span>
                  allows you to fully express your vibrant personality with
                  three grayscale options. Feeling adventurous? Put on a heather
                  gray tee. Want to be a trendsetter? Try our exclusive
                  colorway. "Black". Need to add an extra pop of color to your
                  outfit? Our white tee has you covered.
                </p>
              </div>
            </div>
          ) : (
            <ModalLoader />
          )}
        </div>
      </div>
    </div>
  );
};
export default ViewSingleProduct;
