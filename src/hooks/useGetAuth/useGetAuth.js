import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDocument } from "../../Api/getDocument";
import { db } from "../../config/firebase";
import { setUserData } from "../../redux/slices/authSlice";

export default function useGetAuth() {
    const [isAuth, setIsAuth] = useState(false);
    const [error, setError] = useState();
    const [userId, setUserId] = useState();
    const dispatch = useDispatch();
    const auth = getAuth();

    useEffect(() => {
        const listener = (auth) => {
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    const uid = user.uid;
                    setIsAuth(true);
                    setUserId(uid);
                    const userRef = doc(db, "users", uid);
                    const userData = await getDocument(userRef);
                    dispatch(setUserData(userData))
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