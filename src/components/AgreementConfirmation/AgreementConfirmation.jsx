import { Field } from "formik";
import React from "react";
import { validateAgreement } from "../../utils/validateAgreement/validateAgreement";
import classes from "./AgreementConfirmation.module.css"

const AgreementConfirmation = () => {
  return (
    <div className={classes.container}>
      <label className={classes.label}>
        Согласие на обработку персональных данных
      </label>
      <Field
        className={classes.checkbutton}
        type="checkbox"
        name="isConfirmed"
        validate={validateAgreement}
      />

    </div>
  );
};

export default AgreementConfirmation;
