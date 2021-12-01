//synchronous action creators
export const setMovie = () => {
    
    return {
        type: "SET_MOVIE"
    }
}



//asynchronous action creators

export const getMoviePlusReviews = (url) => {
    debugger
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
                console.log(resp)
            }
        })
        .catch(console.log)
    }
}