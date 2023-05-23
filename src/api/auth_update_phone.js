import { db } from "../config/firebase";
import { doc, updateDoc } from "firebase/firestore";

export async function authUpdateUserPhone(user, newPhone) {
    const docRef = doc(db, "users", user.uid)
    try {
        await updateDoc(docRef, { user_phone: newPhone });
        console.log("phone was updated")

    } catch (error) {
        console.error(error)
    }

}