import { Form, Formik } from "formik";
import React from "react";
import ConfirmButton from "../ConfirmButton/ConfirmButton";
import classes from "./NewMemberForm.module.css";
import AgreementConfirmation from "../AgreementConfirmation/AgreementConfirmation";
import { useDispatch } from "react-redux";
import { setActiveWindow } from "../../redux/slices/regFormSlice";
import useCreateUserWithEmailAndPassword from "../../hooks/useCreateUserWithEmailAndPassword/useCreateUserWithEmailAndPassword";
import { auth } from "../../config/firebase";
import Loader from "../Loader/Loader";
import RegistrationName from "../RegistrationName/RegistrationName";
import RegistrationPhone from "../RegistrationPhone/RegistrationPhone";
import RegistrationPassword from "../RegistrationPassword/RegistrationPassword";
import RegistrationEmail from "../RegistrationEmail/RegistrationEmail";

const NewMemberForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    user_name: "",
    user_phone: "",
    user_email: "",
    user_password: "",
    user_confirm_password: "",
    isConfirmed: false,
  };

  const [, , isLoading, createNewUserWithEmail] =
    useCreateUserWithEmailAndPassword(auth);

  const tabHandler = (event) => {
    dispatch(setActiveWindow(event.target.value));
  };

  return (
    <div className={classes.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => createNewUserWithEmail(values)}
      >
        {(formikProps) => (
          <Form>
            <RegistrationName classes={classes} />
            <RegistrationEmail classes={classes} />
            <RegistrationPhone classes={classes} />
            <RegistrationPassword classes={classes} formikProps={formikProps} />
            <AgreementConfirmation />
            {formikProps.errors.isConfirmed &&
              formikProps.touched.isConfirmed && (
                <div className={classes["error-message"]}>
                  {formikProps.errors.isConfirmed}
                </div>
              )}
            <ConfirmButton text="Регистрация" type="submit" />
          </Form>
        )}
      </Formik>
      <div className={classes.bottom}>
        <p className={classes["bottom-text"]}>Уже авторизованы?</p>
        <button
          className={classes["bottom-link"]}
          onClick={tabHandler}
          value="signin"
        >
          Войти
        </button>
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default NewMemberForm;
