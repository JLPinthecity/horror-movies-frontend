import { PinDropRounded } from '@material-ui/icons';
import React from 'react';

const Review = (props) => {
    return (
        
        <div className="review_card">

            <div className="rating-container">
                <div className="rating-score">


                </div>
            </div>

            <div className="title">
                {props.attributes.title}
            </div>

            <div className="description">
                {props.attributes.description}
            </div>
        </div>
    )
}

export default Review;