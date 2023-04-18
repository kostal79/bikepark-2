import { ErrorMessage } from "formik";
import React from "react";
import { validateEmail } from "../../utils/validateEmail/validateEmail";
import StyledFormField from "../StyledFormField/StyledFormField";

const RegistrationEmail = ({classes}) => {
  return (
    <section>
      <StyledFormField
        label="E-mail"
        name="user_email"
        type="email"
        placeholder="Введите E-mail"
        validate={validateEmail}
      />
      <ErrorMessage
        name={"user_email"}
        render={(msg) => <div className={classes["error-message"]}>{msg}</div>}
      />
    </section>
  );
};

export default RegistrationEmail;
