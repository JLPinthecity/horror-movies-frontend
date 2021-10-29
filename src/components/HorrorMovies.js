import React from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';

const HorrorMovies = (props) => {
    const movieCards = props.movies.length > 0 props.movies.map(m => <MovieCard movie={m} key={m.attributes.id}/> : [])
    return (
        movieCards
    )
}

const mapStateToProps = state => {
    return {
        movies: state.horrorMovies
    } 
}

export default connect(mapStateToProps)(HorrorMovies);