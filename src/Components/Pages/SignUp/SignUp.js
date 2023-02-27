import axios from "axios";
import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";

const SignUp = () => {
  const alert = useAlert();
  // Define state variables for phone, password, and token
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  // Handle signup form submission
  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      // Make a POST request to the /signup endpoint
      const response = await axios.post("http://localhost:5000/signup", {
        phone,
        password,
      });
      // Clear the form and display a success message
      setPhone("");
      setPassword("");
      alert.success("Signup successful! Please log in.");
    } catch (err) {
      alert.error(err);
      // Display an error message
      alert.error(err.response.data.message);
    }
  };

  return (
    <div className="min-h-screen">
      <div>
        <h1>Signup</h1>
        <form onSubmit={handleSignup}>
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
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
