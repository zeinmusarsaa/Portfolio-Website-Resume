import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="chrome-content">
      <div className="page-container">
        {/* Chrome Window Header - Already provided by ChromeLayout */}
        <div className="page-header">
          <h1>Zein Mosarsaa</h1>
          <nav className="main-nav">
            <button onClick={() => navigate("/element")}>Home</button>
            <button onClick={() => navigate("/projects")}>Projects</button>
            <button onClick={() => navigate("/additional")}>Additional</button>
          </nav>
        </div>

        <main className="page-content">
          <section className="hero-section">
            <h2>Discover Amazing Features</h2>
            <div className="content-grid">
              <div className="feature-card">
                <h3>Professional Portfolio</h3>
                <p>Explore my latest projects and professional achievements</p>
              </div>
              <div className="feature-card">
                <h3>Technical Expertise</h3>
                <p>View my skills in modern web development technologies</p>
              </div>
              <div className="feature-card">
                <h3>Contact</h3>
                <p>Get in touch for collaborations and opportunities</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Landing;
