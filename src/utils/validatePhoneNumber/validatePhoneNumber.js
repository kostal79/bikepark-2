export default function validatePhoneNumber(phone) {
    const regPhone = /^[1-9][0-9]{9}$/;
    let error;
    if (!phone) {
        error = "Phone number is required"
    } else if (!regPhone.test(phone)) {
        error = "Incorrect format"
    }

    return error
}