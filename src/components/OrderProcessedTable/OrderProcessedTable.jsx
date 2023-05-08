import React, { useEffect, useState } from "react";
import classes from "./OrderProcessedTable.module.css";
import OrderProcessedTableHeader from "./OrderProcessedTableHeader./OrderProcessedTableHeader";
import OrderProcessedTableBody from "./OrderProcessedTableBody/OrderProcessedTableBody";
import { db } from "../../config/firebase";
import { doc } from "firebase/firestore";
import { getDocument } from "../../Api/getDocument";

const OrderProcessedTable = ({ newOrderId }) => {
  const docRef = doc(db, "orders", newOrderId);
  const [order, setOrder] = useState();
  useEffect(() => {
    const getOrder = async (docRef) => {
      const order = await getDocument(docRef);
      setOrder(order);
    };
    getOrder(docRef);
  });

  return (
    <>
      {order && (
        <div className={classes.container}>
        <h1 className={classes.title}>Ваш заказ успешно<br />оформлен</h1>
        <div className={classes.table}>
          <OrderProcessedTableHeader order={order} />
          <OrderProcessedTableBody order={order} />
        </div>
        </div>
      )}
    </>
  );
};

export default OrderProcessedTable;
