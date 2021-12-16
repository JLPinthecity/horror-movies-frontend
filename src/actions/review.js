//synchronous action creators
export const addReview = (review) => {
    
    return {
        type: "ADD_REVIEW_TO_MOVIE",
        review
    }
}

export const setReviews = (reviews) => {
    
    return {
        type: "SET_REVIEWS",
        reviews
    }
}


