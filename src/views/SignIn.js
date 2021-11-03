import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

const SignIn = () => {
  return (
    <div className="wrapper">
      <div className="auth-container">
        <div className="auth-info">Info</div>
        <div className="auth-form">
          <h2>Sign In</h2>
          <form>
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
              <input type="checkbox" className="auth-form-checkbox" /> Remember me next time
            </p>
            <Link to="/dashboard/"><button>Sign In</button></Link>
            <h3>
              New here? <span><Link to="/register/">Create an account</Link></span>
            </h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
