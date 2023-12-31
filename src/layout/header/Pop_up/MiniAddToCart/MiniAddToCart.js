import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./MiniAddToCart.scss"
import { AppContext } from "../../../../AppContext/AppContext";
import EmptyCart from "./EmptyCart";
import NoEmptyCart from "./NoEmptyCart";

function MiniAddToCart() {
  const {addToCart} = useContext(AppContext)
  return (
    <div className="mini-container">
      <div className="mini-header">
        <div > You have <b> {addToCart.length}</b> item(s)</div>
        <Link to = '/AddtoCartPage' >See all</Link>
      </div>
      {addToCart.length === 0 ? <EmptyCart />:<NoEmptyCart />}
    </div>
  );
}

export default MiniAddToCart;
