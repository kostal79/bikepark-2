import React from "react";
import classes from "./HamburgerCross.module.css";

const HamburgerCross = ({isActive}) => {
  return (
    <div
      className={
        isActive ? `${classes.icon} ${classes["icon-active"]}` : classes.icon
      }
    >
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
    </div>
  );
};

export default HamburgerCross;
