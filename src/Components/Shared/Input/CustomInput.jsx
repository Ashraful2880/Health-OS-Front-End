const CustomInput = ({
  max,
  type,
  icon,
  name,
  value,
  error,
  accept,
  onFocus,
  onChange,
  disabled,
  readOnly,
  isRequired,
  placeholder,
}) => {
  return (
    <div className="w-full">
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 mt-4 left-0 pl-3 flex items-center pointer-events-none text-gray-700">
            {icon}
          </div>
        )}
        {type === "textarea" ? (
          <textarea
            rows={3}
            name={name}
            value={value || ""}
            readOnly={readOnly}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
            className={`${
              icon && "pl-7"
            } text-sm ${
              disabled 
                ? "text-gray-500" 
                : "text-gray-900"
            } font-normal ${
              disabled 
                ? "placeholder:text-gray-400" 
                : "placeholder:text-gray-700"
            } w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              disabled 
                ? "bg-gray-100" 
                : ""
            } ${
              error
                ? "border-red-500"
                : disabled 
                ? "border-gray-200"
                : "border-gray-300"
            } ${disabled ? "cursor-not-allowed opacity-60" : ""}`}
          />
        ) : type === "file" ? (
          <input
            name={name}
            type="file"
            accept={accept}
            onChange={onChange}
            disabled={disabled}
            required={isRequired}
            className={`text-sm ${
              disabled 
                ? "text-gray-500" 
                : "text-gray-900"
            } font-normal w-full pr-3 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              disabled 
                ? "bg-gray-100" 
                : ""
            } file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold ${
              disabled 
                ? "file:bg-gray-200 file:text-gray-500"
                : "file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            } ${
              error
                ? "border-red-500"
                : disabled 
                ? "border-gray-200"
                : "border-gray-300"
            } ${disabled ? "cursor-not-allowed opacity-60" : ""} ${icon ? "pl-8" : "pl-4"}`}
          />
        ) : (
          <input
            max={max}
            name={name}
            type={type}
            value={value || ""}
            onFocus={onFocus}
            onChange={onChange}
            disabled={disabled}
            readOnly={readOnly}
            required={isRequired}
            placeholder={placeholder}
            className={`${
              icon && "pl-8"
            } text-sm ${
              disabled 
                ? "text-gray-500" 
                : "text-gray-900"
            } font-normal ${
              disabled 
                ? "placeholder:text-gray-400" 
                : "placeholder:text-gray-700"
            } w-full pr-3 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              disabled 
                ? "bg-gray-100" 
                : "0"
            } ${
              error
                ? "border-red-500"
                : disabled 
                ? "border-gray-200"
                : "border-gray-300"
            } ${disabled ? "cursor-not-allowed opacity-60" : ""} ${icon ? "pl-10" : "pl-4"}`}
          />
        )}
      </div>
    </div>
  );
};

export default CustomInput;
