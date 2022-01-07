import { clearLoginForm } from './loginForm';
import { getMovies } from './horrorMovies';
import { clearSignupForm } from './signupForm';
import { openOrCloseModal } from './openOrCloseModal';

const endpoint = "https://horror-movies-backend.herokuapp.com/"
const loginPath = "api/v1/login"
const signupPath = "api/v1/signup"
const currentUserPath = "api/v1/get_current_user"
const logoff = "api/v1/logoff"

//synchronous action creators
export const setCurrentUser = (user) => {
    
    return {
        type: "SET_CURRENT_USER", 
        payload: user
    }
}

export const clearCurrentUser = () => {

    return {
        type: "CLEAR_CURRENT_USER"
    }
}

//returns an object

//asynchronous action creators

export const login = (credentials, history) => {
    
    const configObj = {
        credentials: "include",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    }

    return dispatch => {
        return fetch(endpoint + loginPath, configObj)
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(setCurrentUser(resp.data))
                dispatch(getMovies())
                dispatch(clearLoginForm())
                history.push("/")
            }
        })
        .catch(console.log)
    }
}
//we are returning a function that accepts dispatch as an argument
//resp.data.id = user.id



export const signup = credentials => {
    // console.log("from signup", credentials)
    const configObj = {
        credentials: "include",
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    }

    return dispatch => {
        return fetch(endpoint + signupPath, configObj)
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(setCurrentUser(resp.data))
                dispatch(getMovies())
                dispatch(clearSignupForm())

            }
        })
        .catch(console.log)
    }
}



export const getCurrentUser = () => {
    // console.log("DISPATCHING GET CURRENT USER")
    const configObj = {
        credentials: "include",
        method: 'GET',
        header: {
            "Content-Type": "application/json" 
        }
    }

    return dispatch => {
        return fetch(endpoint + currentUserPath, configObj)
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                dispatch(getMovies())
            } else {
                dispatch(setCurrentUser(resp.data))
                dispatch(getMovies())
            }
        })
    }
}

//resp.data = user here

export const logout = () => {
    
    const configObj = {
        credentials: "include",
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }

    return dispatch => {
        return fetch(endpoint + logoff, configObj)
        .then(resp => resp.json())
        .then(notice => dispatch({
            type: "CLEAR_CURRENT_USER"
        }))
    }
}