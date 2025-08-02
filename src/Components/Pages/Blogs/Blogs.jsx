import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BlogCard from "./BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import NoDataFound from "../../Shared/NoDataFound/NoDataFound";
import LoadingScreen from "../../Shared/LoadingScreen/LoadingScreen";
import { useGetBlogsQuery } from "../../../features/blogSlice/blogSlice";

SwiperCore.use([Autoplay, Pagination]);

const Blogs = () => {
  const { data: blogs, isLoading } = useGetBlogsQuery();

  return (
    <div className="min-h-screen">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
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
                      <BlogCard blog={blog} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          ) : (
            <NoDataFound message="No Blogs Available!" />
          )}
        </div>
      )}
    </div>
  );
};

export default Blogs;
