/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    poster: "",
    title: "",
    director: ""
}

export default (state = initialState, action) => {
 
    switch (action.type) {

        case "UPDATE_NEW_MOVIE_FORM":
            return {
                ...state, 
                [action.formData.name]: action.formData.value
            }

        case "RESET_NEW_MOVIE_FORM": 
            return initialState

        default:
            return state
    }
}