import React, {useRef } from "react";
import { Link, useNavigate } from "react-router-dom"; // For navigation
import "./SignIn.css";
import {signInWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import {auth} from "../../firebase";



const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState(""); // For validation error messages
//   const navigate = useNavigate(); // React Router's navigation hook

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { email, password } = formData;

//     if (!password ) {
//       setError("Password not typed");
//       return;
//     }

//     try {
//       // Create a new user with Firebase Authentication
//       await createUserWithEmailAndPassword(auth, email, password);
//       setError(""); // Clear any errors
//       console.log("User signed up successfully");

//       // Navigate to the main page
//       navigate("/main");
//     } catch (error) {
//       console.error("Error during signup:", error.message);
//       setError(error.message); // Display Firebase error messages
//     }
//   };

  


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


 
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const handleReset = (e) => {
      e.preventDefault();
      emailRef.current.value = "";
      passwordRef.current.value = "";
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
     
      await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('user',user)
        navigate("/main");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error',error)
        console.log(errorCode);
        console.log(errorMessage);
        alert("invalid-credential")
      });
     
  
      
  
    };
  


  return (
    <div className="background">
      <form onSubmit={handleSubmit} className="form">
        
        <label htmlFor="email">EMAIL</label>
        <input
          name="email"
          type="email"
          placeholder="email"
          ref={emailRef}
         
        />
        <br />
      
        <label htmlFor="password">PASSWORD</label>
        <input
          name="password"
          type="password"
          placeholder="password"
          ref={passwordRef}
        />
        <br />
       
       
        <br />
        {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
        <button type="submit" onSubmit={handleSubmit}>Submit</button>
        <button type="button" onClick={handleReset} >
          Reset
        </button>
        <h6>if you don't have Account? <Link to={'/'}>
          Signup
        </Link></h6>
      </form>

      <button onClick={handleGoogleSignIn} style={{ padding: "10px", margin: "10px" }}>
      Sign In with Google
    </button>
    </div>
  );
};

export default Signup;
