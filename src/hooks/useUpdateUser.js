import { authUpdatePassword } from "@api/auth_update_password";
import { authUpdateUserPhone } from "@api/auth_update_phone";
import { authUpdateUserEmail } from "@api/auth_update_user_email";
import { authUpdateUserName } from "@api/auth_update_user_name";
import { EmailAuthProvider, getAuth, reauthenticateWithCredential } from "firebase/auth";
import { useState } from "react";

const useUpdateUser = (user) => {
    const [isLoading, setIsLoading] = useState(false)

    const propmptCredentials = async () => {
        let password = prompt("Ведите действующий пароль");
        const userCredential = EmailAuthProvider.credential(user.email, password);
        return userCredential;
    };

    const updateProfile = async (values) => {
        setIsLoading(true)
        const credential = await propmptCredentials();
        const auth = getAuth()
        const user = auth.currentUser;
        await reauthenticateWithCredential(user, credential)
            .then(() => {
                authUpdateUserEmail(user, values.user_email);
                authUpdateUserName(user, values.user_name);
                authUpdateUserPhone(user, values.user_phone);
                if (values.user_password) authUpdatePassword(user, values.user_password)
            })
            .catch((error) => {
                console.error(error);
            }
            )
            .finally(() => setIsLoading(false));
    }

    return [updateProfile, isLoading];
}

export default useUpdateUser;