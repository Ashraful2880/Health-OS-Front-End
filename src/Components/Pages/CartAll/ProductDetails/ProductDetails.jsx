import Rating from "react-rating";
import { useAlert } from "react-alert";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MdPayment } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { BsCart, BsStar, BsStarFill } from "react-icons/bs";
import { addToCart } from "../../../../features/cartSlice/cartSlice";
import LoadingScreen from "../../../Shared/LoadingScreen/LoadingScreen";
import { useGetProductByIdQuery } from "../../../../features/product/productSlice";

const ProductDetails = () => {
  const alert = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { data: cart, isLoading } = useGetProductByIdQuery(productId, {
    refetchOnMountOrArgChange: true,
  });
  
  const [price, setPrice] = React.useState();
  const [cartCount, setCartCount] = React.useState(1);

  useEffect(() => {
    setPrice(cart?.price * cartCount);
  }, [cart?.price, cartCount]);

  const addLocalStorage = (id) => {
    dispatch(
      addToCart({
        productId: productId,
        id: id,
        productImage: cart?.productImage,
        name: cart?.name,
        price: price,
        quantity: cartCount,
      })
    );
    alert.success("Product Added to Cart");
  };

  /* const addWishList = () => {
    let AddWishList = [];
    if (localStorage.getItem("wishList")) {
      AddWishList = JSON.parse(localStorage.getItem("wisshList"));
    }
    AddWishList.push({
      productId: productId + 1,
      productImage: `${wishList.productImage}`,
      name: `${wishList.name}`,
      price: price,
      quantity: cartCount,
    });
    localStorage.setItem("wishList", JSON.stringify(addWishList));
    alert.success("Product Added to Wish List");
  }; */

  return (
    <div className="min-h-screen">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="container mx-auto border shadow-lg my-10 lg:py-20 py-2">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="lg:w-1/2 w-full">
              <img
                src={cart?.productImage}
                alt="product"
                className="w-full mx-auto"
              />
            </div>
            <div className="lg:w-4/5 w-full lg:text-left text-center">
              <h3 className="font-bold lg:text-3xl text-xl">{cart?.name}</h3>
              <h3 className="font-semibold text-lg mb-3 text-gray-500">
                {cart?.category}
              </h3>
              <h3 className="font-bold text-2xl mb-1">
                Price:
                <span className="text-orange-500">{price || cart?.price}$</span>
              </h3>
              <h3 className="font-bold lg:text-base text-xs text-gray-500 flex items-center gap-x-2">
                <Rating
                  readonly
                  className="text-[16px]"
                  emptySymbol={<BsStar className="mx-0.5 text-gray-400" />}
                  fullSymbol={<BsStarFill className="mx-0.5 text-[#FFB627]" />}
                  initialRating={cart?.rating}
                />
                (125 Customeer Review)
              </h3>
              <p className="mt-5 text-gray-600 tracking-wider lg:block hidden">
                <span className="font-bold text-[#2563eb]">{cart?.name} </span>
                allows you to fully express your vibrant personality with three
                grayscale options. Feeling adventurous? Put on a heather gray
                tee. Want to be a trendsetter? Try our exclusive colorway.
                "Black". Need to add an extra pop of color to your outfit? Our
                white tee has you covered.
              </p>
              <p className="text-md font-bold lg:mb-10 mb-2 lg:mt-4 mt-1">
                SKU: <span className="text-[#2563eb]">{cart?.SKU}</span>
              </p>
              <h3 className="font-bold text-xl mb-8">
                Quantity:
                {/* Quantity Plus Button */}
                <button
                  onClick={() =>
                    cartCount > 1
                      ? setCartCount(cartCount - 1)
                      : setCartCount(1)
                  }
                  className="text-white text-sm ml-1 px-5 py-2 bg-[#2563eb] border border-[#2563eb]"
                >
                  <FaMinus />
                </button>
                {/* Cart State */}
                <span className="text-md px-5  border border-[#2563eb] pt-[1.5px] pb-[1px]">
                  {cartCount}
                </span>
                {/* Quantity Plus Button */}
                <button
                  onClick={() => setCartCount(cartCount + 1)}
                  className="text-white text-sm px-5 py-2 bg-[#2563eb] border border-[#2563eb]"
                >
                  <FaPlus />
                </button>
              </h3>
              <div className="flex items-center gap-x-4 w-full">
                <button
                  onClick={() => addLocalStorage(cart?._id)}
                  className="bg-[#2563eb] border border-[#2563eb] text-white hover:text-[#2563eb] px-3 lg:py-2 py-1 lg:text-base text-xs rounded-md hover:bg-transparent hover:[#2563eb] duration-300 flex items-center gap-x-2"
                >
                  Add To Cart
                  <BsCart />
                </button>
            {/*     <button
                  onClick={addWishList}
                  className="bg-[#2563eb] border border-[#2563eb] text-white hover:text-[#2563eb] px-3 lg:py-2 py-1 lg:text-base text-xs rounded-md hover:bg-transparent hover:[#2563eb] duration-300 flex items-center gap-x-2"
                >
                  Add To Wishlist
                  <BsHeart />
                </button> */}
                <button
                  className="bg-[#2563eb] border border-[#2563eb] text-white px-3 lg:py-2 py-1 lg:text-base text-xs rounded-md hover:bg-transparent hover:text-[#2563eb] duration-300 flex items-center gap-x-2"
                  onClick={() => {
                    addLocalStorage(cart?._id);
                    navigate("/cart");
                  }}
                >
                  Place Order
                  <MdPayment />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
