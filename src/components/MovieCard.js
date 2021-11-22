import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <div className="card">
            <div className="poster">
                <img src={movie.attributes.poster} alt={movie.attributes.title} width="500" />
            </div>
            
            <div className="title">
                <h3>{movie.attributes.title}</h3>
            </div>

            <div className="rating">
                <p>{movie.attributes.avg_score}</p>
            </div>

            <div className="title">
                <p>{movie.attributes.director}</p>
            </div>

            <div className="link">
                <Link to={`/horror_movies/${movie.attributes.slug}`}>View Movie</Link>
            </div>
            
        </div>
    )
}

export default MovieCard;