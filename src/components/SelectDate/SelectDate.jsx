import React, { useState } from "react";
import { useSelector } from "react-redux";
import getStringDate from "../../utils/getStringDate";
import CalendarBlock from "../Calendar-block/CalendarBlock";
import Modal from "../Modal/Modal";
import classes from "./SelectDate.module.css";
import { ReactComponent as SelectArrow} from "../../assets/select.svg"

const SelectDate = ({className}) => {
  const dateStart = useSelector((state) => state.calendar.dateStart);
  const dateFinish = useSelector((state) => state.calendar.dateFinish);
  const [isActive, setIsActive] = useState(false);
  const timeStart = useSelector((state) => state.calendar.timeStart);
  const timeFinish = useSelector((state) => state.calendar.timeFinish);

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
        <div className={classes.from}>
          <p className={classes.title}>Дата и время начала</p>
          <div className={classes.box} onClick={handleClick}>
            <div className={classes.text}>
              {`${getStringDate(dateStart)} ${timeStart ? timeStart : "--.--"}`}
            </div>
            <SelectArrow />
          </div>
        </div>
        <div className={classes.to}>
          <p className={classes.title}>Дата и время конца</p>
          <div className={classes.box} onClick={handleClick}>
            <div className={classes.text}>
              {` ${getStringDate(dateFinish)} ${timeFinish ? timeFinish : "--.--"}`}
            </div>
            <SelectArrow />
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
