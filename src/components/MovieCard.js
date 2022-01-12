import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import "./Card.css";

const MovieCard = ({ movie }) => {

    const date = movie.attributes.year_released;

    const [yyyy, mm, dd] = date.split("-") 
    
    const newDate = `${mm}-${dd}-${yyyy}`;
    
    return (
        
        <div className="card-wrapper">

            <div className="poster">
                <img alt={movie.attributes.title} src={movie.attributes.poster} width="500"/>
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
                
                <p>Release date: {movie.attributes.year_released === null ? "No release date entered" : newDate} 
                </p>

            <br/>
            </div>

            <div className="link">
                <Link to={`/horror_movies/${movie.attributes.slug}`} className="transparent_button">View Reviews</Link>
            </div>
            
        </div>
    )
}

export default MovieCard;