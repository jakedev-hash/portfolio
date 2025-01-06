import React from 'react';

import './photo3.css'; // Importing the CSS stylesheet

import linreg from '../assets/styles/images/linear_regression2.jpeg'; // Correct image path



const Photo3 = () => {

  return (

    <div className="photo3-container">

      <img src={linreg} alt="Linear Regression Model" className="photo3-image" />

    </div>

  );

};



export default Photo3;