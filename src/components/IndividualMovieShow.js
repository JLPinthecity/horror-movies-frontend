import React, { Fragment } from 'react';
import { getMoviePlusReviews } from '../actions/individualMovie';
import { showReviewForm } from '../actions/newReviewForm';
import { connect } from 'react-redux';
import MovieHeader from './MovieHeader';
import ReviewForm from './ReviewForm';
import Review from './Review';
import "./IndividualMovieShow.css";

class IndividualMovieShow extends React.Component {

    componentDidMount() {
        const url = this.props.match.url
        this.props.getMoviePlusReviews(url)
    }

    render() {
        return (
            <div className="movie-wrapper">
                { this.props.loaded && 
                
                    <Fragment>
                        
                        <div className="reviews-container">
                            <br /><br />
                            <div className ="movie-details">
                                <MovieHeader/>
                            </div>

                            <div className="review-button">
                                <span>
                                    <button className="transparent_button" onClick={this.props.showReviewForm}>Write review</button>
                                </span>
                            </div>

                        </div>

                        <div className="column-review">
                            <div className="review-form" id={ this.props.showForm ? "" : "hide"}>
                                <ReviewForm/>
                            </div>
                        </div>

                        <div className="reviews">
                            {this.props.reviews ? this.props.reviews.map((review, index) => 
                            <Review attributes={review.attributes} key={index} />): 'LOADING...'}
                        </div>
                    </Fragment>
                }
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        loaded: state.movieDataLoaded,
        showForm: state.showReviewForm,
        reviews: state.reviews
    }
}

export default connect(mapStateToProps, { getMoviePlusReviews, showReviewForm })(IndividualMovieShow);

//props.match.url = '/horror-movies/hereditary'
//loaded checks to see if we've made our api request and have the data