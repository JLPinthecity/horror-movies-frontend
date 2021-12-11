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

        case "RESET_REVIEW_FORM": 
            return initialState

        default:
            return state
    }
}