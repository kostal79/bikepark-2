import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import { useState } from "react";
import StyledFormField from "../StyledFormField/StyledFormField";
import classes from "./SigninForm.module.css";
import { ReactComponent as EyeVisible } from "../../assets/eyeVisible.svg";
import { ReactComponent as EyeHidden } from "../../assets/eyeHidden.svg";
import ConfirmButton from "../ConfirmButton/ConfirmButton";
import { useDispatch } from "react-redux";
import { setActiveWindow } from "../../redux/slices/regFormSlice";
import { sighInWithEmail } from "../../Api/authSignIn";

const SigninForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const tabHandler = (event) => {
    dispatch(setActiveWindow(event.target.value));
  };

  return (
    <div className={classes.container}>
      <Formik
        initialValues={{
          user_email: "",
          user_password: "",
        }}
        onSubmit={(values) => {
          sighInWithEmail(values.user_email, values.user_password)}}
      >
        {(formikProps) => (
          <Form>
            <StyledFormField
              label="E-mail"
              name="user_email"
              type="email"
              placeholder="Введите email"
            />

            <ErrorMessage
              name={"user_email"}
              render={(msg) => (
                <div className={classes["error-message"]}>{msg}</div>
              )}
            />

            <div className={classes.password}>
              <StyledFormField
                label="Пароль"
                name="user_password"
                type={isVisible ? "text" : "password"}
                placeholder="Введите пароль"
              />

              <div
                className={classes.tab}
                onClick={() => setIsVisible((prev) => !prev)}
              >
                {isVisible ? <EyeVisible /> : <EyeHidden />}
              </div>
            </div>
            <ConfirmButton text="Войти" type="submit" />
          </Form>
        )}
      </Formik>
      <div className={classes["button_container"]}>
        <button
          className={classes.recovery}
          onClick={tabHandler}
          value="recovery"
        >
          Забыли пароль?
        </button>
      </div>
    </div>
  );
};

export default SigninForm;
