// React
import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

// Components
import AccountNavigation from "../components/account/accountNavigation/AccountNavigation";

const Account = () => {
  return (
    <>
      <div className="account-content">
        <div className="account-nav-content">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Account</Breadcrumb.Item>
          </Breadcrumb>
          <AccountNavigation />
        </div>
        <div className="account-tile-content">
          <h2>Account</h2>
        </div>
      </div>
    </>
  );
};

export default Account;
