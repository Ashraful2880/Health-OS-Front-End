import axios from "axios";
import React, { useEffect } from "react";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rating from "react-rating";
import LoadingScreen from "../../../Shared/LoadingScreen/LoadingScreen";
import { BsStar, BsStarFill, BsCart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const [featuredProduct, setFeaturedProduct] = React.useState();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_PATH}/featuredProduct?featured=featured`
      )
      .then((resp) => {
        setFeaturedProduct(resp?.data);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 2500,
    rows: 2,
    cssEase: "linear",
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
    ],
  };
  const slider = React.useRef(null);

  return (
    <div className="container mx-auto lg:mb-10 mb-5">
      {/* Heading Title */}

      <div className="flex lg:justify-between md:justify-between justify-center items-center mt-12 border-b-2 border-b-[#2563eb] pb-3 mb-5">
        {/* Heading Title */}
        <div className="text-left">
          <h1 className="text-4xl font-bold">
            Featured <span className="text-[#2563eb]"> Products </span>
          </h1>
          <p className="text-md text-gray-600">
            Visit our shop to see amazing products
          </p>
        </div>
        {/* Slider Arrow Item */}
        {featuredProduct && (
          <div className="flex items-center gap-x-2">
            <div>
              <button
                className="bg-white h-9 w-9 rounded-full flex flex-col items-center justify-center text-2xl border text-[#2563eb] hover:text-white hover:bg-[#2563eb] duration-300 hover:border-[#2563eb]"
                onClick={() => slider?.current?.slickPrev()}
              >
                <VscArrowLeft />
              </button>
            </div>
            <div>
              <button
                className="bg-white h-9 w-9 rounded-full flex flex-col items-center justify-center text-2xl border text-[#2563eb] hover:text-white hover:bg-[#2563eb] duration-300 hover:border-[#2563eb]"
                onClick={() => slider?.current?.slickNext()}
              >
                <VscArrowRight />
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Featured Products Area */}
      {featuredProduct?.length > 0 ? (
        <Slider ref={slider} {...settings}>
          {featuredProduct?.map((feature) => (
            <div key={feature?._id} className="mt-7">
              <div className="mx-3 border rounded-md relative group cursor-pointer overflow-hidden lg:h-[350px] h-auto">
                {/* Featured Product Image */}
                <div className="bg-[#F8F8F8] lg:h-[250px] overflow-hidden">
                  <img
                    src={feature?.productImage}
                    alt="product_Image"
                    className="w-full lg:h-full h-auto mx-auto pb-4"
                  />
                </div>
                {/* Featured Content */}
                <div className="pl-5 text-left">
                  <h4 className="text-[17px] font-bold">{feature?.name}</h4>
                  <div className="flex items-center gap-x-2 mb-2">
                    <h4 className="text-[17px] font-semibold text-[#2563eb]">
                      ${feature?.price}.00
                    </h4>
                    {feature?.offerPrice && (
                      <h4 className="text-[15px] mb-0.5 text-gray-500 line-through">
                        $ {feature?.offerPrice}.00
                      </h4>
                    )}
                  </div>
                  <div className="flex items-center gap-x-1">
                    <Rating
                      readonly
                      className="text-[16px]"
                      emptySymbol={<BsStar className="mx-0.5 text-gray-400" />}
                      fullSymbol={
                        <BsStarFill className="mx-0.5 text-[#FFB627]" />
                      }
                      initialRating={feature?.rating}
                    />
                    <p className="text-gray-500 text-[13px] font-semibold">
                      ({feature?.rating})
                    </p>
                  </div>
                </div>
                {/* percentage Notification */}

                {feature?.offerPrice && (
                  <div className="pb-3 z-50">
                    <div className="absolute left-2 top-2 text-2xl text-white bg-red-500 w-10 p-1 flex justify-center items-center rounded-full z-50">
                      <p className="text-xs font-semibold">
                        -<span>15%</span>
                      </p>
                    </div>
                  </div>
                )}

                {/* Add To Wishlist Button*/}
                <Link to={`/addToCart/${feature._id}`} className="pb-3 z-50">
                  <div className="absolute right-2 top-2 -translate-x-0 -translate-y-0 text-2xl text-[#2563eb] group-hover:text-white bg-transparent group-hover:bg-[#2563eb] h-10 w-10 p-1 flex justify-center items-center rounded-full duration-700 z-50">
                    <button onClick={() => alert("Added To WishList")}>
                      <FaRegHeart />
                    </button>
                  </div>
                </Link>
                {/* Add To Cart Button*/}
                <Link className="pb-3 z-50" to={`/addToCart/${feature._id}`}>
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
        </Slider>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default FeaturedProducts;
