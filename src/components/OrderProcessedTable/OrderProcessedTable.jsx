import React from "react";
import classes from "./OrderProcessedTable.module.css";
import OrderProcessedTableHeader from "./OrderProcessedTableHeader./OrderProcessedTableHeader";
import OrderProcessedTableBody from "./OrderProcessedTableBody/OrderProcessedTableBody";

const OrderProcessedTable = () => {
  return (
    <div className={classes.container}>
      <OrderProcessedTableHeader />
      <OrderProcessedTableBody />
    </div>
  );
};

export default OrderProcessedTable;
