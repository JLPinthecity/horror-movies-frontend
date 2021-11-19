import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className="card">
            <div className="card">
                <img src={movie.attributes.poster} alt="horror movie poster" width="500" />
            </div>
            
            <h3>{movie.attributes.title}</h3>
            <p>{movie.attributes.rating}</p>
            <p>{movie.attributes.director}</p>
            
        </div>
    )
}

export default MovieCard;