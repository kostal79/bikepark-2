import React from "react";
import { Field } from "formik";
import CheckBoxSubgroup from "./CheckBoxSubgroup";

const CheckBoxGroup = () => {
  return (
    <div role="group" aria-labelledby="checkbox-group">
      <Field type="checkbox" name="checked" value="One" />
        <CheckBoxSubgroup />
    </div>
  );
};

export default CheckBoxGroup;
