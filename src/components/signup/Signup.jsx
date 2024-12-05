import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // For navigation
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(""); // For validation error messages
  const navigate = useNavigate(); // React Router's navigation hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match");

      return;
    }

    if (password === confirmPassword) {
      navigate("/main")
    }
  
    setError(""); // Clear error if validation passes
    console.log("Form Submitted:", formData);

    // Navigate to the main page
    navigate("/main");
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setError(""); // Clear any error messages
  };

  return (
    <div className="background">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">NAME</label>
        <input
          name="name"
          value={formData.name}
          type="text"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">EMAIL</label>
        <input
          name="email"
          value={formData.email}
          type="email"
          onChange={handleChange}
        />
        <br />
      
        <label htmlFor="password">PASSWORD</label>
        <input
          name="password"
          value={formData.password}
          type="password"
          onChange={handleChange}
        />
        <br />
       
        <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
        <input
          name="confirmPassword"
          value={formData.confirmPassword}
          type="password"
          onChange={handleChange}
        />
       
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
        <h6>if you have already Account? <Link to={'/signin'}>
          SignIn
        </Link></h6>
      </form>
    </div>
  );
};

export default Signup;
