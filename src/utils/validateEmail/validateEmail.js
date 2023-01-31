export function validateEmail(email) {
    let error;
    const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regEmail.test(email)) {
        error = "Enter correct email"
    }

    return error
}