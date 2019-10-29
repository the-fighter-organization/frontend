
export const reduxFormOnSubmitFail = (errors: any) => {
    const keys = Object.keys(errors)
    if (keys.length === 0) {
        return;
    }

    const errorMessage = keys.map(key => typeof errors[key] === 'object' ? errors[key]._error : errors[key]).join('\n')
    alert(errorMessage)
}