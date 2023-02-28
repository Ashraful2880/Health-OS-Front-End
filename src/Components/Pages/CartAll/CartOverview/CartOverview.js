import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { FaTrash } from "react-icons/fa";

const CartOverview = () => {
  const alert = useAlert();
  const [cartItems, setCartItems] = useState([]);
  const [coupon, setCoupon] = useState();
  const [grandTotal, setGrandTotal] = useState();

  //<------- Get All Cart Products From Local Storage ------->

  useEffect(() => {
    const myCartProduct = localStorage.getItem("cart");
    setCartItems(JSON.parse(myCartProduct));
  }, []);

  //<------ Function For Remove (Added Cart) Item From Local Storage ------->

  const removeItem = (id) => {
    const setCart = cartItems.filter((items) => items.productId !== id);
    setCartItems(setCart);
    localStorage.setItem("cart", JSON.stringify(setCart));
    alert.success("Remove Item From Cart");
  };

  //<------ Function For Calculation Price And Discount Area -------->

  let TotalCartPrice = cartItems?.reduce(function (accumulator, item) {
    return accumulator + item.price;
  }, 0);

  const shippingCost = parseFloat((TotalCartPrice / 100) * 10) || 0;
  const deliveryCostCalculate = parseFloat((TotalCartPrice / 100) * 15) || 0;
  const deliveryCost = deliveryCostCalculate ||0;
  const subTotal = parseFloat(TotalCartPrice + shippingCost + deliveryCost )||0;

  const handleCoupon = (e) => {
    if (coupon === "discount") {
      const discount = subTotal - (subTotal / 100) * 15;
      setGrandTotal(discount);
      alert.success("You have Get 15% discount");
      setCoupon("");
    } else {
      alert.error("Wrong Coupon Code");
      setCoupon("");
    }
  };
  //<------ Pending Payment Order Save To Local Storage ---------->

  const orderSaveToLocalStorage = () => {
    const pendingPayment = {
      totalProduct: cartItems?.length,
      totalProductPrice: TotalCartPrice,
      shippingCost: shippingCost.toFixed(2),
      deliveryCost: deliveryCost.toFixed(2),
      totalPrice: subTotal,
      coupon: parseFloat(grandTotal - subTotal) || 0,
      netTotal: grandTotal,
      totalWithoutCoupon: subTotal,
    };
    localStorage.setItem("pendingPayment", JSON.stringify(pendingPayment));
  };

  return (
    <div className="container mx-auto mb-10 min-h-screen">
      {/* {cartItems?.length > 0 ? ( */}
      <>
        <h1 className="lg:text-3xl md:text-2xl text-xl font-bold pt-7 pb-3 lg:text-left text-center">
          Products You Have Added
        </h1>
        <div className="lg:flex block justify-between min-h-[55vh] lg:px-0 px-4">
          <div className="lg:overflow-hidden overflow-x-scroll lg:w-3/4 w-full mb-4">
            <table className="w-full mr-2 border">
              <thead className=" divide-y border-b-2 border-t border-gray-300">
                <tr>
                  <th
                    scope="col"
                    className="py-4 text-center text-sm font-bold text-black uppercase tracking-widest"
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="py-4 text-center text-sm font-bold text-black uppercase tracking-widest"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="py-4 text-center text-sm font-bold text-black uppercase tracking-widest"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="py-4 text-center text-sm font-bold text-black uppercase tracking-widest"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="py-4 text-center text-sm font-bold text-black uppercase tracking-widest"
                  >
                    Total
                  </th>
                  <th
                    scope="col"
                    className="py-4 text-center text-sm font-bold text-black uppercase tracking-widest"
                  >
                    Romove
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y">
                {cartItems?.length > 0 ? (
                  <>
                    {cartItems?.map((item, key) => (
                      <tr key={key} className="font-bold">
                        <td className="px-6 py-4 whitespace-nowrap mx-auto">
                          <img
                            className="mx-auto lg:w-28 w-full"
                            src={item?.productImage}
                            alt="CartImage"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-black">
                          {item?.name || ""}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-black">
                          {item?.price || 0}$
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-black">
                          {item?.quantity || 0}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-black">
                          {item?.price || 0}$
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-orange-600">
                          <button onClick={() => removeItem(item?.productId)}>
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <p className="text-2xl text-gray-300 py-5 w-full text-center">
                    No Product Found
                  </p>
                )}
              </tbody>
            </table>
          </div>
          <div className="cart border lg:w-1/4 w-full lg:ml-2 ml-0 text-left relative mb-4">
            <h2 className="text-xl font-bold border-b-2 py-3 text-center">
              Details Of Cost
            </h2>
            <div className="px-8 pt-8">
              <h2 className="text-lg font-bold border-b my-4 flex justify-between">
                <span>Products Total: </span>
                <span className="text-[#2563eb]">{TotalCartPrice || 0}$</span>
              </h2>
              <h2 className="text-lg font-bold border-b my-4 flex justify-between">
                <span>Shipping: </span>
                <span className="text-[#2563eb]">
                  {shippingCost?.toFixed(2) || 0}$
                </span>
              </h2>
              <h2 className="text-lg font-bold border-b my-4 flex justify-between">
                <span>Delivery: </span>
                <span className="text-[#2563eb]">
                  {deliveryCost?.toFixed(2) || 0}$
                </span>
              </h2>
              <h2 className="text-lg font-bold border-b my-4 flex justify-between">
                <span>Sub Total: </span>
                <span className="text-[#2563eb]">
                  {subTotal?.toFixed(2) || 0}$
                </span>
              </h2>
            </div>
            <div className="px-8 pt-4 pb-4 flex justify-start">
              <div className="flex items-center border border-text-[#2563eb] rounded-lg">
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Enter Coupon Code"
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button
                  className="text-md font-bold text-white border bg-[#2563eb] hover:bg-transparent border-[#2563eb] hover:border-[#2563eb] hover:text-[#2563eb] py-1 px-3 rounded-lg hover:border-l-2 duration-300"
                  type="button"
                  onClick={handleCoupon}
                >
                  Apply
                </button>
              </div>
            </div>
            <div className="px-8 pb-4 mb-10 lg:mb-32">
              <h2 className="text-lg font-bold flex justify-between">
                <span>Grand Total:</span>
                <span>{grandTotal?.toFixed(2) || subTotal || 0}$</span>
              </h2>
            </div>
            <Link to="/checkout">
              {cartItems?.length > 0 ? (
                <button
                  onClick={orderSaveToLocalStorage}
                  className="lg:text-lg text-base text-white font-bold bg-[#2563eb] border border-[#2563eb] hover:bg-transparent hover:text-[#2563eb] duration-300 lg:py-3 py-2 mb-6 lg:px-6 px-3 rounded-md lg:absolute static bottom-4 left-10 lg:ml-1 ml-16"
                >
                  Proceed to Checkout
                </button>
              ) : (
                <button
                  className="lg:text-lg text-base text-white font-bold bg-gray-300 border border-gray-300  lg:py-3 py-2 mb-6 lg:px-6 px-3 rounded-md lg:absolute static bottom-4 left-10 lg:ml-1 ml-16 cursor-not-allowed"
                  disabled
                >
                  Proceed to Checkout
                </button>
              )}
            </Link>
          </div>
        </div>
      </>
    </div>
  );
};

export default CartOverview;
