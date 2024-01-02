import React from "react";
import "./PersonalInfor.scss";
import { Link } from "react-router-dom";
import InputCustom from "./component/InputCustom";
import { personalInfor } from "../subComponent/storeListPage";

function PersonalInfor() {
  return (
    <div className="personal-container">
      <div className="personal-header">
        <Link to="/profileUser">
          {" "}
          <b>
            &#8592; <span>Personal information</span>
          </b>
        </Link>
      </div>
      <div className="main-inputCustom-container">
        <div className="input1">
          <InputCustom header="Full name" type="text" />
          <InputCustom header="Email address" type="email" />
        </div>
        <div className="input2">
          <InputCustom header="Phone number" type="number" />
          <InputCustom header="Password" type="password" />
        </div>
      </div>
      <div className="cancel-and-save">
        <button className="btn-cancel"> Cancel </button>
        <button className="btn-save"> Save </button>
      </div>
    </div>
  );
}

export default PersonalInfor;
