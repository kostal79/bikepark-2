import { getAuth, updateEmail } from "firebase/auth";
import { updateDoc } from "firebase/firestore";

export async function authUpdateUserEmail(email, docRef) {
    const auth = getAuth();
    if (auth.currentUser) {
        try {
            await updateEmail(auth.currentUser, email);
            await updateDoc(docRef, {user_email: email});
            console.log("email was changed")
        } catch (error) {
            console.error(error)
        }
    } else {
        console.log("authorize error")
    }
}