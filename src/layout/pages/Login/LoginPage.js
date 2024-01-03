import React from "react";
import "./LoginPage.scss";
import Picture from "../../imagin/picture/Picture";
import SignUp from "./component/SignUp";
import SignIn from "./component/SignIn";
import { Outlet } from "react-router-dom";

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-logo">
        <img src={Picture.loginLogo} alt="loginLogo" />
        <div>
          {" "}
          The best of luxury brand values, high quality products, and innovative
          services
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default LoginPage;
