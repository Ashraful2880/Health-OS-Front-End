import React from "react";
import { BsCart, BsStar, BsStarFill } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight, FaRegHeart } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import LoadingScreen from "../../Shared/LoadingScreen/LoadingScreen";

const FilteredProducts = ({ products, search }) => {
  const [pageNumber, setPageNumber] = React.useState(0);
  const productPerPage = 10;
  const pagesVisited = pageNumber * productPerPage;

  // / Pagination Function

  const pageCount = Math.ceil(products?.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div>
      {products?.length > 0 ? (
        <div>
          <div>
            <h3 className="text-left mb-1 mt-2 font-bold lg:text-3xl text-xl relative">
              <span className="text-[#2563eb]">{search}</span> Products
            </h3>
            <hr className="bg-[#2563eb] pb-0.5 mb-5" />
            <label
              htmlFor="my-drawer-2"
              className="drawer-button lg:hidden absolute top-1 left-0.5"
            >
              <i className="fa-solid fa-angles-right text-lg bg-orange-500 px-2 rounded text-white"></i>
            </label>
          </div>
          <div className="border shadow-xl p-5 mb-10 min-h-screen">
            <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-col-1 gap-2 overflow-hidden px-2 relative">
              {products
                ?.slice(pagesVisited, pagesVisited + productPerPage)
                ?.map((product) => (
                  <div key={product?._id} className="mt-3">
                    <div className="mx-3 border rounded-md relative group cursor-pointer overflow-hidden lg:h-[350px] h-auto">
                      {/* Featured Product Image */}
                      <div className="bg-[#F8F8F8]">
                        <img
                          src={product?.productImage}
                          alt="product_Image"
                          className="w-full lg:h-[250px] h-auto mx-auto pb-4"
                        />
                      </div>
                      {/* Featured Content */}
                      <div className="pl-5 text-left">
                        <h4 className="text-[17px] font-bold">
                          {product?.name}
                        </h4>
                        <div className="flex items-center gap-x-2 mb-2">
                          <h4 className="text-[17px] font-semibold text-[#2563eb]">
                            ${product?.price}.00
                          </h4>
                          {product?.offerPrice && (
                            <h4 className="text-[15px] mb-0.5 text-gray-500 line-through">
                              $ {product?.offerPrice}.00
                            </h4>
                          )}
                        </div>
                        <div className="flex items-center gap-x-1">
                          <Rating
                            readonly
                            className="text-[16px]"
                            emptySymbol={
                              <BsStar className="mx-0.5 text-gray-400" />
                            }
                            fullSymbol={
                              <BsStarFill className="mx-0.5 text-[#FFB627]" />
                            }
                            initialRating={product?.rating}
                          />
                          <p className="text-gray-500 text-[13px] font-semibold">
                            ({product?.rating})
                          </p>
                        </div>
                      </div>
                      {/* percentage Notification */}

                      {product?.offerPrice && (
                        <div className="pb-3 z-50">
                          <div className="absolute left-2 top-2 text-2xl text-white bg-red-500 w-10 p-1 flex justify-center items-center rounded-full z-50">
                            <p className="text-xs font-semibold">
                              -<span>15%</span>
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Add To Wishlist Button*/}
                      <Link
                        to={`/addToCart/${product._id}`}
                        className="pb-3 z-50"
                      >
                        <div className="absolute right-2 top-2 -translate-x-0 -translate-y-0 text-2xl text-[#2563eb] group-hover:text-white bg-transparent group-hover:bg-[#2563eb] h-10 w-10 p-1 flex justify-center items-center rounded-full duration-700 z-50">
                          <button onClick={() => alert("Added To WishList")}>
                            <FaRegHeart />
                          </button>
                        </div>
                      </Link>
                      {/* Add To Cart Button*/}
                      <Link
                        className="pb-3 z-50"
                        to={`/addToCart/${product._id}`}
                      >
                        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-2xl text-white bg-[#2563eb] h-12 w-12 p-1 flex justify-center items-center rounded-full opacity-0 group-hover:opacity-100 duration-700 z-50">
                          <button>
                            <BsCart />
                          </button>
                        </div>
                      </Link>
                      {/* Cart Overlay */}
                      <div className="absolute bottom-0 h-full w-full bg-black opacity-0 group-hover:opacity-40 translate-y-[100%] group-hover:translate-y-0 duration-700 z-0"></div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="pt-10">
            <ReactPaginate
              previousLabel={<FaArrowLeft className="mt-1 pt-0.5" />}
              nextLabel={<FaArrowRight className="mt-1 pt-0.5" />}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
            </div>
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default FilteredProducts;
