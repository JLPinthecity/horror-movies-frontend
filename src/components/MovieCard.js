import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import "./Card.css";

const MovieCard = ({ movie }) => {
    return (
        
        <div className="card-wrapper">

            <div className="poster">
                <img src={movie.attributes.poster} alt={movie.attributes.title} width="500"/>
            </div>
            
            <div className="title">
                <h3>{movie.attributes.title}</h3>
            </div>

            <div className="rating">
                { movie.attributes.average_score > 0 ? <Rating score={movie.attributes.average_score}/> : "No reviews yet"} 
            </div>

            <div className="movie-title">
                <p>Directed by {movie.attributes.director}</p>
            </div>

            <div className="release-date">
                <p>Release date: {movie.attributes.year_released}</p>
            </div>

            <br/>
            <div className="link">
                <Link to={`/horror_movies/${movie.attributes.slug}`} className="transparent_button">View Movie</Link>
            </div>
            
        </div>
    )
}

export default MovieCard;