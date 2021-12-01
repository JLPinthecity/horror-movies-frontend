import React from 'react';
import { getMoviePlusReviews } from '../actions/individualMovie'
import { connect } from 'react-redux';

class IndividualMovieShow extends React.Component {

    componentDidMount() {
        const url = this.props.match.url
        this.props.getMoviePlusReviews(url)
    }

    render() {

        return (
            <div className="movie-wrapper">
            hello 
            </div>
        )

    }
    
    
}

export default connect(null, { getMoviePlusReviews })(IndividualMovieShow);

//props.match.url = '/horror-movies/hereditary'