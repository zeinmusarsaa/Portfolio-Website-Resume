// src/context/WindowContext.jsx
import React, { createContext, useContext, useState } from "react";

const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  // Initialize state from localStorage if it exists, otherwise default to 'normal'
  const [windowSize, setWindowSize] = useState(
    localStorage.getItem("windowSize") || "normal"
  );

  // Create a function to update both state and localStorage
  const updateWindowSize = (newSize) => {
    setWindowSize(newSize);
    localStorage.setItem("windowSize", newSize);
  };

  return (
    <WindowContext.Provider value={{ windowSize, updateWindowSize }}>
      {children}
    </WindowContext.Provider>
  );
};

export const useWindowState = () => useContext(WindowContext);
