import { ErrorMessage } from "formik";
import React from "react";
import validateName from "../../utils/validateName/validateName";
import StyledFormField from "../StyledFormField/StyledFormField";

const RegistrationName = ({classes}) => {
    return (
    <section>
      <StyledFormField
        label="Имя"
        name="user_name"
        type="text"
        placeholder="Введите имя"
        validate={validateName}
      />

      <ErrorMessage
        name={"user_name"}
        render={(msg) => <div className={classes["error-message"]}>{msg}</div>}
      />
    </section>
  );
};

export default RegistrationName;
