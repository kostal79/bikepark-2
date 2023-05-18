import React from "react";
import classes from "./SelectDate.module.css";
import DropdownDates from "../OrderOptions/DropdownDates/DropdownDates";
import useReadableDate from "../../hooks/useReadableDate/useReadableDate";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopupCalendar,
  setPopupCalendar,
} from "../../redux/slices/popupSlice";
import PopupCalendar from "../PopupCalendar/PopupCalendar";

const SelectDate = () => {
  const calendarIsActive = useSelector(getPopupCalendar);
  const startValue = useReadableDate("start");
  const finshValue = useReadableDate("finish");
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setPopupCalendar(true));
  };

  return (
    <>
      <div className={classes.selectors}>
        <div className={classes.from}>
          <DropdownDates
            title="Дата и время начала"
            onClick={handleClick}
            value={startValue}
          />
        </div>
        <div className={classes.to}>
          <DropdownDates
            title="Дата и время конца"
            onClick={handleClick}
            value={finshValue}
          />
        </div>
      </div>
      {calendarIsActive && <PopupCalendar />}
    </>
  );
};

export default SelectDate;
