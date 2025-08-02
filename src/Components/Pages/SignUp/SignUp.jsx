import { useState } from "react";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import { ImPhone } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { HiFingerPrint } from "react-icons/hi";
import { FaLock, FaUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import logo from "../../../Assets/Images/logo.png";
import CustomInput from "../../Shared/Input/CustomInput";
import SharedButton from "../../Shared/UI/SharedButton/SharedButton";
import { useSignupMutation } from "../../../features/authSlice/authSlice";

const SignUp = () => {
  const alert = useAlert();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [signup, { isLoading }] = useSignupMutation();
  const [warningMessage, setWarningMessage] = useState("");

  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value;
    if (inputPhoneNumber.length > 11) {
      setWarningMessage("Phone number cannot exceed 11 digits.");
    } else if (inputPhoneNumber.length === 11) {
      setWarningMessage("");
      setPhone(inputPhoneNumber);
    } else {
      setWarningMessage("");
      setPhone(inputPhoneNumber);
    }
  };

  /*  const handleKeyPress = (event) => {
    const value = event.target.value;
    if (value.length >= 11) {
      event.preventDefault();
    }
  }; */

  // Handle signup form submission
  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await signup({ name, username, email, phone, password }).unwrap();
      setName("");
      setUserName("");
      setEmail("");
      setPhone("");
      setPassword("");
      alert.success("Signup successful! Please log in.");
      navigate("/home");
    } catch (err) {
      alert.error(err?.data?.message || err?.error || "Signup failed");
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

            <div className="mb-4">
              <CustomInput
                type="text"
                value={name}
                required={true}
                placeholder="Enter Your Name"
                icon={<FaUser className="text-[#2563eb]" />}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="mb-4">
              <CustomInput
                type="text"
                value={username}
                required={true}
                placeholder="User Name"
                icon={<HiFingerPrint className="text-[#2563eb]" />}
                onChange={(event) => setUserName(event.target.value)}
              />
            </div>

            <div className="mb-4">
              <div>
                <CustomInput
                  type="number"
                  value={phone}
                  required={true}
                  placeholder="Phone Number"
                  icon={<ImPhone className="text-[#2563eb]" />}
                  onChange={handlePhoneNumberChange}
                />
              </div>
              <p className="text-red-500">{phone && warningMessage}</p>
            </div>

            <div className="mb-4">
              <CustomInput
                type="email"
                value={email}
                required={true}
                placeholder="Email Address"
                icon={<MdAlternateEmail className="text-[#2563eb]" />}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="mb-5">
              <CustomInput
                type="password"
                value={password}
                required={true}
                placeholder="Email Address"
                icon={<FaLock className="text-[#2563eb]" />}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <SharedButton
              type="submit"
              width="w-full"
              title="Register"
              variant="primary"
              loading={isLoading}
              disabled={isLoading}
              loadingText="Registering..."
            />

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
