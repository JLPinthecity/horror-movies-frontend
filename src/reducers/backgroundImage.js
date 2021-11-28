const backgroundImage = "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"

const topImage = "https://images.unsplash.com/photo-1542014740373-51ad6425eb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"

export default (state = backgroundImage, action) => {
    switch (action.type) {

        case "SWITCH_IMAGE":
            return topImage

        case "REVERT_IMAGE":
            return backgroundImage
            
            
        default: 
        return state
    }
}