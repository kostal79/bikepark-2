import React, { useState } from "react";
import dayBetween from "../../utils/dayBetween/dayBetween";
import classes from "./CurrentOrders.module.css";
import { ReactComponent as Arrow } from "../../assets/select.svg";
import dateFormat, { masks } from "dateformat";
import BlueButton from "../BlueButton/BlueButton";
import WhiteButton from "../WhiteButton/WhiteButton";
import { statusColor } from "../../utils/statusColor/statusColor";

const CurrentOrders = (props) => {
  console.log("props:  ", props);
  masks.orderDate = "dd.mm.yy";
  const amountOfDays = dayBetween(props.dateStart, props.dateFinish);

  const orderSum = props.bikes?.reduce((acc, bike) => {
    return Number(bike.price) * amountOfDays + acc;
  }, 0);

  const rentType = props.rentType === "days" ? "по дням" : "2 часа";
  const paymentType =
    props["payment-type"] === "on delivery" ? "На месте" : "Онлайн";

  const dateOfOrder = dateFormat(props.dateOfOrder, "orderDate")


  const [hidden, setHidden] = useState(true);
  const clickHandler = () => {
    setHidden((prev) => !prev);
  };

  const stColor = statusColor(props.status);

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
      <table className={classes.table__top}>
        <tbody>
          <tr onClick={clickHandler} className={classes.tr__clipable}>
            <td className={classes.td}>
              <Arrow
                className={classes.arrow}
                style={{ transform: hidden ? "rotate(-90deg)" : "none" }}
              />
              {`Заказ № ${props.docNumber}`}
            </td>
            <td className={classes.td}>{dateOfOrder}</td>
            <td className={classes.td}>{`${orderSum} AED`}</td>
            <td className={classes.td}>{props.isPaid ? "Есть" : "Нет"}</td>
            <td className={classes.td}>
              <div
                className={classes.status}
                style={{ color: stColor, borderColor: stColor }}
              >
                {props.status}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        className={classes.hidden}
        style={{ display: hidden ? "none" : "block" }}
      >
        <hr className={classes.line}></hr>
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
              <th className={`${classes.th} ${classes.footer__row}`}>
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
              <th className={classes.th}>Итого</th>
              <td
                className={classes.td}
                style={{ textAlign: "right" }}
              >{`${orderSum} AED`}</td>
            </tr>
          </tbody>
        </table>
        <div
          className={classes.additional}
          style={{ display: hidden ? "none" : "flex" }}
        >
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
    </div>
  );
};

export default CurrentOrders;
