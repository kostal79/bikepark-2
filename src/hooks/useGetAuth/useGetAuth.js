import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function useGetAuth() {
    const [isAuth, setIsAuth] = useState(false);
    const [error, setError] = useState();
    const [userId, setUserId] = useState();
    const auth = getAuth();

    useEffect(() => {
        const listener = (auth) => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const uid = user.uid;
                    setIsAuth(true);
                    setUserId(uid);                    
                } else {
                    setError("not authorized")
                    setIsAuth(false)
                }
            });
        }
        listener(auth)
    }, [auth])


    return [isAuth, error, userId]
}