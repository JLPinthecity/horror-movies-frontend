import React from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import "./HorrorMovies.css";

const HorrorMovies = (props) => {
    const movieCards = props.movies.length > 0 ? props.movies.map(m => <div key={m.attributes.id} ><MovieCard movie={m} /> </div>) : null

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