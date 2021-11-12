const initialState = {
    showLinks: false
}

export default (state = initialState, action) => {
    switch (action.type) {

        case "SHOW_MENU_ITEMS":
            return { showLinks: true }

        default: 
        return state
    }
}