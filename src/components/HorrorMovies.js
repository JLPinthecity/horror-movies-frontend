import React from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';

const HorrorMovies = (props) => {
    return (
        <div>
            test movies
        </div>

    )
}

const mapStateToProps = state => {
    return {
        movies = state.horrorMovies
    }
}

export default connect(mapStateToProps)(HorrorMovies);