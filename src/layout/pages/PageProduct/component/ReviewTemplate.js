import React from "react";
import './ReviewTemplate.scss';
import Picture from "../../../imagin/picture/Picture";
import Icon from "../../../imagin/icon/Icon";

const Reviewer = [
    {
        ava : Picture.hussen,
        name : 'Jakir Hussen',
        comment : 'Great product, I love this Coffee Beans',
        rate : 3.5,
    },
    {
        ava : Picture.ahmed,
        name : 'Jubed Ahmed',
        comment : 'Awesome Coffee, I love this Coffee Beans',
        rate : 4.0
    },
    {
        ava : Picture.hussain,
        name : 'Delwar Hussain',
        comment : 'Great product, I love this Coffee Beans',
        rate: 4.5
    }
]

function ReviewTemplate() {
    return (  
        <>
        {Reviewer.map((item,index)=>(
            <div key={index} className="review-container">
                <div className="ava-and-review">
                    <img src={item.ava} alt="avatar" />
                    <div className="name-and-comment">
                        <h1>{item.name}</h1>
                        <div>{item.comment}</div>
                    </div>
                </div>
                <div className="rating-reviews">
                    <img src={Icon.startReview} alt="" />
                    <p>{item.rate.toFixed(1)} Reviews</p>
                </div>
            </div>
        ))}
        </>
    );
}

export default ReviewTemplate;