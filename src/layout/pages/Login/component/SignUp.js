import React from "react";
import "../LoginPage.scss";
import Icon from "../../../imagin/icon/Icon";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="login-SignUp">
      <div className="login-top">
        <img src={Icon.logo} alt="logo" />
        <h3>Grocerymart</h3>
      </div>
      <div className="login-mid">
        <div>Sign Up</div>
        <p>Let’s create your account and Shop like a pro and save money.</p>
      </div>
      <div className="login-fill">
        <div>
          <input className="input" type="email" placeholder="    Email" />
          <img src={Icon.message} alt="x" />
        </div>
        <div>
          <input className="input" type="text" placeholder="    Password" />
          <img src={Icon.lock} alt="x" />
        </div>
        <div>
          <input
            className="input"
            type="text"
            placeholder="    Confirm password"
          />
          <img src={Icon.lock} alt="x" />
        </div>
        <div className="checkAndForgot">
          <div className="check">
            <input className="checkbox" type="checkbox" />
            <p>Set as default card</p>
          </div>
          <Link>Recovery Password</Link>
        </div>
      </div>
      <div className="login-btn">
        <button className="btn-signUp">Sign Up</button>
        <button className="btn-signWithmail">
          <img src={Icon.googleLine} alt="x" />
          Sign in with Gmail
        </button>
      </div>
      <div className="login-question">
        <div>You have an account yet ? </div>
        <Link to='/loginPage'>Sign In</Link>
      </div>
    </div>
  );
}

export default SignUp;
