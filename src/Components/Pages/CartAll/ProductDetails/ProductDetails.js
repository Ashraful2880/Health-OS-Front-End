import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  // const alert = useAlert();
  const [cart, setCart] = React.useState();
  const [cartCount, setCartCount] = React.useState(1);
  const [price, setPrice] = React.useState();
  // const { productId } = useParams();

  useEffect(() => {
    setPrice(cart?.price * cartCount);
  }, [cart?.price, cartCount]);

  /*  useEffect(() => {
    fetch(`https://server-firat-deal-shop.onrender.com/addToCart/${productId}`)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, [productId]); */

  /*   const addLocalStorage = () => {
    let AddLocalStorage = [];
    if (localStorage.getItem("cart")) {
      AddLocalStorage = JSON.parse(localStorage.getItem("cart"));
    }
    AddLocalStorage.push({
      productId: productId + 1,
      image: `${cart.url}`,
      name: `${cart.name}`,
      price: price,
      quantity: cartCount,
    });
    localStorage.setItem("cart", JSON.stringify(AddLocalStorage));
    alert.success("Product Added to Cart");
  };
 */
  return (
    <div className="min-h-screen">
      <div className="container mx-auto border shadow-lg my-10 lg:py-20 py-2">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="lg:w-1/2 w-full">
            <img
              src="https://demo.leebrosus.com/melawell/wp-content/uploads/2022/04/Product_image_13-300x300.jpg"
              alt="product"
              className="w-full mx-auto"
            />
          </div>
          <div className="lg:w-1/2 w-full lg:text-left text-center">
            <h3 className="font-bold lg:text-3xl text-xl">{cart?.name}</h3>
            <h3 className="font-bold text-2xl lg:mb-4 mb-1">
              Price:
              <span className="text-orange-500">{price || cart?.price}$</span>
            </h3>
            <h3 className="font-bold lg:text-base text-xs">
              <Rating
                readonly
                className="text-orange-500"
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                initialRating={cart?.star}
              />
              (125 Customeer Review)
            </h3>
            <p className="mt-5 text-gray-600 tracking-wider lg:block hidden">
              <span className="font-bold text-orange-500">{cart?.name} </span>
              allows you to fully express your vibrant personality with three
              grayscale options. Feeling adventurous? Put on a heather gray tee.
              Want to be a trendsetter? Try our exclusive colorway. "Black".
              Need to add an extra pop of color to your outfit? Our white tee
              has you covered.
            </p>
            <p className="text-md font-bold lg:mb-10 mb-2 lg:mt-4 mt-1 text-orange-500">
              Only 27 in Stock. Order Now
            </p>
            <h3 className="font-bold text-xl mb-8">
              Quantity:
              {/* Quantity Plus Button */}
              <button
                onClick={() =>
                  cartCount > 1 ? setCartCount(cartCount - 1) : setCartCount(1)
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
            <div className="flex items-center gap-x-4">
              <button
                // onClick={addLocalStorage}
                className="bg-[#2563eb] border border-[#2563eb] text-white hover:text-[#2563eb] px-3 lg:py-2 py-1 lg:text-base text-xs rounded-md hover:bg-transparent hover:[#2563eb] duration-300 flex items-center gap-x-2"
              >
                Add To Cart
                <BsCart />
              </button>
              <button className="bg-[#2563eb] border border-[#2563eb] text-white px-3 lg:py-2 py-1 lg:text-base text-xs rounded-md hover:bg-transparent hover:text-[#2563eb] duration-300 flex items-center gap-x-2">
                <Link to="/placeOrder">Place Order</Link>
                <MdPayment />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
