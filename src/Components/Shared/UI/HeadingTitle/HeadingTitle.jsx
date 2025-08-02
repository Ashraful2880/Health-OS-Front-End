
const HeadingTitle = ({title,subTitle,details}) => {
  return (
    <div className="text-left">
      <h1 className="text-4xl font-bold">
        {title}
        <span className="text-[#2563eb] ">{subTitle}</span>
      </h1>
      <p className="text-md text-gray-600">
        {details}
      </p>
    </div>
  );
};

export default HeadingTitle;
