import React from 'react';
import './Rating.css'

const Rating = ({ score }) => {

    const ratingPercentage = (score / 5) * 100

    return (
        <span className="star-wrapper">
            <span className="stars" style={{ width: ratingPercentage + "%" }}>
            </span>
        </span>
    )
}

export default Rating;