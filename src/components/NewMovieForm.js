import React from 'react';
import { connect } from 'react-redux';
import { updateNewMovieForm } from '../actions/newMovieForm';
import { postNewMovie } from '../actions/newMovieForm';

const NewTripForm = ({ title, director, poster, year_released, history, updateNewMovieForm }) => {

    const movieData = { title, director, poster, year_released }

    const handleChange = event => {
        updateNewMovieForm(event.target.name, event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        postNewMovie(movieData, history);
    }

    return (

        <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Title" value={title} onChange={handleChange}/>
            <br/>
            <input name="director" placeholder="Director" value={director} onChange={handleChange}/>
            <br/>
            <input name="poster" placeholder="Link to image or movie poster" value={poster} onChange={handleChange}/>
            <br/>
            <input name="year_released" placeholder="Year released" value={year_released} onChange={handleChange}/>

            <input type="submit" value="Add New Movie"/>

        </form>

    )
};

const mapStateToProps = state => {

    const { title, poster, director, year_released } = state.newMovieForm
    return {
        title,
        poster,
        director,
        year_released

    }
}



export default connect(mapStateToProps, { updateNewMovieForm, postNewMovie })(NewTripForm);

