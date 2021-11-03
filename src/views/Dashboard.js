// React
import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb'

// Components
import AccountNavigation from "../components/account/accountNavigation/AccountNavigation";
import RewardsTile from "../components/account/rewardsTile/RewardsTile";

const Dashboard = () => {
  return (
    <div className="wrapper">
      <div className="account-content">
        <div className="account-nav-content">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <AccountNavigation />
        </div>

        <div className="account-tile-content">
          <h2>Dashboard</h2>
          <RewardsTile />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
