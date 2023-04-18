import { ErrorMessage } from "formik";
import React, { useEffect } from "react";
import validatePhoneNumber from "../../utils/validatePhoneNumber/validatePhoneNumber";
import StyledFormField from "../StyledFormField/StyledFormField";
import IMask from "imask";

const RegistrationPhone = ({classes}) => {
  useEffect(() => {
    const element = document.getElementById("registration_phone");
    const maskOptions = {
      mask: "+7 000-000-00-00",
    };
    IMask(element, maskOptions);
  }, []);
  return (
    <section>
      <StyledFormField
        id="registration_phone"
        label="Номер телефона*"
        name="user_phone"
        type="phone"
        placeholder="+7 XXX-XXX-XX-XX"
        validate={validatePhoneNumber}
      />

      <ErrorMessage
        name={"user_phone"}
        render={(msg) => <div className={classes["error-message"]}>{msg}</div>}
      />
    </section>
  );
};

export default RegistrationPhone;
