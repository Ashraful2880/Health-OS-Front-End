import { FaShareAlt } from "react-icons/fa";

const BlogCard = ({ blog }) => {
  return (
    <div className="border rounded-lg mx-auto duration-300 bg-white lg:px-0 px-2">
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
              <span>{blog?.date} </span>
            </div>
          </div>
          <div className="border-l-2 "></div>
          <div className="flex text-stone-500 text-sm">
            <div className="text-base">
              Post By:
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
  );
};

export default BlogCard;
