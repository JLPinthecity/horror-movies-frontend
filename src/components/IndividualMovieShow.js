import React, { Fragment } from 'react';
import { getMoviePlusReviews } from '../actions/individualMovie'
import { connect } from 'react-redux';
import MovieHeader from './MovieHeader';
import "./IndividualMovieShow.css";
import ReviewForm from './ReviewForm';

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
                        <div className="column-1">
                            <div className ="main">
                                <MovieHeader/>
                            </div>

                            <div className="reviews">

                            </div>
                        </div>

                        <div className="column-2">
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

export default connect(mapStateToProps, { getMoviePlusReviews })(IndividualMovieShow);

//props.match.url = '/horror-movies/hereditary'
//loaded checks to see if we've made our api request and have the data