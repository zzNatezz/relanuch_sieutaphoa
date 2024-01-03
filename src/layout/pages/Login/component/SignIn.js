import React from "react";
import "../LoginPage.scss";
import Icon from "../../../imagin/icon/Icon";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="signIn-container">
      <div className="signIn-top">
        <div className="signIn-logo">
          <img src={Icon.logo} alt="logo" />
          <h3>Grocerymart</h3>
        </div>
        <div className="signIn-hello">
          <div>Hello Again!</div>
          <p>
            {" "}
            Welcome back to sign in. As a returning customer, you have access to
            your previously saved all information.
          </p>
        </div>
      </div>
      <div className="signIn-mid">
        <input 
        className="signIn-email" 
        type="text" 
        placeholder="   Type your email"  />
        <input 
        className="signIn-password" 
        type="text"
        placeholder="   Password"
         />
      </div>
      <div className="signIN-checkboxAndForgot">
        <div>
            <input className="signIn-checkbox" type="checkbox" />
            <label htmlFor="">Set as default card</label>
        </div>
        <Link>Recovery Password</Link>
      </div>
      <div className="signIn-btn">
        <button className="btn-login">Login</button>
        <button className="btn-loginWithmail">
            <img src={Icon.googleLine} alt="x" />
            Sign in with Gmail
        </button>
      </div>
      <div className="signIn-bottom">
        <div>Don’t have an account yet?</div>
        <Link to='SignUp'>Sign Up</Link>
      </div>
    </div>
  );
}

export default SignIn;
