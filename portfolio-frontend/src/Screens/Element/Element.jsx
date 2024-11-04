// src/Screens/Element/Element.jsx
import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Zein } from "../../components/Zein/zein";
import "./style.css";

const Element = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/landing"); // Navigate to the desktop screen with PowerShell animation
  };

  return (
    <div className="element">
      <div className="div">
        <div className="frame">
          <Zein />
          <motion.div
            className="text-wrapper-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Mosarsaa
          </motion.div>
        </div>

        <motion.div
          className="text-wrapper-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button className="button" onClick={handleButtonClick}>
            <div className="sign-up">Get Started</div>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Element; // Use default export here
