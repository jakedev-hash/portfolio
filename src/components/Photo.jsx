import React from "react";

import "./photo.css"; // We'll create this next

import gojoImage from "../assets/styles/images/gojo.jpeg"; // Adjust the path if necessary



const Photo = () => {

  return (

    <div className="photo-container">

      <img src={gojoImage} alt="Gojo" className="portfolio-photo" />

    </div>

  );

};



export default Photo;