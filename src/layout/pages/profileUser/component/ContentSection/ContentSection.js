import React from "react";
import Picture from "../../../../imagin/picture/Picture";
import "./ContentSection.scss";
import Icon from "../../../../imagin/icon/Icon";
import AcountDetail from "../subComponent/AccountDetail";


function ContentSection() {
  return (
    <main className="section-container">
      <div className="wallet-section">
        <div className="wallet-header">
          <h1>My Wallet</h1>
          <div>Payment methods</div>
        </div>
        <div className="wallet-visaCard">
          <img src={Picture.visaCard1} alt="card1" />
          <img src={Picture.visaCard2} alt="card2" />
          <img src={Picture.addNewVisa} alt="addNewVisa" />
        </div>
      </div>
      <div className="account-section">
        <div className="account-header">
          <h1>Account info</h1>
          <div>Addresses, contact information and password</div>
        </div>
        <div className="account-details">
          <AcountDetail
          img = {Icon.message}
          tiltle = 'Email Address'
          detail = 'thucdzch@gmail.com'
           />
          <AcountDetail
          img = {Icon.calling}
          tiltle = 'Phone number'
          detail = '+000 11122 2345 657'
           />
          <AcountDetail
          img = {Icon.location}
          tiltle = 'Add an address'
          detail = 'Bangladesh Embassy, Washington, DC 20008'
           />
        </div>
      </div>
    </main>
  );
}

export default ContentSection;
