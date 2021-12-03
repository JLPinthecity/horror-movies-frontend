//synchronous actions 

export const updateNewMovieForm = (name, value) => {
    console.log("value is", value)
    return {
        type: "UPDATE_NEW_MOVIE_FORM",
        formData: { name, value }
    }
}