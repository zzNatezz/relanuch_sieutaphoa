import React, { useContext } from "react";
import Icon from "../imagin/icon/Icon";
import Picture from "../imagin/picture/Picture";
import "./Header.scss";
import { HeaderTyppy } from "./Pop_up/Header_Typpy/Header_Typpy";
import { Link } from "react-router-dom";
import { AppContext } from "../../AppContext/AppContext";
import TippyMiniAddToCart from "./Pop_up/Header_Typpy/Tippy_MiniAddToCart/Tippy_MiniAddToCart";

function Header() {
  const { heart, login } = useContext(AppContext);
  return (
    <>
      <div className="header-background">
        <div className="compo_l">
          <div className="compo_l_f">
            <Link className="link-home" to="/">
              {" "}
              <img src={Icon.logo} alt="" />
              <div>Grocerymart</div>
            </Link>
          </div>
          <div className="compo_l_s">
            <HeaderTyppy Title="Departments" />
            <HeaderTyppy Title="Grocery" />
            <HeaderTyppy Title="Beauty" />
          </div>
        </div>
        <div className="compo_r">
          <div className="compo_r_f">
            <img className="icon-header" src={Icon.search} alt="search" />
          </div>
          <div className="compo_r_s">
            <div className="heart-container">
              <img
                className="icon-header"
                src={heart === 0 ? Icon.heart : Icon.heart_active}
                alt="heart"
              />{" "}
              {heart}
            </div>
            <div className="compo_buy">
              <TippyMiniAddToCart />
            </div>
          </div>
          <div className="compo_r_t">
            {login === false ? (
                <Link to="/loginPage">
                  <button className="">Login</button>
                </Link>
            ) : (
              <Link to="/profileUser">
                <img
                  className="icon-header"
                  src={Picture.avatar}
                  alt="avatar"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
