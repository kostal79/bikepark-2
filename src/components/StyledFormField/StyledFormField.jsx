import { Field } from "formik";
import React from "react";
import classes from "./StyledFormField.module.css";

const StyledFormField = ({label, ...props }) => {
  return (
    <div className={classes.wrapper}>
      <label className={classes.label}>{label}</label>
      <Field className={classes.field} {...props}></Field>
    </div>
  );
};

export default StyledFormField;
