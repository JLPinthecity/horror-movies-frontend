import React from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import "./HorrorMovies.css";

const HorrorMovies = (props) => {
    const movieCards = props.movies.length > 0 ? props.movies.map(m => <MovieCard key={m.attributes.id} movie={m} />) : null

    return (
        <div className="movies-main-container">
            { movieCards }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        movies: state.horrorMovies
    } 
}

export default connect(mapStateToProps)(HorrorMovies);