import axios from "axios";
import React from "react";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../../Assets/Images/logo.png";

const Login = () => {
  const alert = useAlert();
  // Define state variables for phone, password, and token
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setToken] = React.useState("");
  const navigate = useNavigate();

  // Handle login form submission
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // Make a POST request to the /login endpoint
      const response = await axios.post(
        `${process.env.REACT_APP_API_PATH}/login`,
        {
          phone,
          password,
        }
      );
      // Set the token state variable
      setToken(response.data.token);
      localStorage.setItem("token", JSON.stringify(response?.data));
      // Clear the form
      setPhone("");
      setPassword("");
      alert.success("Login Successful");
      navigate("/home");
    } catch (err) {
      // Display an error message
      alert.error(err.response.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex items-start min-h-screen p-4 container mx-auto justify-center lg:pt-20 pt-10">
        <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
          <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <div className="my-3 text-4xl font-bold tracking-wider text-center">
              <div className="bg-white w-24 h-24 mx-auto rounded-full p-2 mb-5 ">
                <img
                  src={logo}
                  alt="main Logo"
                  className="w-20 mx-auto mb-5 "
                />
              </div>
            </div>
            <h1 className="text-white font-bold text-4xl">Health OS</h1>
            <p className="mt-6 font-normal text-center text-gray-200 md:mt-0">
              With the power of Health OS, you can focus for your digital
              products
            </p>

            <div className="flex items-center gap-x-2 cursor-pointer">
              <p className="text-sm text-center text-gray-200">Read our</p>
              <p className="underline text-sm">Terms &</p>
              <p className="underline text-sm">Conditions</p>
            </div>
          </div>
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">
              Account Login
            </h3>
            <form onSubmit={handleLogin} className="flex flex-col space-y-5">
              <div className="flex flex-col space-y-1">
                <label
                  for="email"
                  className="text-sm font-semibold text-gray-500 text-left"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  id="number"
                  placeholder="Enter Phone"
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    for="password"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                />
                <label
                  for="remember"
                  className="text-sm font-semibold text-gray-500"
                >
                  Remember me
                </label>
              </div>
              <div className="pb-6">
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                >
                  Log in
                </button>
              </div>
              <p className="flex flex-col items-center justify-center mt-10 text-center">
                <span>Don't have an account?</span>
                <Link to="/signup">
                  <p className="underline text-[#2563eb]">Get Started!</p>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
