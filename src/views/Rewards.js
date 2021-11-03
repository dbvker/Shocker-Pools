// React
import React from "react";

// Components
import AccountNavigation from "../components/account/accountNavigation/AccountNavigation";

const Rewards = () => {
  return (
    <div className="wrapper">
      <div className="account-content">
        <AccountNavigation />
        <div className="account-tile-content">
            <h2>Rewards</h2>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
