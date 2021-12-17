import React from 'react';
import { connect } from 'react-redux';

const Rating = ({ userRating }) => {

    return (
        <span className="star-wrapper">
            <span className="star-rating">

            </span>

        </span>
    )

}

const mapStateToProps = state => {
    return {
        userRating: state.horrorMovie.attributes.average_score
    }
}

export default connect(mapStateToProps)(Rating);