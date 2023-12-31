import React from "react";
import Picture from "../../../imagin/picture/Picture";
import './MiniAddToCart.scss'

function EmptyCart() {
    return (
        <div className="EmptyCart">
            <img src={Picture.emptyCart} alt="empty cart" />
        </div>
    );
}

export default EmptyCart;