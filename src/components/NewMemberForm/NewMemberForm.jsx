import { ErrorMessage, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { validateEmail } from "../../utils/validateEmail/validateEmail";
import validateName from "../../utils/validateName/validateName";
import { validatePassword } from "../../utils/validatePassword/validatePassword";
import validatePhoneNumber from "../../utils/validatePhoneNumber/validatePhoneNumber";
import ConfirmButton from "../ConfirmButton/ConfirmButton";
import StyledFormField from "../StyledFormField/StyledFormField";
import classes from "./NewMemberForm.module.css";
import { ReactComponent as EyeVisible } from "../../assets/eyeVisible.svg";
import { ReactComponent as EyeHidden } from "../../assets/eyeHidden.svg";
import AgreementConfirmation from "../AgreementConfirmation/AgreementConfirmation";
import { useDispatch } from "react-redux";
import { setActiveWindow } from "../../redux/slices/regFormSlice";
import IMask from "imask";

const NewMemberForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const initialValues = {
    user_name: "",
    user_phone: "",
    user_email: "",
    user_password: "",
    user_confirm_password: "",
    isConfirmed: false,
  };

  useEffect(() => {
    const element = document.getElementById("registration_phone");
    const maskOptions = {
      mask: "+{7}(000)000-00-00",
    };
    IMask(element, maskOptions);
  }, []);

  const tabHandler = (event) => {
    dispatch(setActiveWindow(event.target.value));
  };

  return (
    <div className={classes.container}>
      <Formik
        initialValues={initialValues}
        //TODO onSubmit
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(formikProps) => (
          <Form>
            <StyledFormField
              label="Имя*"
              name="user_name"
              type="text"
              placeholder="Введите имя"
              validate={validateName}
            />

            <ErrorMessage
              name={"user_name"}
              render={(msg) => (
                <div className={classes["error-message"]}>{msg}</div>
              )}
            />

            <StyledFormField
              id="registration_phone"
              label="Номер телефона*"
              name="user_phone"
              type="phone"
              placeholder="+7 (XXX) XXX-XX-XX"
              validate={validatePhoneNumber}
            />

            <ErrorMessage
              name={"user_phone"}
              render={(msg) => (
                <div className={classes["error-message"]}>{msg}</div>
              )}
            />

            <StyledFormField
              label="E-mail"
              name="user_email"
              type="email"
              placeholder="Введите E-mail"
              validate={validateEmail}
            />
            <ErrorMessage
              name={"user_email"}
              render={(msg) => (
                <div className={classes["error-message"]}>{msg}</div>
              )}
            />

            <div className={classes.password}>
              <StyledFormField
                label="Пароль*"
                name="user_password"
                type={isVisible ? "text" : "password"}
                placeholder="Введите пароль"
                validate={validatePassword}
              />
              <ErrorMessage
                name={"user_password"}
                render={(msg) => (
                  <div className={classes["error-message"]}>{msg}</div>
                )}
              />

              <div
                className={classes.tab}
                onClick={() => setIsVisible((prev) => !prev)}
              >
                {isVisible ? <EyeVisible /> : <EyeHidden />}
              </div>
            </div>

            <div className={classes.password}>
              <StyledFormField
                label="Подтвердите пароль*"
                name="user_confirm_password"
                type={isVisible ? "text" : "password"}
                placeholder="Введите пароль"
                validate={(value) => {
                  if (value !== formikProps.values.user_password) {
                    return "Confirmation error";
                  }
                }}
              />
              <ErrorMessage
                name={"user_confirm_password"}
                render={(msg) => (
                  <div className={classes["error-message"]}>{msg}</div>
                )}
              />

            </div>

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
    </div>
  );
};

export default NewMemberForm;
