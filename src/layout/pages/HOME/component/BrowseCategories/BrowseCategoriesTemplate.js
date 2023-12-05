import React from "react";
import "./BrowseCategoriesTemplate.scss";
import Picture from "../../../../imagin/picture/Picture";

const listDetail = [
  {
    img: Picture.browse_coffeblend,
    price: "$24 - $150",
    comment: "New sumatra mandeling coffe blend",
  },
  {
    img: Picture.browse_EsprAndRobus,
    price: "$37 - $160",
    comment: "Espresso arabica and robusta beans",
  },
  {
    img: Picture.browse_lavazza,
    price: "$32 - $160",
    comment: "Lavazza top class whole bean coffee blend",
  },
];

function BrowseCategoriesTemplate() {
  return (
    <div className="Categories">
      {listDetail.map((item, index) => (
        <div key={index} className="container">
          <div className="first-content">
            <img src={item.img} alt="" />
          </div>
          <div className="second-content">
            <div className="second-content-price-range">
              <h2>{item.price}</h2>
            </div>
            <div className="second-content-detail">{item.comment}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BrowseCategoriesTemplate;
