const hover = null

export default (state = hover, action) => {
    switch (action.type) {
       
        case "SET_HOVER":
            debugger
            return action.payload


        case "RESET_HOVER":
            return hover
            
        default: 
        return state
    }
}