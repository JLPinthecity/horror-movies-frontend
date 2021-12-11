import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { updateReviewForm } from '../actions/newReviewForm';
import { postNewReview } from '../actions/newReviewForm';

const ReviewForm = (props) => {

    const { title, description, rating } = props.reviewFormData 

    const formData = { title, description, rating }

    const handleChange = event => {
        console.log("name is", event.target.name, "value is", event.target.value)
        props.updateReviewForm(event.target.name, event.target.value)
    }
    //we want to pass the name and value to the action creator

    const handleSubmit = (event) => {
        event.preventDefault();
        props.postNewReview(formData, props.history)
    }

    return (
        <div className="FormWrapper">

            <div className="FormContainer">
                <form onSubmit={handleSubmit}>
                    <div>Watched this movie? Leave a quick review.</div>

                    <label>Title</label>
                    <input text="type" name="title" value={title} placeholder="Review Title" onChange={handleChange}/>

                    <label>Review Body</label>
                    <input text="type" name="description" value={description} placeholder="Review Description" onChange={handleChange}/>

                    <div className="ratingContainer">
                        <div className="ratingTitleText">Rate This Airline</div>

                        <button type="submit">Submit Your Review</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        reviewFormData: state.reviewForm,
        horrorMovieId: state.horrorMovie.id
    }
}

export default withRouter(connect(mapStateToProps, { updateReviewForm, postNewReview })(ReviewForm));