import React from 'react';
import Rating from './Rating';
import './Review.css'

const Review = (props) => {

    const createdAt = props.attributes.created_at.split("T")[0]

    const [yyyy, mm, dd] = createdAt.split("-")

    const newDateFormat = `${mm}-${dd}-${yyyy}`;

    return (
        
        <div className="review_card">

            <div className="rating-container ">
                <div className="rating-score">
                    <Rating score={props.attributes.rating}/>
                </div>
            </div>

            <div className="review-title title">
                {props.attributes.title}
            </div>
            <br/>

            <div className="name">
                Submitted by: {props.attributes.name} on {newDateFormat}
            </div>
            <br/>

            <div className="description">
                {props.attributes.description}
            </div>
        </div>
    )
}

export default Review;