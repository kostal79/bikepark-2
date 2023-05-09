export default function clearObjectFromEmptyValues(params) {
    const clearedObject = {};
    for (let [key, value] of Object.entries(params)) {
        if (value) {
            clearedObject[key] = value;
        }
    }
    return clearedObject;
};