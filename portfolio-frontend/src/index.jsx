import React from "react";
import ReactDOMClient from "react-dom/client";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./components/Footer/Footer"; // Import Footer
import NavBar from "./components/Navigation/NavBar"; // Import NavBar
import { WindowProvider } from "./context/WindowContext";
import Additional from "./Screens/Additional/Additional";
import DigitalResume from "./Screens/DigitalResume/DigitalResume";
import { PowerShellAnimation } from "./Screens/Element/DesktopScreen";
import Element from "./Screens/Element/Element";
import Landing from "./Screens/Landing/Landing";
import PrivacyPolicy from "./Screens/Privacy Policy/PrivacyPolicy";
import Projects from "./Screens/Projects/Projects";
import "./styles/global.css";

// Wrapper component to conditionally render NavBar
const AppLayout = ({ children }) => {
  const location = useLocation();

  // Conditionally exclude NavBar on specific routes
  const excludedRoutes = ["/"]; // Add any other routes where NavBar should not appear

  return (
    <>
      {/* Render NavBar only if the current route is NOT in excludedRoutes */}
      {!excludedRoutes.includes(location.pathname) && <NavBar />}
      <div className="main-content">{children}</div>
      <Footer />
    </>
  );
};

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <WindowProvider>
      <AppLayout>
        <Routes>
          {/* PowerShell Animation is the entry point */}
          <Route path="/" element={<PowerShellAnimation />} />
          {/* Other routes */}
          <Route path="/landing" element={<Landing />} />
          <Route path="/element" element={<Element />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/additional" element={<Additional />} />
          <Route path="/DigitalResume" element={<DigitalResume />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          {/* Redirect any unmatched routes to "/" */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppLayout>
    </WindowProvider>
  </Router>
);
