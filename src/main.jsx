import React from "react";
import ReactDOM from "react-dom";
import App from "./app"; // Ensure this matches your App file location
import "./assets/styles/global.css"; // Import global styles if you added them

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);