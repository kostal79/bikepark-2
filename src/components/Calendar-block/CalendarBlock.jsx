import React, { useCallback } from "react";
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

const CalendarBlock = ({disabledDays}) => {
  const dispatch = useDispatch();
  const timeStart = useSelector(selectedTimeStart);
  const timeFinish = useSelector(selectedTimeFinish);

  const handleTimeStart = useCallback(
    (event) => dispatch(setTimeStart(event.target.value)),
    [dispatch]
  );
  const handleTimeFinish = useCallback((event) =>
    dispatch(setTimeFinish(event.target.value)),
    [dispatch]
  );

  return (
    <section className={classes.wrapper}>
      <Calendar
        initialYear={initialYearStart()}
        initialMonth={initialMonthStart()}
        handleTime={handleTimeStart}
        time={timeStart}
        id={"up"}
        disabledDays={disabledDays}

      />
      <Calendar
        initialYear={initialYearFinish()}
        initialMonth={initialMonthFinish()}
        handleTime={handleTimeFinish}
        time={timeFinish}
        id={"down"}
        disabledDays={disabledDays}
      />
    </section>
  );
};

export default CalendarBlock;
