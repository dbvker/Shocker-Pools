// React
import React from "react";
import { Link } from "react-router-dom";

//CSS
import "./Header.css";

//Import Assets
import logo from "../../assets/logo.png";

//Import Components
import HeaderAlert from "./headerAlert/HeaderAlert";

const Header = () => {
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
            <ul className="header-page-links">
              <Link to="/services/">
                <li>Services</li>
              </Link>
              <Link to="/pools/">
                <li>Pools</li>
              </Link>
              <Link to="/hot-tubs/">
                <li>Hot Tubs</li>
              </Link>
              <Link to="/chemicals/">
                <li>Chemicals</li>
              </Link>
              <Link to="/furniture/">
                <li>Furniture</li>
              </Link>
              <Link to="/grills/">
                <li>Grills</li>
              </Link>
            </ul>
            <span className="header-spacer"></span>
            <ul className="header-auth-links">
              <Link to="/sign-in/">
                <li>Log In</li>
              </Link>
              <Link to="/register/">
                <button className="header-auth-sign-up">Sign Up</button>
              </Link>
            </ul>
          </nav>
        </header>
      </section>
    </>
  );
};

export default Header;
