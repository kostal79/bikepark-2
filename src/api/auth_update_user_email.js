import { db } from "../config/firebase";
import {  updateEmail } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

export async function authUpdateUserEmail(user, email) {
    const userId = user.uid;
    const docRef = doc(db, "users", userId);

    try {
        await updateEmail(user, email);
        await updateDoc(docRef, { user_email: email });
        console.log("email was changed")
    } catch (error) {
        console.error(error)
    }
}