const date = null

export default (state = date, action) => {
    switch (action.type) {
       
        case "SET_DATE":
            return action.payload
            
        default: 
        return state
    }
}