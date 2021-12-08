import { addMovie } from './horrorMovies'

//synchronous actions 
export const updateNewMovieForm = (name, value) => {
    console.log("value is", value)
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
export const postNewMovie = (movieData, history) => {
    console.log("from postNewMovie action creator", movieData)

    const sendableData = {
        title: movieData.title,
        poster: movieData.poster,
        director: movieData.director,
        year_released: movieData.year_released
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
        return fetch("http://localhost:3001/api/v1/horror_movies", configObj)
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(addMovie(resp.data))
                dispatch(clearMovieForm())
                history.push('/horror_movies')
            }
        })
        .catch(console.log)
    }
}


