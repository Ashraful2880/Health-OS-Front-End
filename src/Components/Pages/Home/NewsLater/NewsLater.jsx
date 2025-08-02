import CustomInput from "../../../Shared/Input/CustomInput";
import newslater from "../../../../Assets/Images/Others/newslater.jpg";
import SharedButton from "../../../Shared/UI/SharedButton/SharedButton";

const NewsLater = () => {
  return (
    <div className="relative overflow-hidden">
      <img src={newslater} alt="Newslater" className="w-full" />
      <div className="flex flex-col w-full items-start absolute left-32 top-24">
        <h2 className="text-4xl font-bold mb-8">
          Subscribe Our <span className="text-[#2563eb]">Newslater</span>
        </h2>
        <div className="flex">
          <CustomInput type="text" placeholder="Your Email" />
          <SharedButton type="submit" title="Subscribe" variant="primary" />
        </div>
      </div>
    </div>
  );
};

export default NewsLater;
