import React from 'react';
import { getMoviePlusReviews } from '../actions/individualMovie'
import { connect } from 'react-redux';
import MovieHeader from './MovieHeader';

class IndividualMovieShow extends React.Component {

    componentDidMount() {
        const url = this.props.match.url
        this.props.getMoviePlusReviews(url)
        debugger
    }

    render() {
        

        return (
            <div className="movie-wrapper">
                <div className="column-1">
                    { this.props.loaded && <MovieHeader/>}

                </div>

                <div className="column-2">
            
                </div>


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