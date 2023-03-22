import React from "react";
import classes from "./TitleRow.module.css";

const TitleRow = () => {
  const dayslist = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
  let titleItems = dayslist.map((day) => <div key={day}>{day}</div>);

  return <div className={classes.daysNames}>{titleItems}</div>;
};

export default TitleRow;
