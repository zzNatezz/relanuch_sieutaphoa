import React from "react";
import Picture from "../../../imagin/picture/Picture";
import "./ContentSection.scss";
import Icon from "../../../imagin/icon/Icon";

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
            <div className="email">
                <img width='20px'  src={Icon.message} alt="email" />
                <div>
                    <h3>Email Address</h3>
                    <div>thucdzch@gmail.com</div>
                </div>
            </div>
            <div className="phone">
                <img width='20px' src={Icon.calling} alt="phone" />
                <div>
                    <h3>Phone number</h3>
                    <div>0123456789</div>
                </div>
            </div>
            <div className="address">
                <img width='20px' src={Icon.location} alt="location" />
                <div>
                    <h3>Add an address</h3>
                    <div>Bangladesh Embassy, Washington, DC 20008</div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}

export default ContentSection;
