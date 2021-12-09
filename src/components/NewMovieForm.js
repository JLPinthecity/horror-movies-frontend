import React from 'react';
import { connect } from 'react-redux';
import { updateNewMovieForm } from '../actions/newMovieForm';
import { postNewMovie } from '../actions/newMovieForm';
import { updateDate } from '../actions/date';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

const NewTripForm = (props) => {

    const { title, poster, director, year_released } = props.formData
        
    const movieData = { title, director, poster, year_released }

    const selectedDate = props.date

    const handleChange = event => {
        props.updateNewMovieForm(event.target.name, event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.postNewMovie(movieData, props.history);
    }

    const handleDateChange = (selectedDate) => {
        props.updateDate(selectedDate)
    }

    return (

        <form onSubmit={handleSubmit}>

            <input name="title" placeholder="Title" value={title} onChange={handleChange}/>
            <br/>
            <input name="director" placeholder="Director" value={director} onChange={handleChange}/>
            <br/>
            <input name="poster" placeholder="Link to image or movie poster" value={poster} onChange={handleChange}/>
            <br/>

            <Calendar className="react-calendar" onChange={handleDateChange} value={props.date}/>

            <input type="submit" value="Add New Movie"/>

        </form>

    )
};

const mapStateToProps = state => {

    return {
        formData: state.newMovieForm,
        date: state.date
    }

}

export default connect(mapStateToProps, { updateNewMovieForm, postNewMovie, updateDate })(NewTripForm);

