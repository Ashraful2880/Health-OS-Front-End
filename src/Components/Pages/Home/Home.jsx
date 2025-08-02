import Bannar from "./Bannar/Bannar";
import PromoLast from "./PromoLast/PromoLast";
import NewsLater from "./NewsLater/NewsLater";
import NewArrival from "./Products/NewArrival";
import BestSelling from "./Products/BestSelling";
import PromoOffer from "./PromoOffer/PromoOffer";
import TopTrending from "./Products/TopTrending";
import PromoBannar from "./PromoBannar/PromoBannar";
import Testimonial from "./Testimonial/Testimonial";
import DealOfTheDay from "./DealOfTheDay/DealOfTheDay";
import FeaturedProducts from "./Products/FeaturedProducts";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import CategoryFeature from "./CategoryFeature/CategoryFeature";

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
      <BestSelling />
      <PromoBannar />
      <NewArrival />
      <PromoLast />
      <Testimonial />
      <NewsLater />
    </>
  );
};

export default Home;
