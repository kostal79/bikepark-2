import React, { useState } from "react";
import dayBetween from "../../utils/dayBetween/dayBetween";
import classes from "./CurrentOrders.module.css";
import { ReactComponent as Arrow } from "../../assets/select.svg";
import dateFormat, { masks } from "dateformat";
import BlueButton from "../BlueButton/BlueButton";
import WhiteButton from "../WhiteButton/WhiteButton";
import { statusColor } from "../../utils/statusColor/statusColor";

const CurrentOrders = (props) => {
  masks.orderDate = "dd.mm.yy";
  const amountOfDays = dayBetween(props.dateStart, props.dateFinish);

  const orderSum = props.bikes?.reduce((acc, bike) => {
    return Number(bike.price) * amountOfDays + acc;
  }, 0);

  const rentType = props.rentType === "days" ? "по дням" : "2 часа";
  const paymentType =
    props["payment-type"] === "on delivery" ? "На месте" : "Онлайн";
  const dateOfOrder = props.dateOfOrder
    ? dateFormat(props.dateOfOrder, "orderDate")
    : "--.--.--";

  const [hidden, setHidden] = useState(true);
  const clickHandler = () => {
    setHidden((prev) => !prev)
  }

  const stColor = statusColor(props.status);
  const orderDetails = props.bikes.map((bike) => {
    return (
      <tr key={bike.id} className={classes.tr}>
        <td
          colSpan={2}
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
      <table className={classes.table}>
        <thead className={classes.thead}>
          <tr className={classes.tr}>
            <th className={classes.th}>Номер заказа</th>
            <th className={classes.th}>Дата</th>
            <th className={classes.th}>Стоимость</th>
            <th className={classes.th}>Оплата</th>
            <th className={classes.th}>Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr className={classes.tr} onClick={clickHandler}>
            <td className={`${classes.td} ${classes.td_main}`}>
              <Arrow className={classes.arrow} />
              {`Заказ № ${props.docNumber}`}
            </td>
            <td className={`${classes.td} ${classes.td_main}`}>
              {dateOfOrder}
            </td>
            <td
              className={`${classes.td} ${classes.td_main}`}
            >{`${orderSum} AED`}</td>
            <td className={`${classes.td} ${classes.td_main}`}>
              {props.isPaid ? "Есть" : "Нет"}
            </td>
            <td className={`${classes.td} ${classes.td_main}`}>
              <div
                className={classes.status}
                style={{ color: stColor, borderColor: stColor }}
              >
                {props.status}
              </div>
            </td>
          </tr>
        </tbody>
        <thead className={classes.dropdown} hidden={hidden}>
          <tr>
            <th colSpan={2} className={classes.th}>
              Велосипеды
            </th>
            <th className={classes.th}>Цена</th>
            <th className={classes.th}>Кол-во дней</th>
            <th className={classes.th}>Сумма</th>
          </tr>
        </thead>
        <tbody className={classes.dropdown} hidden={hidden}>{orderDetails}</tbody>
        <br />
        <tfoot className={classes.dropdown} hidden={hidden} >
          <tr>
            <th className={`${classes.th} ${classes.footer__row}`} colSpan={4}>
              Доставка
            </th>
            <td
              className={`${classes.td} ${classes.footer__row}`}
              style={{ textAlign: "right" }}
            >
              0 AED
            </td>
          </tr>
          <tr>
            <th colSpan={4} className={classes.th}>
              Итого
            </th>
            <td
              className={classes.td}
              style={{ textAlign: "right" }}
            >{`${orderSum} AED`}</td>
          </tr>
        </tfoot>
      </table>
      <div className={`${classes.dropdown}  ${classes.additional}`} style={{display: hidden ? "none": "block"}}>
        <div className={classes.additional__info}>
          <p>{`Тип аренды: ${rentType}`}</p>
          <p>{`Период аренды: ${dateFormat(
            props.dateStart,
            "orderDate"
          )} - ${dateFormat(props.dateFinish, "orderDate")}`}</p>
          <p>{`Тип оплаты: ${paymentType}`}</p>
          <p>{`Тип доставки: ${props.deliveryType}`}</p>
        </div>
        <div className={classes.additional__buttons}>
          <BlueButton
            width={240}
            height={60}
            text={"Продлить аренду"}
            fontSize={18}
          />
          <WhiteButton
            width={240}
            height={60}
            text={"Отменить заказ"}
            fontSize={18}
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentOrders;
