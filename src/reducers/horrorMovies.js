export default (state = [], action) => {
    switch (action.type) {

        case "SET_MOVIES":
            return action.payload

        case "ADD_MOVIE":
            return state.horrorMovies.concat(action.payload)

        default: 
        return state
    }
}