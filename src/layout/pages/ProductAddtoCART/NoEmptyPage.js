import React, { useContext } from "react";
import "./AddtoCartPage.scss";
import Icon from "../../imagin/icon/Icon";
import { Link } from "react-router-dom";
import { AppContext } from "../../../AppContext/AppContext";

function NoEmptyPage() {
  const {addToCart,decreaseAddtoCart,updateAddtoCart} = useContext(AppContext);
  const uniqueAddtoCart = [...new Set(addToCart)];
  return (
    <>
      <div className="addToCart-container">
        <div className="text-link"> Home &#62; checkout </div>
        <div className="addtoCart-and-check-container">
          <div className="addToCart-list">
            {uniqueAddtoCart.map((item, index) => (
              <div key={index} className="addToCart-list-container">
                <img
                  src={item.img}
                  alt={"product" + index}
                  className="addtoCart-imagine"
                />
                <div className="addTocart-information">
                  <div className="addtoCart-headLine">
                    <h1>{item.name}</h1>
                    <h1>${(item.price - item.price * 0.1).toFixed(2)}</h1>
                  </div>
                  <div className="addToCart-price">
                    ${(item.price - item.price * 0.1).toFixed(2)}
                    <span className="addtoCart-status">In Stock</span>
                  </div>
                  <div className="addToCart-setUp">
                      <div className="addtoCart-quantity">
                        <option className="addtoCart-option" value="Lavaza">LavAzza &#8744;</option>
                        <div className="addtoCart-control-quantity">
                          <img 
                          onClick ={()=>decreaseAddtoCart(item)}
                          className="substract"
                          src={Icon.subtractIcon}
                          alt="subtract"
                          />
                          {addToCart.filter(x => x === item).length} 
                          <img
                          onClick={()=> updateAddtoCart(item)}
                          className="plus" 
                          src={Icon.plusIcon} 
                          alt="plus" 
                          />
                          </div>
                      </div>
                      <div className="addtoCart-heart-and-delete">
                            <div
                            className="addtoCart-heart">
                              {/* <!-- heart at img area below is not completed, can't provide onClick event on it.PLEASE FIX IT --> */}
                              <img 
                              src={item.heart} alt="heart" />
                              Save
                              </div>
                            <button className="addtoCart-delete">
                              <img src={Icon.deleteIcon} alt="delete" />Delete
                            </button>
                      </div>
                    </div>
                </div>
              </div>
            ))}
            <div className="addtoCart-sum">
            <Link to='/'> &#60; Continue shopping</Link>
            <div className="addtoCart-totalPrice">
                <article>
                    <div>Subtotal:</div>
                    <div> $191.65</div>
                </article>
                <article>
                    <div>Shipping</div>
                    <div>$10.00</div>
                </article>
                <hr />
                <article>
                    <h1>Total:</h1>
                    <h1>$201.65</h1>
                </article>
            </div>
          </div>
          </div>
          <div className="addtoCart-checkout">
            <article>
                <div>Subtotal (items)</div>
                <h1>2</h1>
            </article>
            <article>
                <div>Price (Total)</div>
                <h1>$191.62</h1>
            </article>
            <article className="checkout-shpping">
                <div>Shipping</div>
                <h1>$10.00</h1>
            </article>
            <article>
                <div>Estimated Total</div>
                <h1>$201.65</h1>
            </article>
            <button className="btn-checkout">Continue to checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoEmptyPage;
