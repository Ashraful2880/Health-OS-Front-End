import React, { useEffect, useState } from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";
import { FaShareAlt } from "react-icons/fa";
import LoadingScreen from "../../Shared/LoadingScreen/LoadingScreen";

SwiperCore.use([Autoplay, Pagination]);

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_PATH}/blogs`).then((resp) => {
      setBlogs(resp?.data);
    });
  }, []);

  return (
    <div className="min-h-screen">
      {blogs?.length > 0 ? (
        <div className="container mx-auto">
          <div className="lg:text-left text-center pt-6">
            <h1 className="text-4xl font-bold">
              From Our
              <span className="text-[#2563eb] "> Blogs</span>
            </h1>
            <p className="text-md text-gray-600">
              View Best Selling products in last month
            </p>
          </div>

          <div className="w-full pt-7 pb-20 overflow-hidden">
            <Swiper
              loop={true}
              autoplay={{ delay: 3000 }}
              grabCursor={true}
              slidesPerView={4}
              spaceBetween={30}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                },
                550: {
                  slidesPerView: 2,
                },
                900: {
                  slidesPerView: 2,
                },
                1020: {
                  slidesPerView: 4,
                },
              }}
              className="mySwiper"
            >
              {blogs?.map((blog, key) => (
                <SwiperSlide key={key}>
                  <div className="border rounded-lg card mx-auto duration-300 bg-white lg:px-0 px-2">
                    <div className="overflow-hidden">
                      <img
                        className="w-full h-full min-h-[200px] rounded-t-lg"
                        src={blog?.blogImage}
                        alt="BlogImage"
                      />
                    </div>
                    <div className="px-4 pb-4 text-left">
                      <h1 className="text-lg font-bold my-5 text-gray-700 cursor-pointer">
                        {blog?.title}
                      </h1>
                      <hr className="border" />
                      <div className="flex justify-evenly pt-2 pb-2">
                        <div className="flex text-stone-500 text-sm">
                          <div className="text-base">
                            Published:
                            <span> {blog?.date} </span>
                          </div>
                        </div>
                        <div className="border-l-2 "></div>
                        <div className="flex text-stone-500 text-sm">
                          <div className="text-base">
                            Posted By:
                            <span> {blog?.by} </span>
                          </div>
                        </div>
                      </div>
                      <hr className="border" />
                      <div className=" text-stone-500">
                        <p>{blog?.description.slice(0, 100)}</p>
                        <div className="py-2 flex justify-between items-center gap-x-2">
                          <button className="text-white hover:text-[#2563eb] font-bold bg-[#2563eb] hover:bg-white border-2 border-[#2563eb] duration-500 px-5 py-2 mt-3 text-sm rounded-sm">
                            Read More
                          </button>
                          <FaShareAlt className="text-lg text-[#2563eb]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default Blogs;
