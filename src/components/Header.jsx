import React from "react";
import reactLogo from "../assets/styles/images/react-logo.svg"; // Adjust the path if needed
import "./header.css";

const Header = () => {
    return (
      <header className="header">
        <img
          src={reactLogo}
          alt="React Logo"
          className="react-logo"
          style={{
            height: "65px",
            display: "block",
          }}
        />
        
      </header>
    );
  };
  
  export default Header;