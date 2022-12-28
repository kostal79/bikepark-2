import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTime } from "../../redux/slices/clockSlice";
import calcTime from "../../utils/calcTime";
import classes from "./Clock.module.css";

const Clock = () => {
  const time = useSelector((state) => state.clock.date);
  const dispatch = useDispatch();

  useEffect(() => {
    const tick = () => {
      setInterval(() => {
        dispatch(setTime(calcTime("Dubai", "+4")));
      }, 1000);
    };
    tick();
    return clearInterval(tick);
  }, [dispatch]);

  return (
    <div className={classes.clock}>
      <div className={classes.time}>{time}</div>
      <div className={classes.title}>Time in Dubai</div>
    </div>
  );
};

export default Clock;
