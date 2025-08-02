/* import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { FaTrash } from "react-icons/fa";

const WishList = () => {
  const alert = useAlert();
  const [wishList, setWishList] = React.useState();

  useEffect(() => {
    const wishListProduct = localStorage.getItem("cart");
    setWishList(JSON.parse(wishListProduct));
  }, []);

  const removeItem = (id) => {
    const setWishListItems = wishList.filter((items) => items.productId !== id);
    setWishList(setWishListItems);
    localStorage.setItem("wishList", JSON.stringify(setWishListItems));
    alert.success("Remove Item From Cart");
  };

  return (
    <div className="container mx-auto min-h-screen">
      <h1 className="lg:text-3xl md:text-2xl text-xl font-bold pt-7 pb-3 lg:text-left text-center">
        Products You Have Added
      </h1>
      <div className="lg:overflow-hidden overflow-x-scroll lg:w-3/4 w-full mb-4 lg:px-0 px-4">
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
            {wishList?.length > 0 ? (
              <>
                {wishList.map((item, key) => (
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
              <p className="text-center text-lg font-semibold text-gray-300 py-5">
                No Product Found
              </p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishList;
 */