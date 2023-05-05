import React from "react";
import classes from "./InputDate.module.css";

const InputDate = ({ title, name, value, onChange }) => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>{title}</p>
      <input
        className={classes.input}
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        style={
          value
            ? { color: "rgba(20, 35, 61, 1)" }
            : { color: "rgba(115, 123, 152, 1)" }
        }
        tabIndex={1}
      />
    </div>
  );
};

export default InputDate;
