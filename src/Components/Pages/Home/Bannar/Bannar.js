import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import "swiper/css/navigation";
import { Navigation } from "swiper";
SwiperCore.use([Autoplay, Navigation]);

const Bannar = () => {
  return (
    <div className="lg:h-[78vh] md:h-[70vh] h-[65vh] overflow-hidden">
      <Swiper
        cssMode={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay, Navigation]}
        navigation={true}
        className="mySwiper"
      >
        {/* Slider-01 */}

        <SwiperSlide className="slider-bg">
          <div className="slider-bg"></div>
          <div className="absolute lg:left-[300px] md:left-[180px] left-[50px] lg:top-[165px] md:top-[100px] top-[50px] text-left">
            <div className="lg:text-6xl md:text-5xl text-4xl font-bold text-white">
              <h1>Digital</h1>
              <h1 className="my-3">Blood Pressure</h1>
              <h1>Monitor</h1>
            </div>
            <p className="text-[22px] text-gray-300 mt-8 font-semibold">
              We support you to business health smoothly and reduce
              <br /> your stress with good Health Product
            </p>
            <Link to="/shopCategory/All">
              <button className="text-[17px] font-semibold mt-6 px-8 py-2.5 bg-white hover:bg-transparent text-[#2563eb] hover:text-white border border-white rounded-md duration-300">
                Shop Now
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Slider-02 */}

        <SwiperSlide className="slider-bg2">
          <div className="slider-bg2"></div>
          <div className="absolute lg:left-[300px] md:left-[180px] left-[50px] lg:top-[165px] md:top-[100px] top-[50px] text-left">
            <div className="lg:text-6xl md:text-5xl text-4xl font-bold text-white">
              <h1>Medical</h1>
              <h1 className="my-3">First Aid New</h1>
              <h1> Kit</h1>
            </div>
            <p className="text-[22px] text-gray-300 mt-8 font-semibold">
              We support you to business health smoothly and reduce
              <br /> your stress with good Health Product
            </p>
            <Link to="/shopCategory/All">
              <button className="text-[17px] font-semibold mt-6 px-8 py-2.5 bg-white hover:bg-transparent text-[#2563eb] hover:text-white border border-white rounded-md duration-300">
                Shop Now
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Slider-03 */}

        <SwiperSlide className="slider-bg3">
          <div className="slider-bg3"></div>
          <div className="absolute lg:left-[300px] md:left-[180px] left-[50px] lg:top-[165px] md:top-[100px] top-[50px] text-left">
            <div className="lg:text-6xl md:text-5xl text-4xl font-bold text-white">
              <h1>Digital</h1>
              <h1 className="my-3">New Glucometer</h1>
              <h1>Service</h1>
            </div>
            <p className="text-[22px] text-gray-300 mt-8 font-semibold">
              We support you to business health smoothly and reduce
              <br /> your stress with good Health Product
            </p>
            <Link to="/shopCategory/All">
              <button className="text-[17px] font-semibold mt-6 px-8 py-2.5 bg-white hover:bg-transparent text-[#2563eb] hover:text-white border border-white rounded-md duration-300">
                Shop Now
              </button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Bannar;
