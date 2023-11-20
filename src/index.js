import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.scss";
// import App from "./App.js";
import Login from "../src/components/Login"

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Login />
  </React.StrictMode>
);
