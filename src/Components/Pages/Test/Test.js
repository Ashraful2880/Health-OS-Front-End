import React, { useState } from "react";

const Test = () => {
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    const isValidPhone = /^01[3-9]\d{8}$/.test(value); // Regular expression for Bangladeshi phone number

    setPhone(value);
    setIsValid(isValidPhone);
  };

  return (
    <div className="container mx-auto min-h-screen">
      <div className="mt-10">
        <label htmlFor="phone">Enter your phone number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={handleChange}
          className="border-2 border-[#2563eb]"
        />
        {isValid ? (
          <p style={{ color: "green" }}>Valid phone number</p>
        ) : (
          <p style={{ color: "red" }}>Invalid phone number</p>
        )}
      </div>
    </div>
  );
};

export default Test;
