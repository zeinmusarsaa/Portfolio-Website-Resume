// src/index.jsx
import React from "react";
import ReactDOMClient from "react-dom/client";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { WindowProvider } from "./context/WindowContext";
import "./global.css";
import { PowerShellAnimation } from "./Screens/Element/DesktopScreen";
import Element from "./Screens/Element/Element";
import Landing from "./Screens/Landing/Landing";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);

root.render(
  <Router>
    <WindowProvider>
      <Routes>
        {/* Make PowerShellAnimation the default route */}
        <Route path="/" element={<PowerShellAnimation />} />
        <Route path="/element" element={<Element />} />
        <Route path="/landing" element={<Landing />} />
        {/* Catch all other routes and redirect to PowerShellAnimation */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </WindowProvider>
  </Router>
);
