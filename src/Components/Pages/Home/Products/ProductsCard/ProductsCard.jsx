import Rating from "react-rating";
import { Link } from "react-router-dom";
import { BsCart, BsStar, BsStarFill } from "react-icons/bs";

const ProductsCard = ({ item }) => {
  return (
    <div className="mx-3 border rounded-md relative group cursor-pointer overflow-hidden lg:h-[350px] h-auto">
      {/* Featured Product Image */}
      <div className="bg-[#F8F8F8] lg:h-[250px] overflow-hidden">
        <img
          src={item?.productImage}
          alt="product_Image"
          className="w-full lg:h-full h-auto mx-auto pb-4"
        />
      </div>
      {/* Featured Content */}
      <div className="pl-5 text-left">
        <h4 className="text-[17px] font-bold">{item?.name}</h4>
        <div className="flex items-center gap-x-2 mb-2">
          <h4 className="text-[17px] font-semibold text-[#2563eb]">
            ${item?.price}.00
          </h4>
          {item?.offerPrice && (
            <h4 className="text-[15px] mb-0.5 text-gray-500 line-through">
              $ {item?.offerPrice}.00
            </h4>
          )}
        </div>
        <div className="flex items-center gap-x-1">
          <Rating
            readonly
            className="text-[16px]"
            emptySymbol={<BsStar className="mx-0.5 text-gray-400" />}
            fullSymbol={<BsStarFill className="mx-0.5 text-[#FFB627]" />}
            initialRating={item?.rating}
          />
          <p className="text-gray-500 text-[13px] font-semibold">
            ({item?.rating})
          </p>
        </div>
      </div>
      {/* percentage Notification */}

      {item?.offerPrice && (
        <div className="pb-3 z-50">
          <div className="absolute left-2 top-2 text-2xl text-white bg-red-500 w-10 p-1 flex justify-center items-center rounded-full z-50">
            <p className="text-xs font-semibold">
              -<span>15%</span>
            </p>
          </div>
        </div>
      )}

      {/* Add To Wishlist Button*/}

      {/* Add To Cart Button*/}
      <Link className="pb-3 z-50" to={`/product/${item._id}`}>
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-2xl text-white bg-[#2563eb] h-12 w-12 p-1 flex justify-center items-center rounded-full opacity-0 group-hover:opacity-100 duration-700 z-50">
          <button>
            <BsCart />
          </button>
        </div>
      </Link>
      {/* Cart Overlay */}
      <div className="absolute bottom-0 h-full w-full bg-black opacity-0 group-hover:opacity-40 translate-y-[100%] group-hover:translate-y-0 duration-700 z-0"></div>
    </div>
  );
};

export default ProductsCard;
