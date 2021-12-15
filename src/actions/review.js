//synchronous action creators
export const addReview = (review) => {
    
    return {
        type: "ADD_REVIEW_TO_MOVIE",
        review
    }
}