import { db } from "../config/firebase";
import { getAuth, updateEmail } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

export async function authUpdateUserEmail(email) {
    const auth = getAuth();
    const user = auth.currentUser;
    const userId = user.uid;
    const docRef = doc(db, "users", userId);

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