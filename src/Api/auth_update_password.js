import { getAuth, updatePassword } from "firebase/auth";


export async function authUpdatePassword(newPassword) {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
        await updatePassword(user, newPassword).then(() => {
            console.log("password was updated")
        }).catch((error) => {
            console.error(error)
        });

    }
}