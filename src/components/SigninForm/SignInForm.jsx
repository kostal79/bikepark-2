import { Form, Formik } from "formik";
import React from "react";
import { useState } from "react";
import StyledFormField from "../StyledFormField/StyledFormField";
import classes from "./SigninForm.module.css";
import { ReactComponent as EyeVisible } from "../../assets/eyeVisible.svg";
import { ReactComponent as EyeHidden } from "../../assets/eyeHidden.svg";
import ConfirmButton from "../ConfirmButton/ConfirmButton";
import validatePhoneNumber from "../../utils/validatePhoneNumber/validatePhoneNumber";
import { validatePassword } from "../../utils/validatePassword/validatePassword";
import { useDispatch } from "react-redux";
import { setActiveWindow } from "../../redux/slices/regFormSlice";

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
          user_phone: "",
          user_password: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <StyledFormField
              label="Номер телефона"
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
            <div className={classes.password}>
              <StyledFormField
                label="Пароль"
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
