// src/Screens/Landing/Landing.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import ChromeLayout from "../../components/Layout/ChromeLayout";
import { WindowProvider } from "../../context/WindowContext";
import "./style.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <WindowProvider>
      <ChromeLayout>
        <div className="landing">
          <h1>Welcome to My Site</h1>
          {/* Add more content as needed */}
        </div>
      </ChromeLayout>
    </WindowProvider>
  );
};

export default Landing;
