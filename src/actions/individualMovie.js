import { setReviews } from './review.js';

const endpoint = "https://horror-movies-backend.herokuapp.com/"
const version = "api/v1"

//synchronous action creators
export const setMovie = (action) => {
    return {
        type: "SET_MOVIE", 
        payload: action
    }
}

export const movieLoaded = () => {
    return {
        type: "LOAD_MOVIE"
    }
}

//asynchronous action creators
export const getMoviePlusReviews = (slug) => {
    const configObj = {
        credentials: "include",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }

    return dispatch => {
        return fetch(endpoint + version + slug, configObj)
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(setMovie(resp.data))
                dispatch(setReviews(resp.included))
                dispatch(movieLoaded())
                
            }
        })
        .catch(console.log)
    }
}