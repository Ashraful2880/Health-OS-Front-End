import React from "react";
import Slider from "react-slick";
import ProductsCard from "./ProductsCard/ProductsCard";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import HeadingTitle from "../../../Shared/UI/HeadingTitle/HeadingTitle";
import LoadingScreen from "../../../Shared/LoadingScreen/LoadingScreen";
import SharedButton from "../../../Shared/UI/SharedButton/SharedButton";
import { sliderSettings } from "../../../../utils/sliderSettings/sliderSettings";
import { useGetFeaturedProductsQuery } from "../../../../features/product/productSlice";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedProducts = () => {
  const { data: featuredProducts } = useGetFeaturedProductsQuery();
  const slider = React.useRef(null);

  return (
    <div className="container mx-auto lg:mb-10 mb-5">
      <div className="flex lg:justify-between md:justify-between justify-center items-center mt-12 border-b-2 border-b-[#2563eb] pb-3 mb-5">
        {/* Heading Title */}
        <HeadingTitle
          title="Featured"
          subTitle="Products"
          details=" Visit our shop to see amazing products"
        />
        {/* Slider Arrow Item */}
        {featuredProducts?.length > 0 && (
          <div className="lg:flex md:flex hidden items-center gap-x-2">
            <div>
              <SharedButton
                size="medium"
                aria-label="Previous"
                icon={<VscArrowLeft />}
                variant="outlinePrimary"
                className="bg-white h-9 w-9 rounded-full flex flex-col items-center justify-center text-2xl border text-[#2563eb] hover:text-white hover:bg-[#2563eb] duration-300 hover:border-[#2563eb]"
                handleClick={() => slider?.current?.slickPrev()}
              />
            </div>
            <div>
              <SharedButton
                size="medium"
                aria-label="Next"
                icon={<VscArrowRight />}
                variant="outlinePrimary"
                className="bg-white h-9 w-9 rounded-full flex flex-col items-center justify-center text-2xl border text-[#2563eb] hover:text-white hover:bg-[#2563eb] duration-300 hover:border-[#2563eb]"
                handleClick={() => slider?.current?.slickNext()}
              />
            </div>
          </div>
        )}
      </div>
      {/* Featured Products Area */}
      {featuredProducts?.length > 0 ? (
        <Slider ref={slider} {...sliderSettings}>
          {featuredProducts?.map((feature) => (
            <div key={feature?._id} className="mt-7">
              <ProductsCard item={feature} />
            </div>
          ))}
        </Slider>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default FeaturedProducts;
