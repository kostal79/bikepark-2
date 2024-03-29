import React from "react";
import classes from "./AdminOrderBody.module.css";
import dayBetween from "@utils/dayBetween/dayBetween";
import dateFormat, { masks } from "dateformat";
import { useSelector } from "react-redux";
import { getUserData } from "@redux/slices/authSlice";

const AdminOrderBody = ({ order }) => {
  const amountOfDays = dayBetween(order.dateStart, order.dateFinish);
  const userInfo = useSelector(getUserData);
  const userEmail = userInfo.user_email;

  masks.orderDate = "dd.mm.yy";

  const rentPeriod = `Период аренды: ${dateFormat(
    order.dateStart,
    "orderDate"
  )} ${order.timeStart} - ${dateFormat(order.dateFinish, "orderDate")} ${
    order.timeFinish
  }`;

  const orderDetails = order?.bikes?.map((bike) => {
    return (
      <tr key={bike.id} className={classes.tr}>
        <td
          className={classes.td}
        >{`${bike.type} ${bike.brend} ${bike.model} ${bike.size}"`}</td>
        <td className={classes.td}>{`${bike.price} AED`}</td>
        <td className={classes.td}>{amountOfDays}</td>
        <td className={classes.td} style={{ textAlign: "right" }}>{`${
          amountOfDays * Number(bike.price)
        } AED`}</td>
      </tr>
    );
  });

  return (
    <>
      <table className={classes.table__center}>
        <thead>
          <tr>
            <th className={classes.th}>Велосипеды</th>
            <th className={classes.th}>Цена</th>
            <th className={classes.th}>Кол-во дней</th>
            <th className={classes.th}>Сумма</th>
          </tr>
        </thead>
        <tbody>{orderDetails}</tbody>
      </table>
      <hr className={classes.line}></hr>
      <table className={classes.table__bottom}>
        <tbody>
          <tr>
            <th className={classes.th}>Доставка</th>
            <td className={classes.td} style={{ textAlign: "right" }}>
              0 AED
            </td>
          </tr>
          <tr>
            <th className={classes.th}>Итого</th>
            <td
              className={classes.td}
              style={{ textAlign: "right" }}
            >{`${order.orderSum} AED`}</td>
          </tr>
        </tbody>
      </table>
      <div className={classes.additional}>
        <div className={classes.additional__info}>
          <h4 className={classes.additional__title}>Информация об аренде</h4>
          <p>{`Тип аренды: ${order.rentType}`}</p>
          <p>{rentPeriod}</p>
          <p>{`Тип оплаты: ${order.payment_type}`}</p>
          <p>{`Тип доставки: ${order.deliveryType}`}</p>
        </div>
        <div className={classes.additional__info}>
          <h4 className={classes.additional__title}>Контакты пользователя</h4>
          <p>{order.name}</p>
          <p>{order.phone}</p>
          <p>{userEmail}</p>
          <p>{order.addres}</p>
        </div>
      </div>
    </>
  );
};

export default AdminOrderBody;
