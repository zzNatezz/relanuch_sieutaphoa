import React from "react";
import './subComponent.scss'

function AcountDetail({img,tiltle,detail}) {
    return (
        <div className="detail-container">
                <img src= {img} alt= {tiltle} />
                <div>
                    <h3>{tiltle}</h3>
                    <div>{detail}</div>
                </div>
            </div>
    );
}

export default AcountDetail;