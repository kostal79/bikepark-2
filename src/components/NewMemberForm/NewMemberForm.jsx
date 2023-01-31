import { Form, Formik } from "formik";
import React, { useState } from "react";
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

const NewMemberForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const tabHandler = (event) => {
    dispatch(setActiveWindow(event.target.value));
  };

  return (
    <div className={classes.container}>
      <Formik
        initialValues={{
          user_name: "",
          user_phone: "",
          user_email: "",
          user_password: "",
          isConfirmed: false,
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <StyledFormField
              label="Имя*"
              name="user_name"
              type="text"
              placeholder="Введите имя"
              validate={validateName}
            />

            {errors.user_name && touched.user_name && (
              <div className={classes["error-message"]}>{errors.user_name}</div>
            )}
            <StyledFormField
              label="Номер телефона*"
              name="user_phone"
              type="phone"
              placeholder="Введите номер телефона"
              validate={validatePhoneNumber}
            />

            {errors.user_phone && touched.user_phone && (
              <div className={classes["error-message"]}>
                {errors.user_phone}
              </div>
            )}

            <StyledFormField
              label="E-mail"
              name="user_email"
              type="email"
              placeholder="Введите E-mail"
              validate={validateEmail}
            />

            {errors.user_email && touched.user_email && (
              <div className={classes["error-message"]}>
                {errors.user_email}
              </div>
            )}
            <div className={classes.password}>
              <StyledFormField
                label="Пароль*"
                name="user_password"
                type={isVisible ? "text" : "password"}
                placeholder="Введите пароль"
                validate={validatePassword}
              />
              {errors.user_password && touched.user_password && (
                <div className={classes["error-message"]}>
                  {errors.user_password}
                </div>
              )}
              <div
                className={classes.tab}
                onClick={() => setIsVisible((prev) => !prev)}
              >
                {isVisible ? <EyeVisible /> : <EyeHidden />}
              </div>
            </div>
            <AgreementConfirmation />
            {errors.isConfirmed && touched.isConfirmed && (
              <div className={classes["error-message"]}>
                {errors.isConfirmed}
              </div>
            )}
            <ConfirmButton text="Войти" type="submit" />
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
