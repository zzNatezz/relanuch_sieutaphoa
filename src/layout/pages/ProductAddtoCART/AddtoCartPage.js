import React from "react";
import Header from '../../header/Header'
import './AddtoCartPage.scss'
import homeTotalLavAz from "../../../MainStorage/homeTotalLavAz";

function AddtoCartPage(){
    return(
        <>
        <Header />
        <div className="addToCart-container">
            <div className="text-link"> Home &#62; checkout </div>
            <div className="addtoCart-and-check-container">
                <div className="addToCart-list">
                    {homeTotalLavAz.map((item,index)=>(
                        <div key={index} className = 'addToCart-list-container'>
                            <img src={item.img} alt={'product' + index} 
                            className="productImagine" />
                            <div className="addTocart-information">
                                <h1 className="addToCart-list-name">
                                    {item.name}
                                </h1>
                                <div className="addToCart-price">{(item.price)-((item.price)*0.1)}</div>
                            </div>
                            
                        </div>
                    ))}
                </div>
                <div>sasas</div>
            </div>
        </div>
        
        </>
    )
};

export default AddtoCartPage