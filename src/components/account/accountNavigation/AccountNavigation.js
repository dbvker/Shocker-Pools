// React
import React from "react";
<<<<<<< HEAD
import { NavLink } from "react-router-dom";
=======
>>>>>>> 439edfc0b71c25e1759f89f2a5948fefbf42bf76

// CSS
import "./AccountNavigation.css";

const AccountNavigation = () => {
  return (
    <div className="account-nav-wrapper">
      <nav>
        <ul>
<<<<<<< HEAD
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
=======
          <li>Dashboard</li>
          <li>Account</li>
          <li>Rewards</li>
>>>>>>> 439edfc0b71c25e1759f89f2a5948fefbf42bf76
        </ul>
      </nav>
    </div>
  );
};

export default AccountNavigation;
