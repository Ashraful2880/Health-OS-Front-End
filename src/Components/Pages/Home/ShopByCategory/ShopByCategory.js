import axios from "axios";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingScreen from "../../../Shared/LoadingScreen/LoadingScreen";

const ShopByCategory = () => {
  const { category } = useParams();
  const [productCategory, setProductCategory] = React.useState();
  const [search, setSearch] = React.useState(category);

  // Get product Category From DB

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_PATH}/productsCategory`)
      .then((resp) => {
        setProductCategory(resp.data);
      });
  }, [search]);

  return (
    <div className="container mx-auto mb-10">
      {/* Heading Title */}
      <div className="mt-10 mb-12 lg:text-left text-center relative">
        <h1 className="text-4xl font-bold">
          Shop By <span className="text-[#2563eb]">Category</span>
        </h1>
        <p className="text-md text-gray-700">
          Visit our shop to see amazing products
        </p>
      </div>

      {/* Product Category */}

      {productCategory?.length > 0 ? (
        <button className="w-full grid lg:grid-cols-9 md:grid-cols-5 grid-cols-3 gap-5 place-content-center place-items-center lg:px-0 px-4">
          {productCategory?.map((singleProduct) => (
            <button onClick={() => setSearch(singleProduct?.link)}>
              <Link
                to={`/shopCategory/${singleProduct?.link}`}
                className="overflow-hidden"
              >
                <div className="border h-36 w-36 rounded-md hover:scale-110 duration-300">
                  <img src={singleProduct?.product} className="" />
                </div>
                <h1 className="mt-2 mb-6 text-lg font-semibold">
                  {singleProduct?.title}
                </h1>
              </Link>
            </button>
          ))}
        </button>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default ShopByCategory;
