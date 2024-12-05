import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic if needed (e.g., clear tokens, update state)
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div className="Logout">
        <h1>name</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <h1>Welcome to the Main Page!</h1>
      <p>You have successfully logged in.</p>
    </div>
  );
};

export default Main;
