
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

const Main = () => {
  const navigate = useNavigate();

  const [name,setName] = useState("username");

  const handleLogout = () => {
    // Perform logout logic if needed (e.g., clear tokens, update state)
    navigate("/");
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("main page", user);
      setName(user.email);

    } else {
      console.log("main page error");
    }
  });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div className="Logout">
        <h1>{name}</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <h1>Welcome to the Main Page!</h1>
      <p>You have successfully logged in.</p>
    </div>
  );
};

export default Main;
