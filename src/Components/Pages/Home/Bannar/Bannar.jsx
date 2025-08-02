import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import bannarData from "../../../../utils/jsonData/Bannar/BannarData";

SwiperCore.use([Autoplay, Navigation]);

const Bannar = () => {
  return (
    <>
      {/* Hide Swiper navigation arrows on mobile */}
      <style>{`
        @media (max-width: 639px) {
          .swiper-button-next, .swiper-button-prev {
            display: none !important;
          }
        }
      `}</style>
      <div className="lg:h-[90vh] md:h-[75vh] h-[65vh] overflow-hidden">
        <Swiper
          cssMode={true}
          navigation={true}
          className="mySwiper"
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          {bannarData?.map((item, idx) => (
            <SwiperSlide className={item?.bgImage} key={item?.id || idx}>
              <div className={item?.bgImage}></div>
              <div
                className={`${item?.bgImage} absolute inset-0 bg-cover bg-center`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-[180px] lg:px-[300px] text-left">
                <div className="lg:text-6xl md:text-5xl text-2xl sm:text-3xl font-bold text-white">
                  <h1>{item?.title}</h1>
                  <h1 className="my-3">{item?.subtitle}</h1>
                  <h1>{item?.highlight}</h1>
                </div>
                <p className="text-md sm:text-[22px] text-gray-300 mt-8 font-semibold w-full sm:w-1/2">
                  {item?.description}
                </p>
                <Link to="/products/All">
                  <button className="text-sm sm:text-[17px] font-semibold mt-6 px-6 sm:px-8 py-2 sm:py-2.5 bg-white hover:bg-transparent text-[#2563eb] hover:text-white border border-white rounded-md duration-300">
                    Shop Now
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Bannar;
