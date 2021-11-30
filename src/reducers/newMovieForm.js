const initialState = {
    poster: "",
    title: "",
    director: "",
    year_released: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_NEW_MOVIE_FORM":
            return action.formData
        case "RESET_NEW_MOVIE_FORM": 
            return initialState
        default:
            return state
    }
}