import React from "react";
import ReactDOMClient from "react-dom/client";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import ChromeLayout from "./components/Layout/ChromeLayout";
import { WindowProvider } from "./context/WindowContext";
import Additional from "./Screens/Additional/Additional";
import { PowerShellAnimation } from "./Screens/Element/DesktopScreen";
import Element from "./Screens/Element/Element";
import Landing from "./Screens/Landing/Landing";
import Projects from "./Screens/Projects/Projects";
import "./styles/global.css";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <WindowProvider>
      <Routes>
        <Route path="/" element={<PowerShellAnimation />} />
        <Route element={<ChromeLayout />}>
          <Route path="/landing" element={<Landing />} />
          <Route path="/element" element={<Element />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/additional" element={<Additional />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </WindowProvider>
  </Router>
);
