// React
import React from "react";
//CSS
import "./ServicesCard.css";
//Components
import ServicesItem from "./servicesItem/ServicesItem";
//Assets
import one from "../../assets/pool.jpeg";


const ServicesCard = () => {
  return (
    <>
      <h1>Services</h1>
      <div className="wrapper">
        <ServicesItem icon={one} name="1" description="We deliver anywhere in the United States" />
        <ServicesItem icon={one} name="2" description="We offer amazing financing options to qualified buyers" />
        <ServicesItem icon={one} name="3" description="Purchase your hot tub direct, without additional fees" />
        <ServicesItem icon={one} name="4" description="We use satellite imaging to help you find the perfect spa" />
      </div>
    </>
  );
};

export default ServicesCard;
