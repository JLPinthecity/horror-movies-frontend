import { addMovie } from './horrorMovies';
import { resetDate } from './date';

const endpoint = "https://horror-movies-backend.herokuapp.com/"
const moviesPath = "api/v1/horror_movies"

//synchronous actions 
export const updateNewMovieForm = (name, value) => {
    // console.log("value is", value)
    return {
        type: "UPDATE_NEW_MOVIE_FORM",
        formData: { name, value }
    }
}

export const clearMovieForm = () => {
    return {
        type: "RESET_NEW_MOVIE_FORM"
    }
}

//asynchronous actions 
export const postNewMovie = (movieData, selectedDate, history) => {
    // console.log("postNewMovie action fired")
    const sendableData = {
        title: movieData.title,
        poster: movieData.poster,
        director: movieData.director,
        year_released: selectedDate.toISOString().split("T")[0]
    }

    const configObj = {
        credentials: "include",
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(sendableData)
    }

    return dispatch => {
        return fetch(endpoint + moviesPath, configObj)
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(addMovie(resp.data))
                dispatch(clearMovieForm())
                dispatch(resetDate())
                history.push('/horror_movies')
            }
        })
        .catch(console.log)
    }
}


