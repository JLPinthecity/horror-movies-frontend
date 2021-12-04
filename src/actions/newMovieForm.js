//synchronous actions 
export const updateNewMovieForm = (name, value) => {
    console.log("value is", value)
    return {
        type: "UPDATE_NEW_MOVIE_FORM",
        formData: { name, value }
    }
}

export const addMovie = (movie) => {
    return {
        type: "ADD_MOVIE",
        payload: {movie}
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
                console.log("post new movie FETCH RESP:", resp)
            }
        })
        .catch(console.log)
    }
}


