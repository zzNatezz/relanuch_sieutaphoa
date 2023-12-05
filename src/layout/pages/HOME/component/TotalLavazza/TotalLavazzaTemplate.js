import React from "react";
import Picture from "../../../../imagin/picture/Picture";
import Icon from "../../../../imagin/icon/Icon";
import "./TotalLavazzaTemplate.scss";

const homeTotalLavAz = [
  {
    img: Picture.coffeeBean,
    name: "Coffee Beans - Espresso Arabica and Robusta Beans",
    type: "Lavazza",
    price: 47.0,
    review: "4.3",
  },
  {
    img: Picture.coffeBlends,
    name: "Lavazza Coffee Blends - Try the Italian Espresso",
    type: "Lavazza",
    price: 53.0,
    review: "3.4",
  },
  {
    img: Picture.coffeeEspressBlack,
    name: "Lavazza - Caffè Espresso Black Tin - Ground coffee",
    type: "welikecoffee",
    price: 99.99,
    review: "5.0",
  },
  {
    img: Picture.coffeeQualita,
    name: "Qualità Oro Mountain Grown - Espresso Coffee Beans",
    type: "Lavazza",
    price: 38.65,
    review: "4.4",
  },
];

function TotalLavazzaTemplate() {
  return (
    <div className="TotalLavazz-container">
      {homeTotalLavAz.map((item, index) => (
        <div key={index} className="container">
          <div className="pictures">
            <img className="avatar" src={item.img} alt="source" />
            <div className="heart-background">
              <img className="heart" src={Icon.heart} alt="" />
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
