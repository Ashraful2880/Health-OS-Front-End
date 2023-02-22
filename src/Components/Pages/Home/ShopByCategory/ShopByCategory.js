import React from "react";
import { Link } from "react-router-dom";
import LoadingScreen from "../../../Shared/LoadingScreen/LoadingScreen";

const ShopByCategory = () => {
  const productCategory = [
    {
      title: "All Products",
      link: "allProducts",
      product:
        "https://res.cloudinary.com/ashraful-islam/image/upload/v1677087564/Health-OS/Product%20Category/All_Products_oxdxab.png",
    },
    {
      title: "Medical Equip",
      link: "/medicalEquipment",
      product:
        "https://res.cloudinary.com/ashraful-islam/image/upload/v1677087444/Health-OS/Product%20Category/medical_equipments_s5oqap.png",
    },
    {
      title: "Medicine",
      link: "/medicine",
      product:
        "https://res.cloudinary.com/ashraful-islam/image/upload/v1677087446/Health-OS/Product%20Category/medicine_vz5k7b.png",
    },
    {
      title: "Emergency Kits",
      link: "emergencyKits",
      product:
        "https://res.cloudinary.com/ashraful-islam/image/upload/v1677087444/Health-OS/Product%20Category/emergencyKits_euxch7.png",
    },
    {
      title: "Mask Collection",
      link: "maskCollection",
      product:
        "https://res.cloudinary.com/ashraful-islam/image/upload/v1677087444/Health-OS/Product%20Category/mask_mmonki.png",
    },
    {
      title: "Gloves",
      link: "/gloves",
      product:
        "https://res.cloudinary.com/ashraful-islam/image/upload/v1677087445/Health-OS/Product%20Category/glaves_wrc0da.png",
    },
    {
      title: "Sanitizer",
      link: "/sanitizer",
      product:
        "https://res.cloudinary.com/ashraful-islam/image/upload/v1677087443/Health-OS/Product%20Category/sanitizer_t5gcyt.png",
    },
    {
      title: "Medical Items",
      link: "/medicalItems",
      product:
        "https://res.cloudinary.com/ashraful-islam/image/upload/v1677087444/Health-OS/Product%20Category/medicalItems_nybxcr.png",
    },
    {
      title: "Others",
      link: "/others",
      product:
        "https://res.cloudinary.com/ashraful-islam/image/upload/v1677087444/Health-OS/Product%20Category/others_bqx6bv.png",
    },
  ];
  return (
    <div className="container mx-auto mb-10">
      {/* Heading Title */}
      <div className="mt-10 mb-12 lg:text-left text-center">
        <h1 className="text-4xl font-bold">Shop By Category</h1>
        <p className="text-md text-gray-700">
          Visit our shop to see amazing products
        </p>
      </div>
      {/* Category */}
      {productCategory?.length > 0 ? (
        <div className="w-full grid lg:grid-cols-9 md:grid-cols-5 grid-cols-3 gap-5 place-content-center place-items-center lg:px-0 px-4">
          {productCategory?.map((singleProduct) => (
            <Link
              to={singleProduct?.link}
              key={singleProduct?._id}
              className="overflow-hidden"
            >
              <div className="border h-36 w-36 rounded-md hover:scale-110 duration-300">
                <img src={singleProduct?.product} className="" />
              </div>
              <h1 className="mt-2 mb-6 text-lg font-semibold">
                {singleProduct?.title}
              </h1>
            </Link>
          ))}
        </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default ShopByCategory;
