import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./MiniAddToCart.scss"
import homeTotalLavAz from "../../../../MainStorage/homeTotalLavAz";
import { AppContext } from "../../../../AppContext/AppContext";

function MiniAddToCart() {
  const {addToCart,totalPrice} = useContext(AppContext)
  return (
    <div className="mini-container">
      <div className="mini-header">
        <div > You have <b> {addToCart.length}</b> item(s)</div>
        <Link >See all</Link>
      </div>
      <div className="mini-product">
        {addToCart.map((item,i)=>(
            <div key={i} className="mini-information">
                <img className="product-mini-img" src={item.img} alt="icon" />
                <div className="product-mini-title"><b>{item.MiniTitle}</b></div>
                <div className="product-mini-price">${(item.price-(item.price*0.1)).toFixed(2)}</div>
            </div>
        ))}
      </div>
      <div className="mini-details">
        <div >Subtotal:</div>
        <div >{(totalPrice.toFixed(2))-10.00}</div>
      </div>
      <div className="mini-details">
        <div >Texes:</div>
        <div >Free</div>
      </div>
      <div className="mini-details">
        <div >Delivery charge:</div>
        <div >$10.00</div>
      </div>
      <div className="mini-details mini-total-price">
        <h1 >Total Price:</h1>
        <h1 >{(totalPrice).toFixed(2)} </h1>
      </div>
      <button className="btn-checkout">Check Out All</button>
    </div>
  );
}

export default MiniAddToCart;
