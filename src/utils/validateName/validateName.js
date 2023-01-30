export default function validateName(name) {
    let error;
    const regName = /^[A-Z][a-z]{2,}$/;
    if (!name) {
        error = "Please write your name"
    } else if (name.toLowerCase() === "admin") {
        error = "Incorrect name"
    } else if (name.length < 3 || name.length > 20) {
        error = "Name length must be greater than 2 letters and less than 20 letters"
    } else if (!regName.test(name)) {
        error = "Incorrect name"
    }

    return error
}