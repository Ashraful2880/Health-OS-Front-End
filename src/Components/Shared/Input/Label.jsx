const Label = ({ title, valueFor,isRequired }) => {
  return (
    <label
      htmlFor={valueFor}
      className="text-sm font-semibold text-gray-500 text-left"
    >
      {title} {isRequired && <span className="text-red-500">*</span>}
    </label>
  );
};

export default Label;
