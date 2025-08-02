import { useState } from "react";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Label from "../../Shared/Input/Label";
import { useNavigate } from "react-router-dom";
import logo from "../../../Assets/Images/logo.png";
import CustomInput from "../../Shared/Input/CustomInput";
import { setUser } from "../../../features/authSlice/userSlice";
import SharedButton from "../../Shared/UI/SharedButton/SharedButton";
import { useLoginMutation } from "../../../features/authSlice/authSlice";

const Login = () => {
  const alert = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const data = await login({ phone, password }).unwrap();
      // Assuming data = { token, name, role, email, phone }
      localStorage.setItem("token", JSON.stringify(data?.token));
      dispatch(
        setUser({
          name: data.name,
          role: data.role,
          email: data.email,
          phone: data.phone,
        })
      );
      setPhone("");
      setPassword("");
      alert.success("Login Successful");
      navigate("/home");
    } catch (err) {
      alert.error(err?.data?.message || err?.error || "Login failed");
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
                <Label
                  valueFor="email"
                  isRequired={true}
                  title="Phone Number"
                />
                <CustomInput
                  type="number"
                  value={phone}
                  required={true}
                  placeholder="Enter Phone Number"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <Label
                    title="Password"
                    isRequired={true}
                    valueFor="password"
                  />
                </div>
                <CustomInput
                  type="password"
                  value={password}
                  required={true}
                  placeholder="Enter Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                />
                <Label
                  valueFor="remember"
                  isRequired={false}
                  title="Remember Me"
                />
              </div>
              <div className="pb-6">
                <SharedButton
                  type="submit"
                  width="w-full"
                  title="Log in"
                  variant="primary"
                  loading={isLoading}
                  disabled={isLoading}
                  loadingText="Logging in..."
                />
              </div>
              <div className="flex flex-col items-center justify-center mt-10 text-center">
                <span>Don't have an account?</span>
                <Link to="/signup">
                  <p className="underline text-[#2563eb]">Get Started!</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
