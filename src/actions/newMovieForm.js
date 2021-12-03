//synchronous actions 

export const updateNewMovieForm = (name, value) => {
    return {
        type: "UPDATE_NEW_TRIP_FORM",
        formData: { name, value}
    }
}