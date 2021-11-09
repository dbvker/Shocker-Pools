// React
import React from "react";
import { Link } from "react-router-dom";

//Import CSS
import "./WelcomeCard.css";

import video from "../../assets/floaty.mp4";

const WelcomeCard = () => {
  return (
    <div className="welcome_wrapper">
      <h1>Live Life Better</h1>
      <h2>Discover how we can help you.</h2>
      <p>
        <Link to="/services/"><button>Our Services</button></Link>
      </p>
    </div>
  );
};

export default WelcomeCard;
