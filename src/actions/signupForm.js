export const updateSignupForm = (formData) => {

    return {
        type: "UPDATE_SIGNUP_FORM", 
        payload: formData
    }
}

export const clearSignupForm = () => {

    return {
        type: "CLEAR_SIGNUP_FORM"
    }
}
