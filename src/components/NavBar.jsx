import React from 'react';
import './navbar.css';

const NavBar = () => {

  const handleScroll = (id) => {

    const section = document.getElementById(id);

    if (section) {

      section.scrollIntoView({ behavior: "smooth", block: "start" });

    }

  };



  return (

    <div className="navbar-container">

      <div className="navbar">

        <div className="nav-item" onClick={() => handleScroll("home")}>Home</div>

        <div className="nav-item" onClick={() => handleScroll("about")}>About Me</div>

        <div className="nav-item" onClick={() => handleScroll("projects")}>Projects</div>

        <div className="nav-item" onClick={() => handleScroll("contact")}>Contact</div>

      </div>

    </div>

  );

};



export default NavBar;