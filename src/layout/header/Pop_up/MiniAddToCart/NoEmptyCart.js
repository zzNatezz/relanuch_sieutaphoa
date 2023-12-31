import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./MiniAddToCart.scss"
import { AppContext } from "../../../../AppContext/AppContext";

function NoEmptyCart() {
  const {addToCart,totalPrice} = useContext(AppContext)
  const uniqueAddtoCart = [...new Set(addToCart)]
  return (
    <>
     <div className="mini-product">
        {uniqueAddtoCart.map((item,i)=>(
            <div key={i} className="mini-information">
                <img className="product-mini-img" src={item.img} alt="icon" />
                <div className="product-mini-title"><b>{item.MiniTitle}</b></div>
                <div className="product-mini-price-and-quantity">
                    <div className="product-mini-price">${(item.price-(item.price*0.1)).toFixed(2)}
                    </div>
                    <div key={i} className="product-mini-quantity">{addToCart.filter(x => x===item).length}
                      </div>
                </div>
            </div>
        ))}
      </div>
      <div className="mini-details">
        <div >Subtotal:</div>
        <div >${(totalPrice.toFixed(2))-10.00}</div>
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
      <Link to='/AddtoCartPage'><button className="btn-checkout">Check Out All</button></Link>
    </>
     
  );
}

export default NoEmptyCart;
