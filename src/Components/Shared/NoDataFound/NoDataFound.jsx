const defaultSvg = (
  <svg
    width="180"
    height="180"
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="90" cy="90" r="90" fill="#F3F4F6" />
    <rect x="40" y="110" width="100" height="20" rx="10" fill="#E5E7EB" />
    <rect x="60" y="60" width="60" height="40" rx="8" fill="#E5E7EB" />
    <rect x="75" y="75" width="30" height="10" rx="5" fill="#D1D5DB" />
    <circle cx="90" cy="90" r="5" fill="#9CA3AF" />
  </svg>
);

const NoDataFound = ({ message = "No Data Found!", image }) => {
  return (
    <div
      className="w-full h-[80vh] flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white rounded-lg animate-fadeIn"
      style={{ boxSizing: "border-box" }}
    >
      <div className="mb-6 mt-5 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt="No Data"
            loading="lazy"
            className="w-36 h-36 object-contain drop-shadow-md"
          />
        ) : (
          <div className="w-36 h-36 flex items-center justify-center">
            {defaultSvg}
          </div>
        )}
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-2 text-center">
        {message}
      </h2>
      <p className="text-gray-500 text-base sm:text-lg text-center max-w-md">
        Sorry, we couldn't find any data to display here. Please try again later
        or check your filters.
      </p>
    </div>
  );
};

export default NoDataFound;
