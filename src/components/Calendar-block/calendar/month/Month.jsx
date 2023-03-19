import React from "react";
import CalendarBody from "../calendar-body/CalendarBody";
import CalendarHeader from "../calendar-header/CalendarHeader";
import classes from "./Month.module.css";

const Month = (props) => {
  return (
    <div className={classes.month}>
      <CalendarHeader {...props} />
      <CalendarBody {...props} />
    </div>
  );
};

export default Month;
