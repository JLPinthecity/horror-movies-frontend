const movieLoaded = false

export default (state = movieLoaded, action) => {
    switch (action.type) {
       
        case "LOAD_MOVIE":
            return true
            
        default: 
        return state
    }
}

//this is so we know when the fetch happened so we can properly load Movie Header component within Movie Show component