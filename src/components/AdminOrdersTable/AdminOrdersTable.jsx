import React, { useEffect, useState } from "react";
import classes from "./AdminOrdersTable.module.css";
import Spinner from "../Spinner/Spinner";
import { updateDocumentNested } from "../../Api/update_document_nested";
import { db } from "../../config/firebase";
import { doc } from "firebase/firestore";

const AdminOrdersTable = ({ orders, isLoading }) => {
  const [orderList, setOrderList] = useState();

  const paymentStatus = (order) => {
    const docRef = doc(db, "orders", order.docId);
    const onChangeHandler = async (event) => {
      await updateDocumentNested(docRef, { isPaid: event.target.value });
    };
    return (
      <select
        name="payment"
        onChange={(event) => onChangeHandler(event)}
        defaultValue={order.isPaid}
      >
        <option value="оплачен">оплачен</option>
        <option value="не оплачен">не оплачен</option>
      </select>
    );
  };

  const orderStatus = (order) => {
    const docRef = doc(db, "orders", order.docId);
    const onChangeHandler = async (event) => {
      await updateDocumentNested(docRef, { status: event.target.value });
      console.log("status changed")
    };
    return (
      <select
        name="orderStatus"
        defaultValue={order.status}
        onChange={(event) => onChangeHandler(event)}
      >
        <option value={"в обработке"}>в обработке</option>
        <option value={"доставляется"}>доставляется</option>
        <option value={"в работе"}>в работе</option>
        <option value={"завершен"}>завершен</option>
      </select>
    );
  };

  useEffect(() => {
    const renderOrders = (orders) => {
      const orderInfo = orders.map((order) => {
        return (
          <tr key={order.docId}>
            <td className={classes.th}>{order.docNumber}</td>
            <td className={classes.th}>{order.returns_date}</td>
            <td className={classes.th}>{order.orderSum}</td>
            <td className={classes.th}>{paymentStatus(order)}</td>
            <td className={classes.th}>{orderStatus(order)}</td>
          </tr>
        );
      });
      setOrderList(orderInfo);
    };
    renderOrders(orders);
  }, [orders]);

  return (
    <div className={classes.container}>
      <table className={classes.table__top}>
        <thead>
          <tr>
            <th className={classes.th__top}>Номер заказа</th>
            <th className={classes.th__top}>Дата</th>
            <th className={classes.th__top}>Стоимость</th>
            <th className={classes.th__top}>Оплата</th>
            <th className={classes.th__top}>Статус</th>
          </tr>
        </thead>
        <tbody>{orderList}</tbody>
      </table>
      <div className={classes.spinner}>{isLoading ? <Spinner /> : null}</div>
    </div>
  );
};

export default AdminOrdersTable;
