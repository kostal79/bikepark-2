import React from "react";
import classes from "./OrderProcessedTableHeader.module.css";
import dateFormat, { masks } from "dateformat";
import { orderState } from "../../../redux/slices/orderSlice";
import { useSelector } from "react-redux";

const OrderProcessedTableHeader = () => {
  const order = useSelector(orderState);
  masks.readableTime = "dd.mm.yy";
  const rentType = order.rentType === "days" ? "По дням" : "2 часа";
  const paymentType = order.payment_type === "online" ? "Онлайн" : "На месте"
  const start = `${dateFormat(order.dateStart, "readableTime")} ${
    order.timeStart
  }`;
  const finish = `${dateFormat(order.dateFinish, "readableTime")} ${
    order.timeFinish
  }`;

  return (
    <div className={classes.container}>
      <table className={classes.table__top}>
          <thead> 
            <tr>
              <th className={classes.th__top}>Тип аренды</th>
              <th className={classes.th__top}>Дата и время начала</th>
              <th className={classes.th__top}>Дата и время конца</th>
              <th className={classes.th__top}>Доставка</th>
              <th className={classes.th__top}>Метод оплаты</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={classes.td}>{rentType}</td>
              <td className={classes.td}>{start}</td>
              <td className={classes.td}>{finish}</td>
              <td className={classes.td}>{order.deliveryType}</td>
              <td className={classes.td}>{paymentType}</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
};

export default OrderProcessedTableHeader;
