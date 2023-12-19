import React, { useContext } from "react";
import Header from "../../header/Header";
import "./PageProduct.scss";
import Icon from "../../imagin/icon/Icon";
import ReviewTemplate from "./component/review/ReviewTemplate";
import { AppContext } from "../../../AppContext/AppContext";
import { Link, Outlet } from "react-router-dom";

const buttonList = ['Small','Medium','Large'];

function PageProduct({itemProductPage}) {
  const {quality, decisionQuatityBtm, activeClass, hanldeSingleClass} = useContext(AppContext)
  return (
        <div>
          <Header />
          <div className="product-container">
            <div className="product-link">
              Departments &#62;coffee &#62; Coffee Beans &#62;
              <span className="span">{itemProductPage.getID}</span>
            </div>
            <div className="product-main">
              <img className="main-img" src={itemProductPage.img} alt="img-product" />
              <div className="main-detail">
                <h1 className="coffee-name">{itemProductPage.name}</h1>
                <div className="coffee-detail">
                  <div className="detail">
                    <div className="review">
                      <img src={Icon.star} alt="" />
                      <p>{itemProductPage.review} (1100 reviews)</p>
                    </div>
                    <h2 className="header2">Size/Weight</h2>
                    <div className="quatity-unit">
                      <select disabled className="number" name="number">
                        <option className="quatity-selection">{quality}</option>
                      </select>
                      <select disabled name="unit" className="unit">
                        <option value="gam">Gam</option>
                      </select>
                    </div>
                    <div className="size">
                      {buttonList.map((item,index)=>(
                        <button key = {index} className={index === activeClass ? 'changeBackground' : ''} value = {item} onClick={(e)=>(decisionQuatityBtm(e,index))}>{item}</button>
                      ))}
                    </div>
                  </div>
                  <div className="information">
                    <div className="compare">
                      <img src={Icon.document} alt="" />
                      <h3>Compare</h3>
                    </div>
                    <div className="delivery">
                      <img src={Icon.buy} alt="" />
                      <div className="delivery-detail">
                        <h3>Delivery</h3>
                        <div>From $6 for 1-3 days</div>
                      </div>
                    </div>
                    <div className="pick-up">
                      <img src={Icon.bag} alt="" />
                      <div className="pick-up-detail">
                        <h3>Pickup</h3>
                        <div>Out of 2 store, today </div>
                      </div>
                    </div>
                    <div className="payment">
                      <div className="price">
                        {itemProductPage.price} <p> 10% </p>
                      </div>
                      <h1 className="total-price">
                        {" "}
                        Total : {itemProductPage.price - itemProductPage.price * 0.1}{" "}
                      </h1>
                      <div className="add-to-cart">
                        <button>Add to Cart</button>
                        <img src={Icon.heart} alt="tim" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="review-title">
              <Link 
              className= {activeClass === 'Description' ? 'link-black-text' : 'link'} 
              to = {itemProductPage.link + '/description'}  onClick={(e) => hanldeSingleClass(e)}>
              Description 
              </Link>
              <Link 
              className={activeClass === 'Features' ? 'link-black-text' : 'link'} 
              to = {itemProductPage.link + '/features'} onClick={(e) => hanldeSingleClass(e)}>
              Features
              </Link>
              <Link 
              className={activeClass === 'Review' ? 'link-black-text' : 'link'} 
              to = {itemProductPage.link + '/review'} onClick={(e) => hanldeSingleClass(e)}>
              Review
              </Link>
              <Link 
              className={activeClass === 'Similar' ? 'link-black-text' : 'link'} 
              to = {itemProductPage.link + '/similar'} onClick={(e) => hanldeSingleClass(e)}>
              Similar
              </Link> 
            </div>
            <div className="reviewTemplate">
            <Outlet />
            </div>
          </div>
        </div>
        );
}

export default PageProduct;
