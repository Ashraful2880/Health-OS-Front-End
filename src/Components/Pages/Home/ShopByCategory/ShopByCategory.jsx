import { Link } from "react-router-dom";
import dot from "../../../../Assets/Images/Others/dot.png";
import shape from "../../../../Assets/Images/Others/circlebaner.png";
import LoadingScreen from "../../../Shared/LoadingScreen/LoadingScreen";
import rightshape from "../../../../Assets/Images/Others/right-shape.png";
import { useGetProductCategoriesQuery } from "../../../../features/product/productSlice";

const ShopByCategory = () => {
  const { data: productsByCategory, isLoading } =
    useGetProductCategoriesQuery();

  return (
    <div className="relative">
      <img
        src={shape}
        alt="Shape"
        className="absolute -top-32 left-0 trans-animation"
      />
      <img
        src={dot}
        alt="Shape"
        className="absolute top-0 left-20 trans-animation"
      />
      <img
        src={rightshape}
        alt="Shape"
        className="absolute -top-10 right-0 trans-animation"
      />
      <div className="container mx-auto mb-10">
        {/* Heading Title */}
        <div className="sm:mt-0 mt-5 sm:mb-12 mb-5 lg:text-left text-center relative">
          <h1 className="text-4xl font-bold">
            Shop By <span className="text-[#2563eb]">Category</span>
          </h1>
          <p className="text-md text-gray-700">
            Visit our shop to see amazing products
          </p>
        </div>

        {/* Product Category */}
        {isLoading ? (
          <LoadingScreen />
        ) : productsByCategory?.length > 0 ? (
          <div className="w-full grid lg:grid-cols-9 md:grid-cols-5 grid-cols-3 gap-x-5 place-content-center place-items-center lg:px-0 px-5">
            {productsByCategory?.map((singleProduct) => (
              <button key={singleProduct?._id}>
                <Link
                  to={`/products/${singleProduct?.link}`}
                  className="overflow-hidden"
                >
                  <div className="border h-36 w-36 rounded-md hover:scale-110 duration-300">
                    <img src={singleProduct?.product} alt="Product" />
                  </div>
                  <h1 className="mt-2 mb-6 text-lg font-semibold">
                    {singleProduct?.title}
                  </h1>
                </Link>
              </button>
            ))}
          </div>
        ) : (
          <LoadingScreen />
        )}
      </div>
    </div>
  );
};

export default ShopByCategory;
