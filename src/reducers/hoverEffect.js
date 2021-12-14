const hover = null

export default (state = hover, action) => {
    switch (action.type) {
       
        case "SET_HOVER":
            return action.rating


        case "RESET_HOVER":
            return hover
            
        default: 
        return state
    }
}