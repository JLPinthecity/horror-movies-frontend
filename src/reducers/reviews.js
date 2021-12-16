/* eslint-disable import/no-anonymous-default-export */
const initialState = {}

export default (state = initialState, action) => {
    
    switch (action.type) {
       
        case "SET_REVIEWS":
            return action.reviews

        case "ADD_REVIEW_TO_MOVIE":
            return state.concat(action.review)
            
        default: 
        return state
    }
}


// let data = state.relationships.reviews.data
// data = [...data,action.review]


// const returnVal = {
//         ...state, 
//         relationships: {reviews: {data: data}}
// }

// return returnVal