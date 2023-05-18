import React, { memo } from "react";
import useDayInCalendar from "../../../../hooks/useDayInCalendar/useDayInCalendar";

import classes from "./Day.module.css";

const Day = ({ currentMonth, item, disabledDays }) => {
  
  const { onClick, className, date } = useDayInCalendar(currentMonth, item, disabledDays);

  return (
    <div onClick={onClick} className={classes[`${className}`]}>
      <div className={classes.inside}>{date}</div>
    </div>
  );
};

export default memo(Day, (prev, next) => {
  if (prev.currentMoth !== next.currentMonth) return false;
  if (prev.item.toString() !== next.item.toString()) return false;
  return true;
});
