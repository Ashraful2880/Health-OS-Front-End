import React from "react";
import Bannar from "./Bannar/Bannar";
import BestSellar from "./BestSellar/BestSellar";
import CategoryFeature from "./CategoryFeature/CategoryFeature";
import FeaturedProducts from "./FeaturedProducts/Featured Products";
import PromoBannar from "./PromoBannar/PromoBannar";
import PromoOffer from "./PromoOffer/PromoOffer";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import TopTrending from "./TopTrending/TopTrending";

const Home = () => {
  return (
    <>
      <Bannar />
      <ShopByCategory />
      <CategoryFeature />
      <FeaturedProducts />
      <PromoOffer />
      <TopTrending />
      <BestSellar />
      <PromoBannar />
    </>
  );
};

export default Home;
