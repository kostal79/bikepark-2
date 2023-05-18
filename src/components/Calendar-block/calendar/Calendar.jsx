import React, { memo } from "react";
import DatesTable from "./dates-table/DateTable";
import TitleRow from "./title-row/TitleRow";
import CalendarHeader from "./calendar-header/CalendarHeader";
import classes from "./Calendar.module.css";
import useCalendar from "../../../hooks/useCalendar/useCalendar";

const Calendar = ({ initialYear, initialMonth, time, handleTime, id, disabledDays}) => {
  const { monthName, nextMonth, prevMonth, currentArr, currentMonth } =
    useCalendar(initialYear, initialMonth);

  return (
    <div className="calendar">
      <div className={classes.month}>
        <CalendarHeader
          monthName={monthName}
          nextMonth={nextMonth}
          handleTime={handleTime}
          time={time}
          prevMonth={prevMonth}
        />
        <div className={classes.calendar__body}>
          <TitleRow />
          <DatesTable currentArr={currentArr} currentMonth={currentMonth} disabledDays={disabledDays}/>
        </div>
      </div>
    </div>
  );
};

export default memo(Calendar);
