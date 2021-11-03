// React
import React from "react";
import { NavLink } from "react-router-dom";

// CSS
import "./AccountNavigation.css";

const AccountNavigation = () => {
  return (
    <div className="account-nav-wrapper">
      <nav>
        <ul>
          <NavLink
            to="/dashboard/"
            className="account-nav-link"
            activeClassName="account-nav-link--active"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/account/"
            className="account-nav-link"
            activeClassName="account-nav-link--active"
          >
            Account
          </NavLink>
          <NavLink
            to="/rewards/"
            className="account-nav-link"
            activeClassName="account-nav-link--active"
          >
            Rewards
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default AccountNavigation;
