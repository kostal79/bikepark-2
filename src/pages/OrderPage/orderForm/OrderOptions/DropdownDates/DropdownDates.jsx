import React, { memo } from "react";
import { ReactComponent as SelectArrow } from "@assets/select.svg";
import classes from "./DropdownDates.module.css";

const DropdownDates = ({ title, onClick, value }) => {
  return (
    <>
      <p className={classes.title}>{title}</p>
      <div className={classes.box} onClick={onClick}>
        <div className={classes.text}>{value}</div>
        <SelectArrow />
      </div>
    </>
  );
};

export default memo(DropdownDates, (prev, next) => {
  if (prev.value !== next.value ) return false;
  return true;
});
