import React from 'react';
import { connect } from 'react-redux';

const MovieHeader = (props) => {
    debugger
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
const mapStateToProps = state => {
    return {
        attributes: state.horrorMovie.attributes
    }
}

export default connect(mapStateToProps)(MovieHeader);
