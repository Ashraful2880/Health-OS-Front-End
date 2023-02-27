import React from "react";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 3000,
    cssEase: "linear",
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
    <div className="container mx-auto px-2 lg:pt-8 py-5">
      <div className="flex justify-between items-start">
        <h1 className="lg:text-3xl text-2xl text-[#314259] font-bold mb-4 leading-10 text-start">
          Trusted By Our <span className="text-[#2563eb]">Clients</span>
        </h1>
        <div className="flex items-center gap-x-3">
          <div>
            <button
              className="bg-white h-12 w-12 rounded-full flex flex-col items-center justify-center text-2xl border text-[#1678FB] hover:text-white hover:bg-[#1678FB] duration-300 hover:border-[#1678FB]"
              onClick={() => slider?.current?.slickPrev()}
            >
              <VscArrowLeft />
            </button>
          </div>
          <div>
            <button
              className="bg-white h-12 w-12 rounded-full flex flex-col items-center justify-center text-2xl border text-[#1678FB] hover:text-white hover:bg-[#1678FB] duration-300 hover:border-[#1678FB]"
              onClick={() => slider?.current?.slickNext()}
            >
              <VscArrowRight />
            </button>
          </div>
        </div>
      </div>
      {/* Slider Area  */}
      <Slider ref={slider} {...settings}>
        <div className="px-5 lg:py-6 py-5">
          <div className="border border-t-4 rounded-t-2xl border-t-[#1675FB] shadow-lg my-4 w-full flex flex-col justify-between items-start mx-5 p-6 rounded-lg">
            <h2 className="text-3xl font-bold text-[#314259] text-start">
              More than <span className="text-[#1678FB]"> 60,000 </span> Clients
            </h2>
            <p className="mb-4 mt-3 text-start text-lg text-gray-500">
              My executives could learn it so quickly and we implemented
              literally in a couple of days. I am impressed with time-saving
              features
            </p>
            <div className="flex items-center gap-x-4 justify-start">
              <img
                src="https://avatars.githubusercontent.com/u/86690202?v=4"
                alt="User"
                className="h-12 w-12 rounded-full"
              />
              <div className="text-start">
                <h4 className="font-bold text-lg">Ashraful Islam</h4>
                <h5 className="text-gray-500">React Developer</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 lg:py-6 py-5">
          <div className="border border-t-4 rounded-t-2xl border-t-[#1675FB] shadow-lg my-4 w-full flex flex-col justify-between items-start mx-5 p-6 rounded-lg">
            <h2 className="text-3xl font-bold text-[#314259] text-start">
              More than <span className="text-[#1678FB]"> 60,000 </span> Clients
            </h2>
            <p className="mb-4 mt-3 text-start text-lg text-gray-500">
              My executives could learn it so quickly and we implemented
              literally in a couple of days. I am impressed with time-saving
              features
            </p>
            <div className="flex items-center gap-x-4 justify-start">
              <img
                src="https://avatars.githubusercontent.com/u/86690202?v=4"
                alt="User"
                className="h-12 w-12 rounded-full"
              />
              <div className="text-start">
                <h4 className="font-bold text-lg">Ashraful Islam</h4>
                <h5 className="text-gray-500">React Developer</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 lg:py-6 py-5">
          <div className="border border-t-4 rounded-t-2xl border-t-[#1675FB] shadow-lg my-4 w-full flex flex-col justify-between items-start mx-5 p-6 rounded-lg">
            <h2 className="text-3xl font-bold text-[#314259] text-start">
              More than <span className="text-[#1678FB]"> 60,000 </span> Clients
            </h2>
            <p className="mb-4 mt-3 text-start text-lg text-gray-500">
              My executives could learn it so quickly and we implemented
              literally in a couple of days. I am impressed with time-saving
              features
            </p>
            <div className="flex items-center gap-x-4 justify-start">
              <img
                src="https://avatars.githubusercontent.com/u/86690202?v=4"
                alt="User"
                className="h-12 w-12 rounded-full"
              />
              <div className="text-start">
                <h4 className="font-bold text-lg">Ashraful Islam</h4>
                <h5 className="text-gray-500">React Developer</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 lg:py-6 py-5">
          <div className="border border-t-4 rounded-t-2xl border-t-[#1675FB] shadow-lg my-4 w-full flex flex-col justify-between items-start mx-5 p-6 rounded-lg">
            <h2 className="text-3xl font-bold text-[#314259] text-start">
              More than <span className="text-[#1678FB]"> 60,000 </span> Clients
            </h2>
            <p className="mb-4 mt-3 text-start text-lg text-gray-500">
              My executives could learn it so quickly and we implemented
              literally in a couple of days. I am impressed with time-saving
              features
            </p>
            <div className="flex items-center gap-x-4 justify-start">
              <img
                src="https://avatars.githubusercontent.com/u/86690202?v=4"
                alt="User"
                className="h-12 w-12 rounded-full"
              />
              <div className="text-start">
                <h4 className="font-bold text-lg">Ashraful Islam</h4>
                <h5 className="text-gray-500">React Developer</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 lg:py-6 py-5">
          <div className="border border-t-4 rounded-t-2xl border-t-[#1675FB] shadow-lg my-4 w-full flex flex-col justify-between items-start mx-5 p-6 rounded-lg">
            <h2 className="text-3xl font-bold text-[#314259] text-start">
              More than <span className="text-[#1678FB]"> 60,000 </span> Clients
            </h2>
            <p className="mb-4 mt-3 text-start text-lg text-gray-500">
              My executives could learn it so quickly and we implemented
              literally in a couple of days. I am impressed with time-saving
              features
            </p>
            <div className="flex items-center gap-x-4 justify-start">
              <img
                src="https://avatars.githubusercontent.com/u/86690202?v=4"
                alt="User"
                className="h-12 w-12 rounded-full"
              />
              <div className="text-start">
                <h4 className="font-bold text-lg">Ashraful Islam</h4>
                <h5 className="text-gray-500">React Developer</h5>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonial;
