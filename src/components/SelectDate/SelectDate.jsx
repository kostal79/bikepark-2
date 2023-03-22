import React, { useState } from "react";
import CalendarBlock from "../Calendar-block/CalendarBlock";
import Modal from "../Modal/Modal";
import classes from "./SelectDate.module.css";
import DropdownDates from "../OrderOptions/DropdownDates/DropdownDates";
import useReadableDate from "../../hooks/useReadableDate/useReadableDate";

const SelectDate = ({ className }) => {
  const [isActive, setIsActive] = useState(false);
  const startValue = useReadableDate("start");
  const finshValue = useReadableDate("finish");

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const closeCalendar = (event) => {
    if (event.target.className === `${classes["calendar--active"]}`) {
      setIsActive(false);
    }
  };
  return (
    <div className={className}>
      <div className={classes.selectors}>
        <DropdownDates
          className={classes.from}
          title="Дата и время начала"
          onClick={handleClick}
          value={startValue}
        />
        <DropdownDates
          className={classes.to}
          title="Дата и время конца"
          onClick={handleClick}
          value={finshValue}
        />
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

export default SelectDate;
