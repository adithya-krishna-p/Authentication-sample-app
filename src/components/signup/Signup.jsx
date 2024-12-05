import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // For navigation
import "./Signup.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

// const [formData, setFormData] = useState({
//   name: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// });

// const [error, setError] = useState(""); // For validation error messages
// const navigate = useNavigate(); // React Router's navigation hook

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setFormData((prevData) => ({
//     ...prevData,
//     [name]: value,
//   }));
// };

// const handleSubmit = (e) => {
//   e.preventDefault();

//   const { password, confirmPassword } = formData;

//   if (password !== confirmPassword) {
//     setError("Passwords do not match");

//     return;
//   }

//   if (password === confirmPassword) {
//     navigate("/main")
//   }

//   setError(""); // Clear error if validation passes
//   console.log("Form Submitted:", formData);

//   // Navigate to the main page
//   navigate("/main");
// };




const Signup = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const nameRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hi");
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }




    console.log('before email:' ,email,password);
      await createUserWithEmailAndPassword(auth, email, password) .then((userCredential)=> { 
        const user = userCredential.user
        console.log('user:',user);
        alert("Signup successful! Redirecting to login...");
        navigate("/main");
      }) .catch((error)=> {console.log(error)})




    // const handleReset = () => {
    //   setFormData({
    //     name: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    //   });
    //   setError(""); // Clear any error messages


  }

  return (
    <div className="background">
      <form className="form">
        <label htmlFor="name">NAME</label>
        <input
          name="name"
          ref={nameRef}
          type="text"

        />
        <br />
        <label htmlFor="email">EMAIL</label>
        <input
          name="email"
          ref={emailRef}
          type="email"

        />
        <br />

        <label htmlFor="password">PASSWORD</label>
        <input
          name="password"
          ref={passwordRef}
          type="password"

        />
        <br />

        <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
        <input
          name="confirmPassword"
          type="password"
          ref={confirmPasswordRef}

        />

        <br />
        {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
        <button type="submit" onClick={handleSubmit}>Submit</button>
        <button type="button" >
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
