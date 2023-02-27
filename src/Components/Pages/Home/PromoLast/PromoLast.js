import React from "react";
import { Link } from "react-router-dom";
import promo from "../../../../Assets/Images/Others/DealOfTheDay-3.jpg";

const PromoLast = () => {
  return (
    <div className="mt-4 mb-2">
      <Link to="/shopCategory/emergencyKits">
        <img src={promo} alt="Last Promo" />
      </Link>
    </div>
  );
};

export default PromoLast;
