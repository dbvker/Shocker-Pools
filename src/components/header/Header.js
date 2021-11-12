// React
import React, { useState } from "react";
import { Link } from "react-router-dom";

//CSS
import "./Header.css";

//Import Assets
import logo from "../../assets/logo.png";

//Import Components
import HeaderAlert from "./headerAlert/HeaderAlert";

const Header = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

  // const hamburgerMenuToggle = () => {
  //   setActive(!isActive);
  // };

  return (
    <>
      <HeaderAlert />
      <section className="header-container">
        <header>
          <div className="header-logo-wrapper">
            <Link to="/">
              <img
                className="header-logo"
                src={logo}
                alt="shocker pools in yellow text with blue waves to the left"
              />
            </Link>
          </div>
          <nav className="header-links-wrapper">
            <div className="header-page-links">
              <Link to="/">
                <span>Home</span>
              </Link>
            </div>
            <span className="header-spacer"></span>
            <div className="header-auth-links">
              <Link to="/sign-in/">
                <span>Log In</span>
              </Link>
              <Link to="/register/">
                <button className="header-auth-sign-up">Sign Up</button>
              </Link>
            </div>
            <div
              className="hamburger-menu-icon"
              onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </nav>
        </header>
      </section>

      {/* Popout Nav Menu */}
      <div
        className={
          sidebarIsOpen
            ? "poput-nav-menu-show popout-nav-menu"
            : "popout-nav-menu-show"
        }
      >
        <div className="popout-top" onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
          <div className="popout-close-button">
            <div className="popout-bar1"></div>
            <div className="popout-bar2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
