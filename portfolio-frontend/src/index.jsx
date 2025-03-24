import React from "react";
import ReactDOMClient from "react-dom/client";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Footer from "./components/Footer/Footer"; // Import Footer
import ChromeLayout from "./components/Layout/ChromeLayout";
import { WindowProvider } from "./context/WindowContext";
import Additional from "./Screens/Additional/Additional";
import DigitalResume from "./Screens/DigitalResume/DigitalResume";
import { PowerShellAnimation } from "./Screens/Element/DesktopScreen";
import Element from "./Screens/Element/Element";
import Landing from "./Screens/Landing/Landing";
import PrivacyPolicy from "./Screens/Privacy Policy/PrivacyPolicy";
import Projects from "./Screens/Projects/Projects";
import "./styles/global.css";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <WindowProvider>
      {/* Add Navbar at the top */}

      <Routes>
        {/* PowerShell Animation is the entry point */}
        <Route path="/" element={<PowerShellAnimation />} />
        {/* ChromeLayout wraps all pages that should be inside the Chrome window */}
        <Route element={<ChromeLayout />}>
          <Route path="/landing" element={<Landing />} />
          <Route path="/element" element={<Element />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/additional" element={<Additional />} />
          <Route path="/DigitalResume" element={<DigitalResume />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Route>
        {/* Redirect any unmatched routes to "/" */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* Add Footer at the bottom */}
      <Footer />
    </WindowProvider>
  </Router>
);
