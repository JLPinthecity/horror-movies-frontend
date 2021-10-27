import { clearLoginForm } from '../actions/loginForm'

const initialState = {
    username: "",
    password: ""
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    
    switch (action.type) {
        case "UPDATE_LOGIN_FORM":
            return action.payload

        case "CLEAR_LOGIN_FORM":
            return initialState
            
        default: 
            return state
    }
}