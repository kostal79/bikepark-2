import { doc } from "firebase/firestore";
import React, { memo } from "react";
import { updateDocumentNested } from "../../Api/update_document_nested";
import { db } from "../../config/firebase";
import { ReactComponent as Arrow } from "../../assets/select.svg";
import classes from "./AdminOrderHeader.module.css";

const AdminOrderHeader = ({ order, onHiddenHandler, isBodyHidden }) => {
  const colorSheme = {
    "в обработке": "rgba(255, 107, 0, 1)",
    доставляется: "rgba(237, 171, 0, 1)",
    "в работе": "rgba(40, 183, 55, 1)",
    завершен: "rgba(20, 35, 61, 1)",
  };

  const paymentStatus = (order) => {
    const docRef = doc(db, "orders", order.docId);
    const onChangeHandler = async (event) => {
      await updateDocumentNested(docRef, { isPaid: event.target.value });
    };
    return (
      <select
        className={classes.select__payment}
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
    const fontColor = colorSheme[order.status];
    const onChangeHandler = async (event) => {
      await updateDocumentNested(docRef, { status: event.target.value });
    };
    return (
      <select
        className={classes.select__status}
        name="orderStatus"
        defaultValue={order.status}
        onChange={(event) => onChangeHandler(event)}
        style={{ color: fontColor, boderColor: fontColor }}
      >
        <option value={"в обработке"}>в обработке</option>
        <option value={"доставляется"}>доставляется</option>
        <option value={"в работе"}>в работе</option>
        <option value={"завершен"}>завершен</option>
      </select>
    );
  };

  return (
    <tr key={order.docId} className={classes.tr}>
      <td className={classes.td} onClick={onHiddenHandler}>
        <span className={classes.arrow}><Arrow
          className={classes.arrow}
          style={{ transform: isBodyHidden ? "rotate(-90deg)" : "none" }}
        /></span>
        <span className={classes.number}>{`Заказ № ${order.docNumber}`}</span>
      </td>
      <td className={classes.td} onClick={onHiddenHandler}>
        {order.returns_date}
      </td>
      <td className={classes.td} onClick={onHiddenHandler}>
        {`${order.orderSum} AED`}
      </td>
      <td className={classes.td}>{paymentStatus(order)}</td>
      <td className={classes.td}>{orderStatus(order)}</td>
    </tr>
  );
};

export default memo(AdminOrderHeader);
