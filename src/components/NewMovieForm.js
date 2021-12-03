import React from 'react';
import { connect } from 'react-redux';
import { updateNewMovieForm } from '../actions/newMovieForm';

const NewTripForm = (props) => {

    const handleChange = event => {
        event.preventDefault();
        props.updateNewMovieForm(event.target.name, event.target.value)
    }

    return (

        <form>
            <input name="title" placeholder="Title" value={props.name} onChange={handleChange}/>
            <br/>
            <input name="director" placeholder="Director" value={props.director} onChange={handleChange}/>
            <br/>
            <input name="poster" placeholder="Link to image or movie poster" value={props.poster} onChange={handleChange}/>
            <br/>
            <input name="year_released" placeholder="Year released" value={props.year_released} onChange={handleChange}/>

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



export default connect(mapStateToProps, { updateNewMovieForm })(NewTripForm);

