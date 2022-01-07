//synchronous action creators

const endpoint = "https://horror-movies-backend.herokuapp.com/"
const moviesPath = "api/v1/horror_movies"

export const setMovies = (movies) => {
    return {
        type: "SET_MOVIES", 
        payload: movies
    }
}

export const addMovie = (movie) => {
    return {
        type: "ADD_MOVIE",
        payload: movie
    }
}


//asynchronous action creators
export const getMovies = () => {
    const configObj = {
        credentials: "include",
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    }

    return dispatch => {
        return fetch(endpoint + moviesPath, configObj)
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(setMovies(resp.data))
            }
        })
        .catch(console.log)
        }

}