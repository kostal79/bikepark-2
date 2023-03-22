import React from "react";
import classes from "./RentType.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setType } from "../../redux/slices/rentTypeSlice";

const RentType = ({ className }) => {
  const rentType = useSelector((state) => state.rentType.type);
  const dispatch = useDispatch();

  function handleType() {
    if (rentType === "days") {
      dispatch(setType("hours"));
    } else {
      dispatch(setType("days"));
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
              rentType === "days"
                ? classes.rentType__toggler
                : `${classes.rentType__toggler} ${classes.rentType__toggler_shifted}`
            }
          >
            {rentType === "days" ? "по дням" : "2 часа"}
          </div>
          <div className={classes.rentType__button} onClick={handleType}>
            2 часа
          </div>
        </div>
      </div>
  );
};

export default RentType;
