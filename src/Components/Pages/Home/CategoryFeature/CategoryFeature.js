import React from "react";
import { Link } from "react-router-dom";
import feature01 from "../../../../Assets/Images/CategoryFeature/Category-feature-1.jpg";
import feature02 from "../../../../Assets/Images/CategoryFeature/category-feature-2.jpg";

const CategoryFeature = () => {
  return (
    <div className="container mx-auto flex justify-center gap-x-6 items-center">
      <div className="overflow-hidden rounded-md">
        <Link to="/mask">
          <img
            src={feature01}
            alt="Feature_Image"
            className="rounded-md hover:scale-105 duration-300"
          />
        </Link>
      </div>
      <div className="overflow-hidden rounded-md">
        <Link to="/mask">
          <img
            src={feature02}
            alt="Feature_Image"
             className="rounded-md hover:scale-105 duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default CategoryFeature;
