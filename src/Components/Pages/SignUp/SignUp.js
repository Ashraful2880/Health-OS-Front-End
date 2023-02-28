import axios from "axios";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import logo from "../../../Assets/Images/logo.png";
import { ImPhone } from "react-icons/im";
import { FaLock, FaUser } from "react-icons/fa";
import { HiFingerPrint } from "react-icons/hi";
import { MdAlternateEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
  const alert = useAlert();
  const navigate = useNavigate();
  // Define state variables for phone, password, and token
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [warningMessage, setWarningMessage] = useState("");

  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value;
    const phoneNumberPattern = /^01[3-9]\d{8}$/; // regular expression pattern for Bangladeshi phone numbers
    setPhone(inputPhoneNumber);

    if (!phoneNumberPattern.test(inputPhoneNumber)) {
      setWarningMessage("Please Enter a valid BD phone number.");
    } else {
      setWarningMessage("");
    }
  };
  // Set The Length Of BD Number
  const handleKeyPress = (event) => {
    const value = event.target.value;
    if (value.length >= 11) {
      event.preventDefault();
    }
  };

  // Handle signup form submission
  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      // Make a POST request to the /signup endpoint
      const response = await axios.post(
        `${process.env.REACT_APP_API_PATH}/signup`,
        {
          name,
          username,
          email,
          phone,
          password,
        }
      );
      // Clear the form and display a success message
      setName("");
      setUserName("");
      setEmail("");
      setPhone("");
      setPassword("");
      alert.success("Signup successful! Please log in.");
      navigate("/home");
    } catch (err) {
      // Display an error message
      alert.error(err.response.data.message);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto w-full lg:flex md:flex block border rounded-md mt-12">
        {/* Bannar Area */}
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-[#2563eb] to-purple-700 justify-center items-center hidden">
          <div>
            <div className="bg-white w-24 h-24 mx-auto rounded-full p-2 mb-5 ">
              <img src={logo} alt="main Logo" className="w-20 mx-auto mb-5 " />
            </div>
            <h1 className="text-white font-bold text-4xl">Health OS</h1>
            <p className="text-white mt-1">The Most Popular Health Company</p>
            <button
              type="submit"
              className="block w-36 mx-auto bg-white hover:bg-transparent text-[#2563eb] hover:text-white border border-transparent hover:border-white mt-4 py-2 rounded-md font-bold mb-2 duration-300"
            >
              Read More
            </button>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8 trans-animation"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8 trans-animation"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8 trans-animation"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8 trans-animation"></div>
        </div>
        {/* Form Area */}
        <div className="flex lg:w-1/2 md:w-1/2 w-full justify-center py-10 items-center bg-white">
          <form className="bg-white lg:w-2/3 w-full" onSubmit={handleSignup}>
            <h1 className="text-gray-800 font-bold text-3xl mb-1">
              Please <span className="text-[#2563eb]">Register</span>
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              to Purchase Product
            </p>

            <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
              <FaUser className="text-[#2563eb]" />
              <input
                className="pl-2 outline-none border-none"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Name"
              />
            </div>

            <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
              <HiFingerPrint className="text-[#2563eb]" />
              <input
                className="pl-2 outline-none border-none"
                type="text"
                value={username}
                onChange={(event) => setUserName(event.target.value)}
                placeholder="Username"
              />
            </div>

            <div className="mb-4">
              <div className="flex items-center border-2 py-2 px-3 rounded-md">
                <ImPhone className="text-[#2563eb]" />
                <input
                  className="pl-2 outline-none border-none"
                  type="number"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={handlePhoneNumberChange}
                  // onChange={(event) => setPhone(event.target.value)}
                  required
                  onKeyPress={handleKeyPress}
                />
              </div>
              <p className="text-red-500">{phone && warningMessage}</p>
            </div>

            <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
              <MdAlternateEmail className="text-[#2563eb]" />
              <input
                className="pl-2 outline-none border-none"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="flex items-center border-2 py-2 px-3 rounded-md mb-5">
              <FaLock className="text-[#2563eb]" />
              <input
                className="pl-2 outline-none border-none"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="block w-full bg-[#2563eb] hover:bg-white mt-4 py-2 rounded-2xl text-white hover:text-[#2563eb] font-semibold mb-3 border border-[#2563eb] duration-300"
            >
              Register
            </button>

            <span className="text-md ml-2 hover:text-[#2563eb] cursor-pointer duration-300">
              Allready Registered?
            </span>
            <div className="mt-2">
              <Link to="/login">
                <span className="text-md ml-2 font-semibold text-[#2563eb] cursor-pointer underline duration-300">
                  Please Login
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
