import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"
// Import the App component
import App from "./App";

import { ThemeProvider } from "@material-tailwind/react";

// Use ReactDOM to render the App component to the root element
const root = createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>);