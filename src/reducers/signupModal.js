const openSignupModal = false

export default (state = openSignupModal, action) => {
    switch (action.type) {
       
        case "CLICKED_SIGNUP":
            return !state
            
        default: 
        return state
    }
}