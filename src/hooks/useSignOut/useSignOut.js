import { getAuth, signOut } from "firebase/auth";
import { useCallback, useState } from "react";

export function useSignOut() {
    const auth = getAuth();
    const [error, setError] = useState();
    const [isSignOut, setIsSignOut] = useState(false);

    const logOut = useCallback(() => {

        signOut(auth).then(() => {
            setIsSignOut(true);
        }).catch((error) => {
            setError(error)
        });

    }, [auth])

    return [error, isSignOut, logOut]
}