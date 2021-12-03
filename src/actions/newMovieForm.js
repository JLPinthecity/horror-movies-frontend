//synchronous actions 
export const updateNewMovieForm = (name, value) => {
    console.log("value is", value)
    return {
        type: "UPDATE_NEW_MOVIE_FORM",
        formData: { name, value }
    }
}

//asynchronous actions 

export const postNewMovie = (movieData) => {
    console.log("postNewMovie action creator")
    const configObj = {
        credentials: "include",
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(movieData)
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


