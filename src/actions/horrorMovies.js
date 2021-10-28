//synchronous action creators
export const setUserMovies = (horror_movies) => {
    
    return {
        type: "SET_USER_MOVIES", 
        payload: horror_movies
    }
}

//asynchronous action creators
export const getUserMovies = (user) => {

    const configObj = {
        credentials: "include",
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    }

    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/users/${user.id}/horror_movies`)
    }
}