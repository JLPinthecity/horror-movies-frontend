const initialState = {
    name: "",
    username: "",
    password: ""
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    
    switch (action.type) {

        case "UPDATE_SIGNUP_FORM":
            return action.payload

        case "RESET_SIGNUP_FORM":
            return initialState

        default:
            return state

    }     

}