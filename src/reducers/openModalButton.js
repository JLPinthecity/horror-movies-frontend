const openModal = false

export default (state = openModal, action) => {
    switch (action.type) {

        case "CLICKED_BUTTON":
            return !state
            
        default: 
        return state
    }
}