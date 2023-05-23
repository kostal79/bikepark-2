import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getUserData } from "@redux/slices/authSlice";
import classes from "./AccountProfile.module.css";
import BlueButton from "@components/BlueButton/BlueButton";
import ConfirmButton from "@components/ConfirmButton/ConfirmButton";
import RegistrationPassword from "@components/RegistrationPassword/RegistrationPassword";
import RegistrationName from "@components/RegistrationName/RegistrationName";
import RegistrationEmail from "@components/RegistrationEmail/RegistrationEmail";
import RegistrationPhone from "@components/RegistrationPhone/RegistrationPhone";
import { getPopupReauthenticateUser } from "@redux/slices/popupSlice";
import PopupReautenticateUser from "@components/PopupReautenticateUser/PopupReautenticateUser";
// import { doc } from "firebase/firestore";
// import { db } from "../../config/firebase";
// import { getUserId } from "@redux/slices/authSlice";
// import { updateDocumentNested } from "@api/update_document_nested";
import { authUpdateUserEmail } from "@api/auth_update_user_email";
import { authUpdatePassword } from "@api/auth_update_password";
import { authUpdateUserName } from "@api/auth_update_user_name";
import {
  AuthCredential,
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AccountProfile = () => {
  // const userId = useSelector(getUserId);
  const userData = useSelector(getUserData);
  const { user_name, user_email, user_phone } = userData;
  const initialValues = {
    user_name: user_name,
    user_email: user_email,
    user_phone: user_phone,
    user_password: "",
    user_confirm_password: "",
  };

  const isReathenticateUserIsActive = useSelector(getPopupReauthenticateUser);
  const auth = getAuth();

  const propmptCredentials = async () => {
    let email = prompt("Введите действующий email");
    let password = prompt("Ведите пароль");
    const userCredential = EmailAuthProvider.credential(email, password);
    return userCredential;
  };

  const updateProfile = async (values) => {
    const user = auth.currentUser;
    const credential = await propmptCredentials();
    reauthenticateWithCredential(user, credential)
      .then(() => {
        authUpdateUserEmail(values.user_email);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Formik
        enableReinitialize={true}
        onSubmit={(values) => updateProfile(values)}
        initialValues={initialValues}
      >
        {(formikProps) => (
          <Form>
            <div className={classes.block}>
              <RegistrationName classes={classes} />
              <RegistrationEmail classes={classes} />
              <RegistrationPhone classes={classes} />
              <h2 className={classes.subtitle}>Изменение пароля</h2>
              <RegistrationPassword
                classes={classes}
                formikprops={formikProps}
              />
              <div className={classes.button}>
                <ConfirmButton text="Сохранить" type="submit" />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AccountProfile;
