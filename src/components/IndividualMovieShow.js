import React, { Fragment } from 'react';
import { getMoviePlusReviews } from '../actions/individualMovie';
import { showReviewForm } from '../actions/newReviewForm';
import { connect } from 'react-redux';
import MovieHeader from './MovieHeader';
import ReviewForm from './ReviewForm';
import "./IndividualMovieShow.css";

class IndividualMovieShow extends React.Component {

    componentDidMount() {
        const url = this.props.match.url
        this.props.getMoviePlusReviews(url)
    }

    showOrHideReviewForm = () => {
        this.props.showReviewForm()
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
                                    <button className="transparent_button" onClick={this.showOrHideReviewForm} >Write a review</button>
                                </span>
                            </div>

                            <div className="reviews">
                                <span>

                                </span>

                            </div>
                        </div>

                        <div className="column-review">
                            <div className="review-form">
                                <ReviewForm/>
                            </div>
                        </div>
                    </Fragment>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loaded: state.movieDataLoaded
    }
}

export default connect(mapStateToProps, { getMoviePlusReviews, showReviewForm })(IndividualMovieShow);

//props.match.url = '/horror-movies/hereditary'
//loaded checks to see if we've made our api request and have the data