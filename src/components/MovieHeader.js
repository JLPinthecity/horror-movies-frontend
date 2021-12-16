import React from 'react';
import { connect } from 'react-redux';
import './MovieHeader.css';

const MovieHeader = (props) => {

    const { poster, title, director, year_released, average_score } = props.attributes

    return (
        <div className="header-wrapper">

            <div className="header-left">
                <img src={ poster } alt={ title }/> 
            </div>

            <div className="header-right">
                <h1>{ title }</h1><br/> 
                Directed by { director } 
                <br/>
                <label>Release date:</label> { year_released }
                <div className="total-reviews">{ props.reviews.length } user reviews</div>
                <div className="star-rating"> </div>
                <div className="total-out-of">{ average_score } out of 5 stars</div>
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
