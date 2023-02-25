import React, { useEffect, useState } from "react";

const CheckOut = () => {
  const [cusName, setCusName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [address2, setAddress2] = useState("");
  const [cityName, setCityName] = useState("");
  const [state, setState] = useState("");
  const [postal, setPostal] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [checkoutProduct, setCheckoutProduct] = useState({});
  const [productDetails, setProductDetails] = useState([]);

  //<--------- Get Pending Payment Order From Local Storage --------->

  useEffect(() => {
    const getCheckoutProduct = localStorage.getItem("pendingPayment");
    const getCart = localStorage.getItem("cart");
    setProductDetails(getCart);
    setCheckoutProduct(JSON.parse(getCheckoutProduct));
  }, []);

  //<-------- sslCommerz Function Here --------->

  const handlePay = (e) => {
    e.preventDefault();
    const info = {
      product_name: "follow the product details",
      product_profile: "product details",
      product_image: "see the product details",
      total_amount:
        checkoutProduct?.netTotal * 80 ||
        checkoutProduct?.totalWithoutCoupon * 80,
      cus_name: cusName,
      cus_email: email,
      cus_add1: address2,
      cus_street: street,
      cus_city: cityName,
      cus_state: state,
      cus_postcode: postal,
      cus_country: country,
      cus_phone: phone,
      productDetails,
    };
    fetch(`https://server-firat-deal-shop.onrender.com/init`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(data);
      });
  };

  return (
    <div className="min-h-screen container mx-auto">
      <div className="lg:flex block justify-around lg:mb-52 mb-2 border border-gray-300 rounded-lg lg:mt-10 mt-1 lg:pb-20">
        <div className="lg:w-3/5 w-full">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 pb-10 mx-10">
            <div className="md:col-span-2">
              <h2 className="text-2xl text-left lg:mt-4 mt-1 mb-6 font-bold ml-1">
                Billing Address
              </h2>
              <div className=" shadow-xl overflow-hidden rounded-md border border-gray-200">
                <form onSubmit={handlePay}>
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="cus_name"
                          className="block font-bold text-sm text-left"
                        >
                          Customer Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="mt-1 focus:ring-[#2563eb] focus:border-[#2563eb] block w-full shadow-sm sm:text-sm rounded-md border border-gray-400 p-2"
                          placeholder="Customer Name Here"
                          onChange={(e) => setCusName(e.target.value)}
                          required
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="email"
                          className="block font-bold text-sm text-left"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="mt-1 focus:ring-[#2563eb] focus:border-[#2563eb] block w-full shadow-sm sm:text-sm rounded-md border border-gray-400 p-2"
                          placeholder="Customer Email Here"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="street-address"
                          className="block font-bold text-sm text-left"
                        >
                          Street Address
                        </label>
                        <input
                          type="text"
                          name="street address"
                          className="mt-1 focus:ring-[#2563eb] focus:border-[#2563eb] block w-full shadow-sm sm:text-sm rounded-md border border-gray-400 p-2"
                          placeholder="Street Where You Live"
                          onChange={(e) => setStreet(e.target.value)}
                          required
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="state"
                          className="block font-bold text-sm text-left"
                        >
                          Address Line-2
                        </label>
                        <input
                          type="text"
                          name="address2"
                          className="mt-1 focus:ring-[#2563eb] focus:border-[#2563eb] block w-full shadow-sm sm:text-sm rounded-md border border-gray-400 p-2"
                          placeholder="Your Address Line"
                          required
                          onChange={(e) => setAddress2(e.target.value)}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="city"
                          className="block font-bold text-sm text-left"
                        >
                          City Name
                        </label>
                        <input
                          type="text"
                          name="city"
                          className="mt-1 focus:ring-[#2563eb] focus:border-[#2563eb] block w-full shadow-sm sm:text-sm rounded-md border border-gray-400 p-2"
                          placeholder="Your City Name Here"
                          onChange={(e) => setCityName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="state"
                          className="block font-bold text-sm text-left"
                        >
                          Your State
                        </label>
                        <input
                          type="text"
                          name="state name"
                          className="mt-1 focus:ring-[#2563eb] focus:border-[#2563eb] block w-full shadow-sm sm:text-sm rounded-md border border-gray-400 p-2"
                          placeholder="Your State"
                          onChange={(e) => setState(e.target.value)}
                          required
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="postal"
                          className="block font-bold text-sm text-left"
                        >
                          Zip / Postal Code
                        </label>
                        <input
                          type="number"
                          name="postal"
                          className="mt-1 focus:ring-[#2563eb] focus:border-[#2563eb] block w-full shadow-sm sm:text-sm rounded-md border border-gray-400 p-2"
                          placeholder="Zip / Postal Code Here"
                          onChange={(e) => setPostal(e.target.value)}
                          required
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="postal"
                          className="block font-bold text-sm text-left"
                        >
                          Your Phone Number
                        </label>
                        <input
                          type="number"
                          name="phone"
                          className="mt-1 focus:ring-[#2563eb] focus:border-[#2563eb] block w-full shadow-sm sm:text-sm rounded-md border border-gray-400 p-2"
                          placeholder="Enter a Active Number"
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                      <div className="col-span-6">
                        <label
                          htmlFor="country"
                          className="block font-bold text-sm text-left"
                        >
                          Country
                        </label>
                        <select
                          name="country"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#2563eb] focus:border-[#2563eb] sm:text-sm"
                          required
                          onChange={(e) => setCountry(e.target.value)}
                        >
                          <option>Select Country</option>
                          <option>Bangladesh</option>
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pb-6 sm:px-6">
                    <button
                      type="submit"
                      className="bg-[#2563eb] border border-[#2563eb] text-white px-3 py-2 rounded-md ml-2 hover:bg-transparent hover:text-[#2563eb] duration-300 lg:w-1/2 w-full font-bold text-lg"
                    >
                      Proceed To Pay With{" "}
                      {checkoutProduct?.netTotal ||
                        checkoutProduct?.totalWithoutCoupon}
                      $
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mt-4 mt-0 lg:w-2/5 w-full">
          <div className="grid grid-cols-1 gap-6 lg:pb-10 pb-5 mx-10">
            <div className="md:col-span-2">
              <h2 className="text-2xl text-left mb-6 font-bold ml-1">
                Order Summary
              </h2>
              <div className="shadow-xl overflow-hidden rounded-md border border-gray-200 pb-28">
                <div className="px-4 pb-6 bg-gray-50 text-right sm:px-6 font-bold">
                  <div className="flex justify-between py-4">
                    <h4 className="text-md font-bold">Your Orderd Items</h4>
                    <h4 className="text-[#2563eb] text-lg font-bold">
                      {checkoutProduct?.totalProduct}
                    </h4>
                  </div>
                  <div>
                    <div className="flex justify-between border py-3 px-4">
                      <p>Product Price</p>
                      <p className="text-[#2563eb]">
                        {checkoutProduct?.totalProductPrice}$
                      </p>
                    </div>
                    <div className="flex justify-between border py-3 px-4">
                      <p>Delivery</p>
                      <p className="text-[#2563eb]">
                        {checkoutProduct?.deliveryCost}$
                      </p>
                    </div>
                    <div className="flex justify-between border py-3 px-4">
                      <p>Shipping</p>
                      <p className="text-[#2563eb]">
                        {checkoutProduct?.shippingCost}$
                      </p>
                    </div>
                    <div className="flex justify-between border py-3 px-4">
                      <p>Total Price</p>
                      <p className="text-[#2563eb]">
                        {checkoutProduct?.totalPrice}$
                      </p>
                    </div>
                    <div className="flex justify-between border py-3 px-4">
                      <p>Discount</p>
                      <p className="text-[#2563eb]">
                        {checkoutProduct?.coupon}$
                      </p>
                    </div>
                    <div className="flex justify-between border border-[#2563eb] py-3 px-4 bg-[#2563eb] text-white">
                      <p className="font-bold text-xl">Grand Total</p>
                      <p className="font-bold text-xl">
                        {checkoutProduct?.netTotal ||
                          checkoutProduct?.totalWithoutCoupon}
                        $
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
