import React from "react";
import Bannar from "./Bannar/Bannar";
import BestSellar from "./BestSellar/BestSellar";
import CategoryFeature from "./CategoryFeature/CategoryFeature";
import DealOfTheDay from "./DealOfTheDay/DealOfTheDay";
import FeaturedProducts from "./FeaturedProducts/Featured Products";
import NewArrival from "./NewArrival/NewArrival";
import NewsLater from "./NewsLater/NewsLater";
import PromoBannar from "./PromoBannar/PromoBannar";
import PromoLast from "./PromoLast/PromoLast";
import PromoOffer from "./PromoOffer/PromoOffer";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import Testimonial from "./Testimonial/Testimonial";
import TopTrending from "./TopTrending/TopTrending";

const Home = () => {
  return (
    <>
      <Bannar />
      <ShopByCategory />
      <CategoryFeature />
      <FeaturedProducts />
      <DealOfTheDay />
      <TopTrending />
      <PromoOffer />
      <BestSellar />
      <PromoBannar />
      <NewArrival />
      <PromoLast />
      <Testimonial />
      <NewsLater />
    </>
  );
};

export default Home;
