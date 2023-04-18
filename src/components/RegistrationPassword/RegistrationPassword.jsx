import { ErrorMessage } from "formik";
import React, { useState } from "react";
import { ReactComponent as EyeVisible } from "../../assets/eyeVisible.svg";
import { ReactComponent as EyeHidden } from "../../assets/eyeHidden.svg";
import StyledFormField from "../StyledFormField/StyledFormField";
import { validatePassword } from "../../utils/validatePassword/validatePassword";

const RegistrationPassword = ({ classes, formikprops }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className={classes.password} style={{position: "relative"}}>
        <StyledFormField
          label="Пароль"
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
          style={{position: "absolute", right: "15px", top: "38px", cursor: "pointer"}}
          onClick={() => setIsVisible((prev) => !prev)}
        >
          {isVisible ? <EyeVisible /> : <EyeHidden />}
        </div>
      </div>

      <div className={classes.password}>
        <StyledFormField
          label="Подтвердите пароль"
          name="user_confirm_password"
          type={isVisible ? "text" : "password"}
          placeholder="Введите пароль"
          validate={(value) => {
            if (value !== formikprops.values.user_password) {
              return "Confirmation error";
            }
          }}
        />
        <ErrorMessage
          name={"user_confirm_password"}
          render={(msg) => (
            <div className={classes["error-message"]} >{msg}</div>
          )}
        />
      </div>
    </>
  );
};

export default RegistrationPassword;
