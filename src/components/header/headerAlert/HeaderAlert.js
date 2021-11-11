// React
import React, { useState } from "react";

//Import CSS
import "./HeaderAlert.css";

const HeaderAlert = () => {
  const [alertIsOpen, setAlertIsOpen] = useState(true);

  return (
    <div
      className={
        alertIsOpen ? "header-alert-wrapper" : "header-alert-wrapper-close"
      }
    >
      <div className="header-alert-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
          lorem sollicitudin libero, ut sed nec quisque.
        </p>
        <span onClick={() => setAlertIsOpen(!alertIsOpen)}>X</span>
      </div>
    </div>
  );
};

export default HeaderAlert;
