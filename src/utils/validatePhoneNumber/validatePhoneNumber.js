export default function validatePhoneNumber(phone) {
    const regPhone = /^\+7 [0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
    let error;
    if (!phone) {
        error = "Phone number is required"
    } else if (!regPhone.test(phone)) {
        error = "Incorrect format"
    }
    return error;
}