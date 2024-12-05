import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // For navigation
import "./SignIn.css";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider} from '../../firebase'// if the file is in src/firebase/


const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!password ) {
      setError("Password not typed");
      return;
    }

    try {
      // Create a new user with Firebase Authentication
      await createUserWithEmailAndPassword(auth, email, password);
      setError(""); // Clear any errors
      console.log("User signed up successfully");

      // Navigate to the main page
      navigate("/main");
    } catch (error) {
      console.error("Error during signup:", error.message);
      setError(error.message); // Display Firebase error messages
    }
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


  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      await setDoc(doc(db, "users", user.uid), {
        name: user.name,
        email: user.email,
      });
      console.log("User Info:", user);
     
      alert("Google Sign-In Successful!");
      navigate("/main");
    } catch (error) {
      console.error("Error during Google Sign-In:", error.message);
    }
  };
  


  return (
    <div className="background">
      <form onSubmit={handleSubmit} className="form">
        
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
       
       
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" onSubmit={handleSubmit}>Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
        <h6>if you don't have Account? <Link to={'/'}>
          SignIn
        </Link></h6>
      </form>

      <button onClick={handleGoogleSignIn} style={{ padding: "10px", margin: "10px" }}>
      Sign In with Google
    </button>
    </div>
  );
};

export default Signup;
