import LoadingSpinner from "../../LoadingScreen/LoadingSpinner";

const SharedButton = ({
  type,
  icon,
  width,
  title,
  loading,
  disabled,
  loadingText,
  handleClick,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={`${width} ${disabled&& "cursor-not-allowed"} px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4`}
    >
      {loading ? (
        <div className="flex items-center justify-center gap-x-3">
          <LoadingSpinner />
          {loadingText || "Loading..."}
        </div>
      ) : (
        <>
          {icon}
          {title}
        </>
      )}
    </button>
  );
};

export default SharedButton;
