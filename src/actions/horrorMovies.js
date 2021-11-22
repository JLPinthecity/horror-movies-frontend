//synchronous action creators
export const setUserMovies = (movies) => {
    
    return {
        type: "SET_USER_MOVIES", 
        payload: movies
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
        return fetch(`http://localhost:3001/horror_movies`, configObj)
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(setUserMovies(resp.data))
            }
        })
        .catch(console.log)
        }

}