// src/components/NavBar/NavBar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();

  const handleDownloadResume = () => {
    // Replace with your resume URL
    const resumeUrl = "/path-to-your-resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "ZeinMosarsaa-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <button className="nav-link" onClick={() => navigate("/projects")}>
          Projects
        </button>
        <button className="nav-link" onClick={() => navigate("/additional")}>
          Additional
        </button>
        <button
          className="nav-link"
          onClick={() => navigate("/digital-resume")}
        >
          Digital Resume
        </button>
        <button
          className="nav-link"
          onClick={() => navigate("/privacy-policy")}
        >
          Privacy Policy
        </button>
        <button className="download-button" onClick={handleDownloadResume}>
          Resume
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
