import { Link } from "react-router-dom";
import promoImage1 from "../../../../Assets/Images/Others/PromoOffer-1.png";
import promoImage2 from "../../../../Assets/Images/Others/PromoOffer-2.png";

const PromoOffer = () => {
  return (
    <div className="container mx-auto lg:px-0 px-4">
      <div className="lg:flex block justify-center gap-x-8 items-center">
        <div className="overflow-hidden rounded-md mg:my-0 my-2">
          <Link to="/Shipping">
            <img
              src={promoImage1}
              alt="Promo_Image"
              className="rounded-md hover:scale-105 duration-300"
            />
          </Link>
        </div>
        <div className="overflow-hidden rounded-md lg:my-0 my-2">
          <Link to="/Supportk">
            <img
              src={promoImage2}
              alt="Promo_Image"
              className="rounded-md hover:scale-105 duration-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromoOffer;
