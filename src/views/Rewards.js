// React
import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";


// Components
import AccountNavigation from "../components/account/accountNavigation/AccountNavigation";

const Rewards = () => {
  return (
    <div className="wrapper">
      <div className="account-content">
        <div className="account-nav-content">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Rewards</Breadcrumb.Item>
          </Breadcrumb>
          <AccountNavigation />
        </div>
        <div className="account-tile-content">
          <h2>Rewards</h2>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
