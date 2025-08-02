import { useSelector } from "react-redux";

const useCartData = () => {
  return useSelector((state) => state.cart.cart);
};

export default useCartData;
