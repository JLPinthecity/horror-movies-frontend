import React from 'react';
import { getMoviePlusReviews } from '../actions/individualMovie'
import { connect } from 'react-redux';
import MovieHeader from './MovieHeader';

class IndividualMovieShow extends React.Component {

    componentDidMount() {
        const url = this.props.match.url
        this.props.getMoviePlusReviews(url)
    }

    render() {

        return (
            <div className="movie-wrapper">
                <div className="column-1">
                    <MovieHeader/>

                </div>

                <div className="column-2">

                </div>

             
            </div>
        )

    }
    
    
}

export default connect(null, { getMoviePlusReviews })(IndividualMovieShow);

//props.match.url = '/horror-movies/hereditary'