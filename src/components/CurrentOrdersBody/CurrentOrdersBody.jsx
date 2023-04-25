import React from "react";
import BlueButton from "../BlueButton/BlueButton";
import WhiteButton from "../WhiteButton/WhiteButton";
import classes from "./CurrentOrdersBody.module.css";
import PopupCancelOrder from "../PopupCancelOrder/PopupCancelOrder";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopupCancelOrder,
  setPopupCancelOrder,
} from "../../redux/slices/popupSlice";

const CurrentOrdersBody = ({
  orderDetails,
  orderSum,
  hidden,
  rentType,
  rentPeriod,
  paymentType,
  deliveryType,
  status,
  orderId,
}) => {
  const popup = useSelector(getPopupCancelOrder);
  const dispatch = useDispatch();

  return (
    <>
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
            >{`${orderSum} AED`}</td>
          </tr>
        </tbody>
      </table>
      <div
        className={classes.additional}
        style={{ display: hidden ? "none" : "grid" }}
      >
        <div className={classes.additional__info}>
          <p>{`Тип аренды: ${rentType}`}</p>
          <p>{rentPeriod}</p>
          <p>{`Тип оплаты: ${paymentType}`}</p>
          <p>{`Тип доставки: ${deliveryType}`}</p>
        </div>
        <div
          className={classes.additional__buttons}
          style={{ display: status === "завершен" ? "none" : "flex" }}
        >
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
            onClick={() => dispatch(setPopupCancelOrder(true))}
          />
        </div>
      </div>
      {popup && <PopupCancelOrder orderId={orderId} />}
    </>
  );
};

export default CurrentOrdersBody;
