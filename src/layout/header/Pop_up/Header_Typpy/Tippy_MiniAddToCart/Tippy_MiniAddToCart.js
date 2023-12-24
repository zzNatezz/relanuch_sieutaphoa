import Tippy from "@tippyjs/react/headless";
// import Tippy from "@tippyjs/react";
import React, { useContext } from "react";
import Icon from "../../../../imagin/icon/Icon";
import MiniAddToCart from "../../MiniAddToCart/MiniAddToCart";
import { AppContext } from "../../../../../AppContext/AppContext";

function TippyMiniAddToCart() {
    const {addToCart, totalPrice} = useContext(AppContext)
    return (
        <Tippy
        interactive
        placement = 'bottom'
        render = {attrs =>(
            <div className="box" tabIndex= "-1"{...attrs}> <MiniAddToCart /> </div>
        )} 
        >
            <div> <img className="icon-header" src={Icon.buy} alt="buy" /> ({addToCart.length})  $ {totalPrice.toFixed(2)}  </div>
        </Tippy>
    );
}

export default TippyMiniAddToCart;