import React from "react";
import classes from "./InputTimeField.module.css";

const InputTimeField = ({ handleTime, time }) => {
  return (
    <input
      className={classes.input}
      type="time"
      onChange={handleTime}
      value={time}
    />
  );
};

export default InputTimeField;
