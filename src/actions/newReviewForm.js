import { addReview } from "./review";

const endpoint = "https://horror-movies-backend.herokuapp.com/"
const reviewsPath = "api/v1/reviews"

//synchronous actions
export const updateReviewForm = (name, value) => {
    console.log("value is", value)

    return {
        type: "UPDATE_REVIEW_FORM",
        formData: { name, value }
    }
}

export const showReviewForm = () => {
    return {
        type: "SHOW_REVIEW_FORM"
    }
}

export const clearReviewForm = () => {
    return {
        type: "CLEAR_REVIEW_FORM"
    }
}

export const addRating = (rating) => {
    return {
        type: "ADD_RATING",
        rating
    }
}

export const setHover = (rating) => {
    return {
        type: "SET_HOVER",
        rating
    }
}

export const resetHover = () => {
    return {
        type: "RESET_HOVER"
    }
}

//asynchronous actions 
export const postNewReview = (formData, history, horrorMovie) => {

    const sendableData = {
        title: formData.title,
        description: formData.description,
        rating: formData.rating,
        horror_movie_id: parseInt(horrorMovie.id)
    }
 

    const configObj = {
        credentials: "include",
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(sendableData)
    }

    return dispatch => {
        return fetch(endpoint + reviewsPath, configObj)
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(addReview(resp.data))
                dispatch(clearReviewForm())
                dispatch(showReviewForm())
                history.push(history.location.pathname)

            }
        })
        .catch(console.log)
    }
}

//after we post a review, what do we need to do? 
//a) need to add review to horror movie object - done
//b) reset form - done
//c) close review form - done
//d) after we add review, we need to update the number of reviews and update the average score
