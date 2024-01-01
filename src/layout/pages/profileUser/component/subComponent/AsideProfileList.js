import React from "react";
import './asideProfileList.scss'

function AsideProfileList({Tittle,array}) {
    return (
        <div className="list-container">
        <h1>{Tittle}</h1>
            {array.map(
                (item,i)=>(
                <div 
                key={i}
                className="aside-listStructural">
                    <img
                    src={item.symbol} alt={'symbol' + i} />
                    <div>{item.subtitle}</div>
                </div>
            )
            )
            }
        </div>
    );
}

export default AsideProfileList;

