import React from 'react';

const MovieHeader = (props) => {
    return (
        <div className="header-wrapper">
            <h1>Movie Name</h1>

            <div>
            <div className="total-reviews"> </div>
            <div className="star-rating"> </div>
            <div className="total-out-of"> </div>
            </div>

        </div>
    )
}

export default MovieHeader;
