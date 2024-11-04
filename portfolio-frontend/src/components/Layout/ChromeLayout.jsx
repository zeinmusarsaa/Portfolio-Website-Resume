// src/components/Zein/Layout/ChromeLayout.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useWindowState } from "../../context/WindowContext";
import Footer from "../Footer/Footer";
import NavBar from "../Navigation/NavBar";
import "./ChromeLayout.css";

const ChromeLayout = ({ children }) => {
  const navigate = useNavigate();
  const { windowSize, updateWindowSize } = useWindowState();

  const handleControls = (action) => {
    switch (action) {
      case "close":
        navigate("/");
        break;
      case "minimize":
        updateWindowSize("minimized");
        break;
      case "maximize":
        updateWindowSize(windowSize === "fullscreen" ? "normal" : "fullscreen");
        break;
      default:
        break;
    }
  };

  return (
    <div className="desktop-screen">
      <div className={`chrome-window ${windowSize}`}>
        <div className="chrome-header">
          <div className="mac-controls">
            <button
              className="red"
              onClick={() => handleControls("close")}
            ></button>
            <button
              className="yellow"
              onClick={() => handleControls("minimize")}
            ></button>
            <button
              className="green"
              onClick={() => handleControls("maximize")}
            ></button>
          </div>
          <div className="chrome-title">Google Chrome</div>
        </div>
        <div className="chrome-body">
          <NavBar />
          <div className="content">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ChromeLayout;
