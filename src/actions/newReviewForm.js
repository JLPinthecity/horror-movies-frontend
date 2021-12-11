export const updateReviewForm = (name, value) => {
    console.log("value is", value)

    return {
        type: "UPDATE_REVIEW_FORM",
        formData: { name, value }
    }
}