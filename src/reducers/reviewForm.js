const initialState = {
    title: "",
    description: "",
    rating: ""
}

export default (state = initialState, action) => {
 
    switch (action.type) {

        case "UPDATE_REVIEW_FORM":
            return {
                ...state, 
                [action.formData.name]: action.formData.value
            }

        case "CLEAR_REVIEW_FORM": 
            return initialState

        case "ADD_RATING":
            return {
                ...state, 
                rating: action.rating
            }
            
        default:
            return state
    }
}