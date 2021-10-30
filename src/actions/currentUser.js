import { clearLoginForm } from './loginForm'
import { getUserMovies } from './horrorMovies'

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

export const login = credentials => {
    
    const configObj = {
        credentials: "include",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    }

    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", configObj)
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(setCurrentUser(resp.data))
                dispatch(getUserMovies(resp.data.id))
                dispatch(clearLoginForm())
            }
        })
        .catch(console.log)
    }
}
//we are returning a function that accepts dispatch as an argument
//resp.data.id = user.id



export const signup = credentials => {
    console.log("from signup", credentials)
    const configObj = {
        credentials: "include",
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    }

    return dispatch => {
        return fetch("http://localhost:3001/api/v1/signup", configObj)
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                console.log(resp)
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
        return fetch("http://localhost:3001/api/v1/get_current_user", configObj)
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(setCurrentUser(resp.data))
                dispatch(getUserMovies(resp.data.id))
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
        return fetch("http://localhost:3001/api/v1/logout", configObj)
        .then(resp => resp.json())
        .then(notice => dispatch({
            type: "CLEAR_CURRENT_USER"
        }))
    }
}