import React from "react";
import ReactDOMClient from "react-dom/client";
import "./global.css";
import { Element } from "./Screens/Element/Element";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Element />);
