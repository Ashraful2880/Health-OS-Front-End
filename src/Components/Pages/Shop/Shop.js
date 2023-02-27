import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingScreen from "../../Shared/LoadingScreen/LoadingScreen";
import FilteredProducts from "./FilteredProducts";

const Shop = () => {
  const { category } = useParams();

  const [products, setProducts] = React.useState();
  const [productCategory, setProductCategory] = React.useState();
  const [search, setSearch] = React.useState(category);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSearch = (link) => {
    setSearch(link);
    setIsLoading(true);
  };

  useEffect(() => {
    // search Product Category By Query
    fetch(`${process.env.REACT_APP_API_PATH}/findProducts?category=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
    // get All Product Category
    axios
      .get(`${process.env.REACT_APP_API_PATH}/productsCategory`)
      .then((resp) => {
        setProductCategory(resp.data);
      });
  }, [search, isLoading]);

  return (
    <div className="container mx-auto min-h-screen">
      {/* Category Area */}
      <div className="mt-6 mb-5">
        {productCategory?.length > 0 ? (
          <div className="w-full grid lg:grid-cols-9 md:grid-cols-5 grid-cols-3 gap-5 place-content-center place-items-center lg:px-0 px-4">
            {productCategory?.map((singleProduct) => (
              <button
                onClick={() => handleSearch(singleProduct?.link)}
                key={singleProduct?._id}
                className="overflow-hidden"
              >
                <div className="border h-36 w-36 rounded-md hover:scale-110 duration-300">
                  <img src={singleProduct?.product} className="" />
                </div>
                <h1 className="mt-2 mb-6 text-lg font-semibold">
                  {singleProduct?.title}
                </h1>
              </button>
            ))}
          </div>
        ) : (
          <LoadingScreen />
        )}
      </div>
      {/* Filtered Product Area */}
      {!isLoading ? (
        <FilteredProducts products={products} search={search} />
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default Shop;
