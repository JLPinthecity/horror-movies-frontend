const hover = null

export default (state = hover, action) => {
    switch (action.type) {
       
        case "SET_HOVER":
            return action.payload

        case "RESER_HOVER":
            return hover
            
        default: 
        return state
    }
}