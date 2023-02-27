import axios from "axios";
import React from "react";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

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
      const response = await axios.post("http://localhost:5000/login", {
        phone,
        password,
      });
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
    <div className="container mx-auto min-h-screen">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Phone:
          <input
            type="text"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="border"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="border"
          />
        </label>
        <br />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
