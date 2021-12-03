import React from 'react';
import { connect } from 'react-redux';
import './MovieHeader.css';

const MovieHeader = (props) => {

    const { poster, title, director, year_released, slug, average_score } = props.attributes
    const { reviews } = props

    return (
        <div className="header-wrapper">
           
            <h1><img src={ poster } alt={ title }/> { title }</h1>

            <div className="review_details">
                <div className="total-reviews">{ reviews.length } user reviews</div>
                <div className="star-rating"> </div>
                <div className="total-out-of">{ average_score } out of 5</div>
            </div>

        </div>
    )
}
const mapStateToProps = state => {
    return {
        attributes: state.horrorMovie.attributes,
        reviews: state.horrorMovie.relationships.reviews.data
    }
}

export default connect(mapStateToProps)(MovieHeader);
