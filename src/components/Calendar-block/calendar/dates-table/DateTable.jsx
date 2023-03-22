import React from "react";
import Day from "../day/Day";
import classes from "./DateTable.module.css";

const DatesTable = ({ currentArr, currentMonth }) => {
  let arrayOfDates = currentArr.map((item) => (
    <Day item={item} key={item} currentMonth={currentMonth} />
  ));
  return <div className={classes.days}>{arrayOfDates}</div>;
};

export default DatesTable;
