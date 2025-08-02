import React from "react";
import { useParams } from "react-router-dom";
import FilteredProducts from "./FilteredProducts";
import LoadingScreen from "../../Shared/LoadingScreen/LoadingScreen";
import {
  useGetProductCategoriesQuery,
  useGetProductsByCategoryQuery,
} from "../../../features/product/productSlice";

const Shop = () => {
  const { category } = useParams();
  const [search, setSearch] = React.useState(category);
  const { data: productCategory } = useGetProductCategoriesQuery();
  const handleSearch = (link) => {
    setSearch(link);
  };
  const {
    data: products,
    isLoading: isProductsLoading,
    isFetching: isProductsFetching,
  } = useGetProductsByCategoryQuery(search, { skip: !search });

  return (
    <div className="container mx-auto min-h-screen">
      <div className="mt-6 mb-5">
        {productCategory?.length > 0 ? (
          <div className="w-full grid lg:grid-cols-9 md:grid-cols-5 grid-cols-3 gap-x-5 place-content-center place-items-center lg:px-0 px-4">
            {productCategory?.map((singleProduct) => (
              <button
                onClick={() => handleSearch(singleProduct?.link)}
                key={singleProduct?._id}
                className="overflow-hidden"
              >
                <div className="border h-36 w-36 rounded-md hover:scale-110 duration-300">
                  <img src={singleProduct?.product} alt="product" />
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
      {!isProductsLoading && !isProductsFetching ? (
        <FilteredProducts products={products} search={search} />
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default Shop;
