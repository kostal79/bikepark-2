import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useCallback, useState } from "react";
import { db } from "../../config/firebase";


export default function useCreateUserWithEmailAndPassword(auth) {
    const [error, setError] = useState();
    const [registeredUser, setRegisteredUser] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const createNewUserWithEmail = useCallback(
        async ({user_email, user_password, user_name, user_phone}) => {
            try {
                setIsLoading(true);
                const userCredential = await createUserWithEmailAndPassword(auth, user_email, user_password);
                const uid = userCredential.user.uid;
                const displayName = []
                setRegisteredUser(uid)
                const docRef = doc(db, "users", uid);
                const docData = { user_name, user_email, user_phone }
                await setDoc(docRef, docData)
                console.log("New user added")

            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }, [auth]
    )

    return [error, registeredUser, isLoading, createNewUserWithEmail]
}