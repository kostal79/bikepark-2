export function validatePassword(password) {
    let error;
    const regularPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*+-])[a-zA-Z0-9!@#$%^&*+-]{6,16}$/
    if (!password) {
        error = "Please enter the password"
    } else if (password.length < 6 || password.length > 16) {
        error = "Password should contain minimum 6 and maximum 16 characters"
    }
    
    else if (!regularPassword.test(password)) {
        error = "Password should contain atleast one number and one special character !@#$%^&*+-"
    }

    return error
}