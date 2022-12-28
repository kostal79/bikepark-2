import React, { useState } from "react";
import { useSelector } from "react-redux";
import CalendarBlock from "../calendar-block/CalendarBlock";
import Modal from "../Modal/Modal";
import classes from "./SelectDate.module.css";

const SelectDate = () => {
  const dateStart = useSelector((state) => state.calendar.dateStart);
  const dateFinish = useSelector((state) => state.calendar.dateFinish);
  const [isActive, setIsActive] = useState(false);
  const timeStart = useSelector((state) => state.calendar.timeStart);
  const timeFinish = useSelector((state) => state.calendar.timeFinish);

  const getDate = (date) => {
    const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
    const result = date
      ? new Date(date).toLocaleDateString("ru-RU", options)
      : "--.--.----";
    return result;
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const closeCalendar = (event) => {
    if (event.target.className === `${classes["calendar--active"]}`) {
      setIsActive(false);
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.selectors}>
        <div className={classes.from}>
          <p className={classes.title}>Дата и время начала</p>
          <div className={classes.box} onClick={handleClick}>
            <div className={classes.text}>
              {`${getDate(dateStart)} ${timeStart ? timeStart : "--.--"}`}
            </div>
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.999451 1L5.99945 6L10.9995 1"
                stroke="#14233D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className={classes.to}>
          <p className={classes.title}>Дата и время конца</p>
          <div className={classes.box} onClick={handleClick}>
            <div className={classes.text}>
              {` ${getDate(dateFinish)} ${timeFinish ? timeFinish : "--.--"}`}
            </div>
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.999451 1L5.99945 6L10.9995 1"
                stroke="#14233D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <Modal>
        <div
          className={
            isActive
              ? classes["calendar--active"]
              : classes["calendar--disactive"]
          }
          onClick={closeCalendar}
        >
          <CalendarBlock />
        </div>
      </Modal>
    </div>
  );
};

new Date().toLocaleDateString();

export default SelectDate;
