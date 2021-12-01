//synchronous action creators
export const setMovie = (action) => {
    return {
        type: "SET_MOVIE", 
        payload: action
    }
}



//asynchronous action creators

export const getMoviePlusReviews = (url) => {
    const configObj = {
        credentials: "include",
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }

    return dispatch => {
        return fetch(`http://localhost:3001/api/v1${url}`, configObj)
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(setMovie(resp.data))
            }
        })
        .catch(console.log)
    }
}