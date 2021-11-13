const showLinks = false

export default (state = showLinks, action) => {
    switch (action.type) {

        case "SHOW_MENU_ITEMS":
            return !state
            
        default: 
        return state
    }
}