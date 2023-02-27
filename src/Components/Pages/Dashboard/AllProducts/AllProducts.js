import axios from "axios";
import React, { useEffect } from "react";
import { AiFillDelete, AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight, FaEdit } from "react-icons/fa";
import LoadingScreen from "../../../Shared/LoadingScreen/LoadingScreen";
import ViewSingleProduct from "./ViewSingleProduct";
import EditSingleProduct from "./EditSingleProduct";
import { useAlert } from "react-alert";
import ReactPaginate from "react-paginate";

const AllProducts = () => {
  const alert = useAlert();

  const [products, setproducts] = React.useState();
  const [productID, setProductID] = React.useState();
  const [view, setView] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [updated, setUpdated] = React.useState(0);
  const [pageNumber, setPageNumber] = React.useState(0);
  const productPerPage = 10;
  const pagesVisited = pageNumber * productPerPage;

  // Get All Products
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_PATH}/products`).then((resp) => {
      setproducts(resp.data);
    });
  }, [updated]);

  // Pagination Function

  const pageCount = Math.ceil(products?.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // View Single Product

  const handleView = (id) => {
    setView(true);
    setProductID(id);
  };

  // Edit Single Product

  const handleEdit = (id) => {
    setEdit(true);
    setProductID(id);
  };

  //<-------------- product Delete Function ------------>

  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_PATH}/products/${id}`)
      .then((response) => {
        setUpdated(updated + 1);
        alert.success("Deleted Successfully");
      })
      .catch((error) => {
        alert.error("Deleted Failed");
      });
  };

  return (
    <div className="h-screen">
      {/* Heading Title */}
      <div className="lg:pt-3 md:pt-3 pt-2 lg:px-3 md:px-3 px-0 mx-2">
        <div className="text-xl bg-white lg:w-60 w-full flex items-center gap-x-2 px-5">
          <AiOutlineAppstoreAdd className="text-[#2563eb]" />
          <h3 className="font-semibold text-[#2563eb] py-1.5">
            All Product List
          </h3>
        </div>
      </div>

      {products?.length > 0 ? (
        <div className="mx-auto container py-8">
          <div className="flex flex-wrap items-center lg:justify-start justify-center">
            {products
              ?.slice(pagesVisited, pagesVisited + productPerPage)
              ?.map((product) => (
                <div
                  className="mx-2 w-72 lg:mb-6 border rounded-md shadow-md hover:shadow duration-300 relative"
                  key={product._id}
                >
                  <div>
                    <img
                      src={product?.productImage}
                      className="w-full h-44"
                      alt="product"
                    />
                  </div>
                  <div className="bg-white">
                    <div className="px-4 pt-2 pb-4">
                      <div className="text-left">
                        <h2 className="text-lg font-bold text-[#2563eb]">
                          {product?.name}
                        </h2>
                        <p className="text-gray-500 text-md">
                          {product?.category}
                        </p>
                      </div>
                      <p className="text-sm text-gray-600 mt-2 text-left">
                        The product system has significant impacts on a wide
                        range of other social and political issues including
                      </p>
                      <div className="flex items-center justify-between pt-3 pb-2">
                        <p className="text-orange-500 font-semibold">
                          Price: ${product?.price}
                        </p>
                        {product.offerPrice && (
                          <p className="text-gray-400 line-through">
                            Offer Price: ${product?.offerPrice}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-3">
                    <button
                      onClick={() => handleView(product?._id)}
                      className="p-1 my-2 h-7 w-7 bg-[#2563eb] hover:bg-white text-white hover:text-[#2563eb] border border-[#2563eb] rounded-full flex justify-center items-center duration-300"
                    >
                      <BsFillEyeFill />
                    </button>
                    <button
                      onClick={() => handleEdit(product._id)}
                      className="p-1 my-2 h-7 w-7 bg-sky-500 hover:bg-white text-white hover:text-sky-600 border border-sky-500 rounded-full flex justify-center items-center duration-300"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="p-1 my-2 h-7 w-7 bg-red-600 hover:bg-white text-white hover:text-red-600 border hover:border-red-600 rounded-full flex justify-center items-center duration-300"
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                </div>
              ))}
          </div>
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
      ) : (
        <LoadingScreen />
      )}
      {view && <ViewSingleProduct setView={setView} productID={productID} />}
      {edit && (
        <EditSingleProduct
          setEdit={setEdit}
          productID={productID}
          updated={updated}
          setUpdated={setUpdated}
        />
      )}
    </div>
  );
};

export default AllProducts;
