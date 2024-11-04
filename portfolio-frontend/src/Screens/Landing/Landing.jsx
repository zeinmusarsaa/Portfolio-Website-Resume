// src/Screens/Landing/Landing.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import ChromeLayout from "../../components/Zein/Layout/ChromeLayout";
import "./style.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <ChromeLayout>
      <div className="landing">
        <div className="landing-content">
          <h1>Welcome to My Site</h1>
          {/* Add more content as needed */}
        </div>
      </div>
    </ChromeLayout>
  );
};

export default Landing;
