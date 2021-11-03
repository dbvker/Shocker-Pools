// React
import React from "react";

//Import CSS
import "./ServicesItem.css";

const ServicesItem = (props) => {
  return (
    <div className="item_container">
      <div className="item_container_left">
      </div>
      <div className="item_container_right">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ServicesItem;
