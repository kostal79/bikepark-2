export default function validatePhoneNumber(phone) {
    const regPhone = /^[1-9][0-9]{9}$/;
    let error;
    if (!phone) {
        return "Phone number is required"
    }
}