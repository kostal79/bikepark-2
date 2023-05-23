import { db } from "../config/firebase";
import { updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

export async function authUpdateUserName(user, newName) {
  const docRef = doc(db, "users", user.uid)
  try {
    await updateProfile(user, { displayName: newName });
    await updateDoc(docRef, { user_name: newName });
    console.log("name was updated")

  } catch (error) {
    console.error(error)
  }

}