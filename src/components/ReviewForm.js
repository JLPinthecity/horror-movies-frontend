import React from 'react';

const ReviewForm = () => {

    return (
        <div className="FormWrapper">

            <div className="FormContainer">
                <form>
                    <div>Watched this movie? Leave a quick review.</div>

                    <label>Title</label>
                    <input text="type" name="title" placeholder="Review Title"/>

                    <label>Title</label>
                    <input text="type" name="description" placeholder="Review Description"/>

                    <label>`Title</label>
                    <input text="type" name="title" placeholder="Review Title"/>

                    <label>Title</label>
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

export default ReviewForm;