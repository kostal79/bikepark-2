import React, { useState } from "react";
import dayBetween from "../../utils/dayBetween/dayBetween";
import classes from "./CurrentOrders.module.css";
import dateFormat, { masks } from "dateformat";
import CurrentOrderHeader from "./CurrentOrdersHeader/CurrentOrderHeader";
import CurrentOrdersBody from "./CurrentOrdersBody/CurrentOrdersBody";

const CurrentOrders = (props) => {
  masks.orderDate = "dd.mm.yy";
  const amountOfDays = dayBetween(props.dateStart, props.dateFinish);
  const orderSum = props.orderSum;
  const rentType = props.rentType;
  const paymentType = props.payment_type;
  const dateOfOrder = dateFormat(props.dateOfOrder, "orderDate");
  const [hidden, setHidden] = useState(true);
  const clickHandler = () => {
    setHidden((prev) => !prev);
  };

  const rentPeriod = `Период аренды: ${dateFormat(
    props.dateStart,
    "orderDate"
  )} - ${dateFormat(props.dateFinish, "orderDate")}`;

  const orderDetails = props.bikes.map((bike) => {
    return (
      <tr key={bike.id} className={classes.tr}>
        <td
          className={classes.td}
        >{`${bike.type} ${bike.name} ${bike.model} ${bike.size}"`}</td>
        <td className={classes.td}>{`${bike.price}`}</td>
        <td className={classes.td}>{amountOfDays}</td>
        <td className={classes.td} style={{ textAlign: "right" }}>{`${
          amountOfDays * Number(bike.price)
        } AED`}</td>
      </tr>
    );
  });

  return (
    <div className={classes.container}>
      <CurrentOrderHeader
        dateOfOrder={dateOfOrder}
        docNumber={props.docNumber}
        orderSum={orderSum}
        isPaid={props.isPaid}
        clickHandler={clickHandler}
        hidden={hidden}
        status={props.status}
      />
      <div
        className={classes.hidden}
        style={{ display: hidden ? "none" : "block" }}
      >
        <CurrentOrdersBody
          orderDetails={orderDetails}
          orderSum={orderSum}
          hidden={hidden}
          rentType={rentType}
          rentPeriod={rentPeriod}
          paymentType={paymentType}
          deliveryType={props.deliveryType}
          status={props.status}
          orderId={props.orderId}
        />
      </div>
    </div>
  );
};

export default CurrentOrders;
