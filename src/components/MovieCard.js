import React from 'react';

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
                <a href={`/horror_movies/${movie.attributes.slug}`}>View Movie</a>
            </div>
            
        </div>
    )
}

export default MovieCard;