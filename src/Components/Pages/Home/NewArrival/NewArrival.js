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
import featuredBannar from "../../../../Assets/Images/Others/featured-bannar.jpg";
import { Link } from "react-router-dom";

const NewArrival = () => {
  const [newArrivalData, setNewArrivalData] = React.useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_PATH}/newArrival?newArrival=newArrival`)
      .then((resp) => {
        setNewArrivalData(resp?.data);
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

      <div className="flex justify-between items-center mt-12 border-b pb-3">
        {/* Heading Title */}
        <div className="lg:text-left text-center">
          <h1 className="text-4xl font-bold">
            <span className="text-[#2563eb]">N</span>ew
            <span className="text-[#2563eb] ">A</span>rrival
          </h1>
          <p className="text-md text-gray-600">
            Visit our shop to see amazing products
          </p>
        </div>
        {/* Slider Arrow Item */}
        {newArrivalData && (
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
      {/* New Arrival Data Area */}
      {newArrivalData?.length > 0 ? (
        <Slider ref={slider} {...settings}>
          {newArrivalData?.map((arrivalItem) => (
            <div key={arrivalItem?._id} className="mt-7">
              <div className="mx-3 border rounded-md relative group cursor-pointer overflow-hidden">
                {/* New Arrival Product Image */}
                <div className="bg-[#F8F8F8]">
                  <img
                    src={arrivalItem?.productImage}
                    alt="product_Image"
                    className="w-full lg:h-[250px] h-auto mx-auto pb-4"
                  />
                </div>
                {/* New Arrival Content */}
                <div className="pl-5 text-left">
                  <h4 className="text-[17px] font-bold">{arrivalItem?.name}</h4>
                  <div className="flex items-center gap-x-2 mb-2">
                    <h4 className="text-[17px] font-semibold text-[#2563eb]">
                      ${arrivalItem?.price}.00
                    </h4>
                    {arrivalItem?.offerPrice && (
                      <h4 className="text-[15px] mb-0.5 text-gray-500 line-through">
                        $ {arrivalItem?.offerPrice}.00
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
                      initialRating={arrivalItem?.rating}
                    />
                    <p className="text-gray-500 text-[13px] font-semibold">
                      ({arrivalItem?.rating})
                    </p>
                  </div>
                </div>
                {/* percentage Notification */}

                {arrivalItem?.offerPrice && (
                  <div className="pb-3 z-50">
                    <div className="absolute left-2 top-2 text-2xl text-white bg-red-500 w-10 p-1 flex justify-center items-center rounded-full z-50">
                      <p className="text-xs font-semibold">
                        -<span>15%</span>
                      </p>
                    </div>
                  </div>
                )}

                {/* Add To Wishlist Button*/}
                <div className="pb-3 z-50">
                  <div className="absolute right-2 top-2 -translate-x-0 -translate-y-0 text-2xl text-[#2563eb] group-hover:text-white bg-transparent group-hover:bg-[#2563eb] h-10 w-10 p-1 flex justify-center items-center rounded-full duration-700 z-50">
                    <button onClick={() => alert("Added To WishList")}>
                      <FaRegHeart />
                    </button>
                  </div>
                </div>
                {/* Add To Cart Button*/}
                <Link
                  className="pb-3 z-50"
                  to={`/addToCart/${arrivalItem._id}`}
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
        </Slider>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default NewArrival;
