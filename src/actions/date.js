//synchronous actions

export const updateDate = (date) => {
    
    return {
        type: "SET_DATE", 
        payload: date
    }
}