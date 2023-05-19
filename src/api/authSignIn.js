import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";


export async function sighInWithEmail(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential.user)
        
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    }

}
