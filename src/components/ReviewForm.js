import React from 'react';
import { connect } from 'react-redux';

const ReviewForm = (props) => {

    const { title, description, rating } = props.reviewForm

    const handleChange = (event) => {

    }

    const handleSubmit = (event) => {

    }

    return (
        <div className="FormWrapper">

            <div className="FormContainer">
                <form>
                    <div>Watched this movie? Leave a quick review.</div>

                    <label>Title</label>
                    <input text="type" name="title" placeholder="Review Title"/>

                    <label>Review Body</label>
                    <input text="type" name="description" placeholder="Review Description"/>

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
        reviewFormData: state.reviewForm
    }
}

export default connect(mapStateToProps)(ReviewForm);