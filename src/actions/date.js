//synchronous actions

export const updateDate = (date) => {
    
    return {
        type: "SET_DATE", 
        payload: date
    }
}

export const resetDate = () => {

    return {
        type: "RESET_DATE"
    }
}