import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <>
        <h3>{movie.attributes.title}</h3>
        <p>{movie.attributes.rating}</p>
        <p>{movie.attributes.director}</p>
        
        <img src={movie.attributes.poster} alt="horror movie poster" width="500" />
        </>
    )
}

export default MovieCard;