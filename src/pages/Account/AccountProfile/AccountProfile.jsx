import React from "react";
import { Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { getUserData } from "@redux/slices/authSlice";
import classes from "./AccountProfile.module.css";
import ConfirmButton from "@components/ConfirmButton/ConfirmButton";
import RegistrationName from "@components/RegistrationName/RegistrationName";
import RegistrationEmail from "@components/RegistrationEmail/RegistrationEmail";
import RegistrationPhone from "@components/RegistrationPhone/RegistrationPhone";
import {
  getAuth,
} from "firebase/auth";
import ChangePassword from "./ChangePassword/ChangePassword";
import useUpdateUser from "@hooks/useUpdateUser";
import Loader from "@components/Loader/Loader";

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
  const auth = getAuth();
  const user = auth.currentUser;
  const [updateProfile, isLoading] = useUpdateUser(user);

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
              <ChangePassword classes={classes} formikProps={formikProps}/>
              <div className={classes.button}>
                <ConfirmButton text="Сохранить" type="submit" />
              </div>
            </div>
          </Form>
        )}
      </Formik>
      {isLoading && <Loader />}
    </>
  );
};

export default AccountProfile;
