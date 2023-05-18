import React, { memo } from "react";
import Day from "../day/Day";
import classes from "./DateTable.module.css";

const DatesTable = ({ currentArr, currentMonth, disabledDays }) => {
  let arrayOfDates = currentArr.map((item) => (
    <Day
      item={item}
      key={item}
      currentMonth={currentMonth}
      disabledDays={disabledDays}
    />
  ));
  return <div className={classes.days}>{arrayOfDates}</div>;
};

export default memo(DatesTable, (prev, next) => {
  if (prev.currentArr.toString() !== next.currentArr.toString()) return false;
  if (prev.currenMonth !== next.currentMonth) return false;
  return true;
});
