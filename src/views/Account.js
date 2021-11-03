// React
import React from "react";

// Components
import AccountNavigation from "../components/account/accountNavigation/AccountNavigation";
import RewardsTile from "../components/account/rewardsTile/RewardsTile";

const Account = () => {
  return (
    <div className="wrapper">
      <div className="account-content">
        <AccountNavigation />
        <div className="account-tile-content">
          <RewardsTile />
        </div>
      </div>
    </div>
  );
};

export default Account;
