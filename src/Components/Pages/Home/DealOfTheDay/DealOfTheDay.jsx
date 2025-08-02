import { Link } from "react-router-dom";
import DealImage from "../../../../Assets/Images/Others/DealOfTheDay.png";

const DealOfTheDay = () => {
  return (
    <div>
      <Link to="/products/All">
        <img src={DealImage} alt="Promo Bannar" className="w-full" />
      </Link>
    </div>
  );
};
export default DealOfTheDay;
