import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDateFinish,
  setDateStart,
  setIsClicked,
} from "../../../../../redux/slices/calendarSlice";
import classes from "./Day.module.css";

const Day = (props) => {
  const item = props.item;
  const currentMonth = props.currentMonth;
  const start = useSelector((state)=> state.calendar.dateStart)
  const finish = useSelector((state) => state.calendar.dateFinish)
  const clicked = useSelector((state) => state.calendar.isClicked)
  const dispatch = useDispatch();

  const [className, setClassName] = useState('')

  const saveStartDate = (date)  => {
    dispatch(setDateFinish(undefined))
    dispatch(setDateStart(date.toString()))
    dispatch(setIsClicked())
  }

  const saveFinishDate = (date) => {
    const startDate = new Date(start)
    if (date.valueOf() < startDate) {
      dispatch(setDateStart(undefined))
      dispatch(setDateFinish(undefined))
    };
    dispatch(setDateFinish(date.toString()))
    dispatch(setIsClicked())
  }

  function selectDate(event) {
    if (!clicked) {
      dispatch(setDateStart(undefined))
      dispatch(setDateFinish(undefined))
      saveStartDate(item);
    } else {
      saveFinishDate(item);
    }
  }

  useEffect(() => {
    function makeClassName() {
      if (start && (item.toString() === start)) {
        setClassName(classes.activeDateStart);
      } else if (item.toString() === finish) {
        setClassName(classes.activeDateFinish);
      } else if (
        start &&
        finish &&
        (item.valueOf() > (new Date(start)).valueOf()) &&
        (item.valueOf() < (new Date(finish)).valueOf())
      ) {
        setClassName(classes.activePeriod);
      } else if (
        item.getMonth() !== currentMonth ||
        item.valueOf() < Date.now() - 86400000
      ) {
        setClassName(classes.disabled);
      } else {
        setClassName(classes.day);
      }
    }

    makeClassName();
  }, [finish, start, item, currentMonth]);

  return (
    <div
      onClick={
        className === classes.disabled
          ? () => {
              return;
            }
          : selectDate
      }
      className={className}
    >
      <div className={classes.inside}>{item.getDate()}</div>
    </div>
  );
};

export default Day;
