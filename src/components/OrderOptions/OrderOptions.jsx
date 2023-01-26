import React from "react";
import { useSelector } from "react-redux";
import getStringDate from "../../utils/getStringDate";
import classes from "./OrderOptions.module.css";

const OrderOptions = () => {
  const rentType =
    useSelector((state) => state.rentType.type) === "days"
      ? "По дням"
      : "По часам";

  const dateStart = getStringDate(
    useSelector((state) => state.calendar.dateStart)
  );
  const timeStart = useSelector((state) => state.calendar.timeStart || "12:00");
  const dateFinish = getStringDate(
    useSelector((state) => state.calendar.dateFinish)
  );
  const timeFinish = useSelector(
    (state) => state.calendar.timeFinish || "12:00"
  );
  const deliveryType = useSelector((state) => state.deliveryType.text);
  return (
    <div className={classes.container}>
      <section className={classes.section}>
        <h4 className={classes.title}>Тип аренды</h4>
        <p className={classes.info}>{rentType}</p>
      </section>
      <section className={classes.section}>
        <h4 className={classes.title}>Доставка</h4>
        <p className={classes.info}>{deliveryType}</p>
      </section>
      <section className={classes.section}>
        <h4 className={classes.title}>Дата и время<br />начала</h4>
        <p className={classes.info}>
          {dateStart} {timeStart}
        </p>
      </section>
      <section className={classes.section}>
        <h4 className={classes.title}>Дата и время<br />конца</h4>
        <p className={classes.info}>
          {dateFinish} {timeFinish}
        </p>
      </section>
    </div>
  );
};

export default OrderOptions;
