import { signInWithEmailAndPassword } from "firebase/auth";
import { doc } from "firebase/firestore";
import { useCallback, useState } from "react";
import { getDocument } from "../../Api/getDocument";
import { db } from "../../config/firebase";


export default function useSignInWithEmailAndPassword(auth) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [logedUser, setLogedUser] = useState();
    const [userName, setUserName] = useState();

    const logIn = useCallback(async ( email, password) => {
        setIsLoading(true)
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const uid = userCredential.user.uid;
            setLogedUser(uid);
            const docRef = doc(db, "users", uid)
            const data = await getDocument(docRef);
            setUserName(data.user_name)
            console.log("userName:  ", data.user_name)
        } catch (error) {
            console.log(error)
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }, [auth])

    return [isLoading, error, logedUser, userName, logIn]
}