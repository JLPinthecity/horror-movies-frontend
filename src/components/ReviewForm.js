import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { updateReviewForm, postNewReview, addRating, setHover, resetHover } from '../actions/newReviewForm';
import { FaStar } from 'react-icons/fa';
import "./ReviewForm.css";

const ReviewForm = (props) => {

    const { title, description, rating } = props.reviewFormData 

    const formData = { title, description, rating }

    const ratingOptions = [5, 4, 3, 2, 1].map( (score) => {

        return (
            <Fragment>
                <label>
                    <input 
                    type="radio" 
                    value={score} 
                    name="rating" 
                    onClick={()=> props.addRating(score)} 
                    id={`rating-${score}`}
                    />
                    
                    <FaStar 
                    className="star" 
                    color={ score <= (props.hover || rating) ? "#ffc107": "#D3D3D3" }
                    onMouseEnter={() => props.setHover(score)}
                    onMouseLeave={() => props.resetHover()}
                    />
                </label>
            </Fragment>
        )
    })

    const handleChange = event => {
        console.log("name is", event.target.name, "value is", event.target.value)
        props.updateReviewForm(event.target.name, event.target.value)
    }
    //we want to pass the name and value to the action creator

    const handleSubmit = (event) => {
        event.preventDefault();
        props.postNewReview(formData, props.history, props.horrorMovie);
    }

    return (
        <div className="FormWrapper">

            <div className="FormContainer">
                <form onSubmit={handleSubmit}>

                    <div className="title">Watched this movie? Leave a quick review.</div>
                    <br/>

                    <label>Title</label>
                    <input type="text" name="title" value={title} placeholder="Enter review title" onChange={handleChange}/>
                    <br/>

                    <label>Review Body</label>
                    <input type="text" name="description" value={description} placeholder="Enter review body" onChange={handleChange}/>
                    <br/>

                    <div className="ratingContainer">
                        
                        <div className="ratingTitleText">Rate This Airline</div>

                        <div className="rating-box">
                            {ratingOptions}
                        </div>

                        <button className="transparent_button float_right" type="submit">Submit Review</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        reviewFormData: state.reviewForm,
        horrorMovie: state.horrorMovie, 
        rating: state.reviewForm.rating,
        hover: state.hoverEffect
    }
}

export default withRouter(connect(mapStateToProps, { updateReviewForm, postNewReview, addRating, setHover, resetHover })(ReviewForm));


//when we want to add a review
//we want the horror_movie object in state to refresh with new reviews
//so from here, we need to send the whole horror_movie object to the action creator that's posting the new review, so 
//we can dispatch the action to refresh the horror_movie object in state from there. 