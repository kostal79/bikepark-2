import React from "react";
import useDayInCalendar from "../../../../hooks/useDayInCalendar/useDayInCalendar";

import classes from "./Day.module.css";

const Day = ({currentMonth, item}) => {
  
  const {onClick, className, date} = useDayInCalendar(currentMonth, item)

  return (
    <div
      onClick={onClick}
      className={classes[`${className}`]}
    >
      <div className={classes.inside}>{date}</div>
    </div>
  );
};

export default Day;
