const date = new Date();

export default (state = date, action) => {
    switch (action.type) {
       
        case "SET_DATE":
            return action.payload
            
        default: 
        return state
    }
}