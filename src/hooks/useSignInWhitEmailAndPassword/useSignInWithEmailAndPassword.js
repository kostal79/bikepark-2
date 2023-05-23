import { signInWithEmailAndPassword } from "firebase/auth";
import { doc } from "firebase/firestore";
import { useCallback, useState } from "react";
import { getDocument } from "../../api/getDocument";
import { db } from "../../config/firebase";


export default function useSignInWithEmailAndPassword(auth) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState();
    const [logedUser, setLogedUser] = useState();
    const [userName, setUserName] = useState();

    const logIn = useCallback(async ( email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const uid = userCredential.user.uid;
            setLogedUser(uid);
            const docRef = doc(db, "users", uid)
            const data = await getDocument(docRef);
            setUserName(data.user_name)
        } catch (error) {
            console.log(error)
            setError("Неправильное поле пользователя или пароль!")
        } finally {
            setIsLoaded(true)
        }
    }, [auth])

    return {isLoaded, error, logedUser, userName, logIn}
}