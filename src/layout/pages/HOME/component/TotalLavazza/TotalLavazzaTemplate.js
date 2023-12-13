import React, { useContext } from "react";
import Icon from "../../../../imagin/icon/Icon";
import "./TotalLavazzaTemplate.scss";
import { Link } from "react-router-dom";
import homeTotalLavAz from "../StoreInfor/homeTotalLavAz";
import { AppContext } from "../../../../../AppContext/AppContext";

function TotalLavazzaTemplate() {
  const { updateHeart, cloneHomeLavaza } = useContext(AppContext)
  return (
    <div className="TotalLavazz-container">
      {homeTotalLavAz.map((item, index) => (
        <div key={index} className="container">
          <div className="pictures">
          <Link to = {item.link}>
            <img className="avatar" src={item.img} alt="source" /></Link>
            <div onClick={()=>updateHeart()} className="heart-background">
              <img className="heart" src={item.heart} alt="heart" />
            </div>
          </div>
          <div className="coffee-NameAndType">
            <h3 className="name">{item.name}</h3>
            <div className="type">{item.type}</div>
          </div>
          <div className="coffee-bottom">
            <div className="price">
              <b>${item.price.toFixed(2)}</b>
            </div>
            <div className="review">
              <img src={Icon.star} alt="star" />
              <span>{item.review}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TotalLavazzaTemplate;
