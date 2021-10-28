export default (state = [], action) => {
    switch (action.type) {

        case "SET_USER_MOVIES":
            return action.payload

        default: 
        return state
    }
}