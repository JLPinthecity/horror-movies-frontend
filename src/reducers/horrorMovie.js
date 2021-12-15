const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {

        case "SET_MOVIE":
            return action.payload

        case "ADD_REVIEW_TO_MOVIE":
            let data = state.relationships.reviews.data
            data = [...data,action.review]
            

            const returnVal = {
                    ...state, 
                    relationships: {reviews: {data: data}}
            }
            
            return returnVal
            
        default: 
        return state
    }
}