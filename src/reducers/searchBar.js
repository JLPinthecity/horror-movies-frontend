const showSearchBar = false

export default (state = showSearchBar, action) => {
    switch (action.type) {
       
        case "CLICKED_SEARCH":
            return !state
            
        default: 
        return state
    }
}