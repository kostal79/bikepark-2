import React from "react";
import classes from "./RentType.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setType } from "../../redux/slices/rentTypeSlice";

const RentType = ({ className }) => {
  const rentType = useSelector((state) => state.rentType.type);
  const dispatch = useDispatch();

  function handleType() {
    if (rentType === "по дням") {
      dispatch(setType("2 часа"));
    } else {
      dispatch(setType("по дням"));
    }
  }

  return (
      <div className={className}>
        <p className={classes.rentType__title}>Тип аренды</p>
        <div className={classes.rentType__container}>
          <div className={classes.rentType__button} onClick={handleType}>
            по дням
          </div>
          <div
            className={
              rentType === "по дням"
                ? classes.rentType__toggler
                : `${classes.rentType__toggler} ${classes.rentType__toggler_shifted}`
            }
          >
            {rentType}
          </div>
          <div className={classes.rentType__button} onClick={handleType}>
            2 часа
          </div>
        </div>
      </div>
  );
};

export default RentType;
