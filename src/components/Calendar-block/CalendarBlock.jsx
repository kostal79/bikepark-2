import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedTimeFinish,
  selectedTimeStart,
  setTimeFinish,
  setTimeStart,
} from "../../redux/slices/calendarSlice";
import {
  initialMonthFinish,
  initialMonthStart,
  initialYearFinish,
  initialYearStart,
} from "../../utils/CalendarInitial";
import Calendar from "./calendar/Calendar";
import classes from "./CalendarBlock.module.css";

const CalendarBlock = () => {
  const dispatch = useDispatch();
  const timeStart = useSelector(selectedTimeStart);
  const timeFinish = useSelector(selectedTimeFinish);

  const handleTimeStart = (event) => dispatch(setTimeStart(event.target.value));
  const handleTimeFinish = (event) =>
    dispatch(setTimeFinish(event.target.value));

  return (
    <section className={classes.wrapper}>
      <Calendar
        initialYear={initialYearStart()}
        initialMonth={initialMonthStart()}
        time={timeStart}
        handleTime={handleTimeStart}
      />
      <Calendar
        initialYear={initialYearFinish()}
        initialMonth={initialMonthFinish()}
        handleTime={handleTimeFinish}
        time={timeFinish}
      />
    </section>
  );
};

export default CalendarBlock;
