import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.css";

const MovieCard = ({ movie }) => {
    return (
        
        <div className="card-wrapper">

            <div className="poster">
                <img src={movie.attributes.poster} alt={movie.attributes.title} width="500" />
            </div>
            
            <div className="title">
                <h3>{movie.attributes.title}</h3>
            </div>

            <div className="rating">
                <p>{movie.attributes.average_score}</p>
            </div>

            <div className="movie-title">
                <p>{movie.attributes.director}</p>
            </div>

            <div className="release-date">
                <p>{movie.attributes.year_released}</p>
            </div>

            <div className="link">
                <Link to={`/horror_movies/${movie.attributes.slug}`}>View Movie</Link>
            </div>
            
        </div>
    )
}

export default MovieCard;