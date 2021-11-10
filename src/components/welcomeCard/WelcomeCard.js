// React
import React from "react";
import { Link } from "react-router-dom";

//Import CSS
import "./WelcomeCard.css";

const WelcomeCard = () => {
  return (
    <section className="welcome-container">
      <div className="welcome-container-left">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <h1>Enjoy your pool this summer. Let us do the work.</h1>
        <h3>
          Our team offers the highest quality pool care so you can enjoy your
          summer without having to worry about your pool once.
        </h3>
        <button>Get your first cleaning free</button>
        <span>
          <Link to="/services/">Our Services</Link>
        </span>
      </div>
      <div className="welcome-container-right">
        <div className="circle3"></div>
        <div className="circle4"></div>
        <div className="welcome-container-right-image"></div>
      </div>
    </section>
  );
};

export default WelcomeCard;
