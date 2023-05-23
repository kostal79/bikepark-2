import { updatePassword } from "firebase/auth";


export async function authUpdatePassword(user, newPassword) {
    if (user) {
        updatePassword(user, newPassword).then(() => {
            console.log("password was updated")
        }).catch((error) => {
            console.error(error)
        });
    } else {
        console.log("user undefined")
    }
}