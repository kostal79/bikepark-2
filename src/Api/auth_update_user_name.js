import { getAuth, updateProfile } from "firebase/auth";
import { updateDoc } from "firebase/firestore";

export async function authUpdateUserName(docRef, newName) {
  const auth = getAuth();
  try {
    await updateProfile(auth.currentUser, { displayName: newName });
    await updateDoc(docRef, { user_name: newName });
    console.log("name was updated")

  } catch (error) {
    console.error(error)
  }

}