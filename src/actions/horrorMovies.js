//synchronous action creators
export const setUserMovies = (horror_movies) => {
    
    return {
        type: "SET_USER_MOVIES", 
        payload: horror_movies
    }
}

//asynchronous action creators
export const getUserTrips = () => {

    const configObj = {
        credentials: "include",
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    }
}