import React from "react";
import { Field } from "formik";

const CheckBoxSubgroup = () => {
  return (
    <div>
      <Field type="checkbox" name="checked" value="Two" />
      <Field type="checkbox" name="checked" value="Three" />
    </div>
  );
};

export default CheckBoxSubgroup;
