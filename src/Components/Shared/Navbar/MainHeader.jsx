import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { FiShoppingBag } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import useCartData from "../../../utils/Hooks/useCartData";

const MainHeader = () => {
  const cartData = useCartData();
  const location = useLocation();
  const pathName = location?.pathname;

  const totalPrice = cartData?.reduce(
    (accumulator, currentValue) => accumulator + (currentValue?.price || 0),
    0
  );

  return (
    <>
      {!pathName.includes("/dashboard") && (
        <div className="lg:border border-0  my-0 lg:mt-0 lg:shadow-md shadow-none lg:sticky lg:top-0 lg:z-50 lg:bg-white/90">
          <nav className="lg:container lg:mx-auto">
            <div className="md:flex md:justify-between md:items-center">
              <div className="w-full">
                <div className="lg:block hidden">
                  <Navbar />
                </div>
                <div className="lg:hidden block">
                  <MobileNav />
                </div>
              </div>

              <div className="lg:block md:block hidden">
                <div className="flex items-center gap-x-6">
                  <Link
                    to="/cart"
                    className="relative hover:text-[#2563eb] duration-300"
                  >
                    <div className="h-5 w-5 rounded-full bg-[#2563eb] flex flex-col justify-center items-center p-2 text-white font-bold absolute -top-4 left-3">
                      {cartData?.length || 0}
                    </div>
                    <FiShoppingBag className="text-2xl" />
                  </Link>
                  <Link to="/cart">
                    <p className="font-semibold hover:text-[#2563eb] duration-300 cursor-pointer">
                      ${totalPrice}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default MainHeader;
