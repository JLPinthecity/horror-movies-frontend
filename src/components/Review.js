import React from 'react';
import './Review.css'

const Review = (props) => {
    return (
        
        <div className="review_card">

            <div className="rating-container">
                <div className="rating-score">

                </div>
            </div>

            <div className="review-title">
                {props.attributes.title}
            </div>

            <div className="description">
                {props.attributes.description}
            </div>
        </div>
    )
}

export default Review;