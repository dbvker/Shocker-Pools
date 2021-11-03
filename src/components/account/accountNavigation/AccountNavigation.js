// React
import React from "react";

// CSS
import "./AccountNavigation.css";

const AccountNavigation = () => {
  return (
    <div className="account-nav-wrapper">
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Account</li>
          <li>Rewards</li>
        </ul>
      </nav>
    </div>
  );
};

export default AccountNavigation;
