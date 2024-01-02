import React from "react";
import Header from "../../header/Header";
import "./ProfileUser.scss";
import ListSideContent from "./component/ListSideContent";
import ContentSection from "./component/ContentSection/ContentSection";
import { Outlet } from "react-router-dom";

function ProfileUser() {
  return (
    <div className="main-container">
      <div className="header">
        <Header />
      </div>
      <div className="profile-container">
        <ListSideContent />
        <section>
           <Outlet />
        </section>
      </div>
    </div>
  );
}

export default ProfileUser;
