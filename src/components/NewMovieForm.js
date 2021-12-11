import React from 'react';
import { connect } from 'react-redux';
import { updateNewMovieForm } from '../actions/newMovieForm';
import { postNewMovie } from '../actions/newMovieForm';
import { updateDate } from '../actions/date';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Form.css'

const NewTripForm = (props) => {

    const { title, poster, director, year_released } = props.formData
        
    const movieData = { title, director, poster, year_released }

    const selectedDate = props.date

    const handleChange = event => {
        props.updateNewMovieForm(event.target.name, event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.postNewMovie(movieData, selectedDate, props.history);
    }

    const handleDateChange = (selectedDate) => {
        props.updateDate(selectedDate)
    }

    return (

        <div className="FormWrapper">

            <div className="FormContainer">


            <div className="first_row">
                <div className="title">
                    Add Movie
                </div><br/><br/>
            </div>

            <div className="body">

                <form onSubmit={handleSubmit}>
                    
                    <label>Title</label>
                    <input name="title" placeholder="Title" value={title} onChange={handleChange}/>
                    <br/>
                    <label>Director</label>
                    <input name="director" placeholder="Director" value={director} onChange={handleChange}/>
                    <br/>
                    <label>Link to Image (Movie Poster)</label>
                    <input name="poster" placeholder="Link to image or movie poster" value={poster} onChange={handleChange}/>
                    <br/>

                    
                    <label>Release Date</label>
                    <Calendar className="react-calendar" 
                    onChange={handleDateChange} 
                    value={props.date}/>

                    <br/>
                    <input type="submit" className="primary-button" value="Add New Movie"/>
                    <br/>

                </form>
            </div>
        </div>

        </div>
    )
};

const mapStateToProps = state => {

    return {
        formData: state.newMovieForm,
        date: state.date
    }

}

export default connect(mapStateToProps, { updateNewMovieForm, postNewMovie, updateDate })(NewTripForm);

