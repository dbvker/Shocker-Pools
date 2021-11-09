import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

const Register = () => {
  return (
    <>
      <div className="auth-container">
        <div className="auth-info">Info</div>
        <div className="auth-form">
          <h2>Join Shocker Pools</h2>
          <form>
            <input
              type="text"
              className="auth-form-input"
              placeholder="First Name"
            />
            <input
              type="text"
              className="auth-form-input"
              placeholder="Last Name"
            />
            <input
              type="email"
              className="auth-form-input"
              placeholder="Email Address"
            />
            <input
              type="password"
              className="auth-form-input"
              placeholder="Password"
            />
            <p>
              <input type="checkbox" className="auth-form-checkbox" /> I agree
              to the <u><Link to="">Terms & Conditions</Link></u>
            </p>
            <p>
              <input type="checkbox" className="auth-form-checkbox" /> I want to
              receive Shocker Pools newsletter
            </p>
            <Link to="/dashboard/"><button>Join Shocker Pools</button></Link>
            <h3>
              Already a member? <span><Link to="/sign-in/">Sign in</Link></span>
            </h3>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
