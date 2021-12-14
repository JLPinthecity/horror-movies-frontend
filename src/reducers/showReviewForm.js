const showReviewForm = false

export default (state = showReviewForm, action) => {
    
    switch (action.type) {

        case "SHOW_REVIEW_FORM":
            return !state
            
        default: 
        return state
    }
}