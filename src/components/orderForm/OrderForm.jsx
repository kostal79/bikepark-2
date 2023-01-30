import React from "react";
import OrderList from "../OrderList/OrderList";
import OrderOptions from "../OrderOptions/OrderOptions";
import classes from "./OrderForm.module.css";

const OrderForm = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Заявка на аренду велосипедов</h1>
      <OrderOptions />
      <OrderList />
    </div>
  );
};

export default OrderForm;
