import React from "react";
import BlueButton from "../BlueButton/BlueButton";
import WhiteButton from "../WhiteButton/WhiteButton";
import Modal from "../Modal/Modal";
import classes from "./PopupCancelOrder.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setPopupCancelOrder, setPopupCancelResult } from "../../redux/slices/popupSlice";
import { getUserId } from "../../redux/slices/authSlice";
import { deleteOrder } from "../../api/deleteOrder";

const PopupCancelOrder = ({ orderId }) => {
  const dispatch = useDispatch();
  const closePopup = () => {
    dispatch(setPopupCancelOrder(false));
  };
  const userId = useSelector(getUserId);

  const cancelOrder = async (orderId, userId) => {
    deleteOrder(orderId, userId)
    .then((resolve) => dispatch(setPopupCancelOrder(false)))
    .then((resolve) => dispatch(setPopupCancelResult(true)))
    .catch(error => console.error(error))
  };

  return (
    <Modal>
      <div className={classes.underlay}>
        <div className={classes.container}>
          <p className={classes.text}>
            Вы уверены, что хотите отменить заказ? Это действие нельзя будет
            отменить.
          </p>
          <BlueButton
            text="Отменить заказ"
            fontSize={20}
            height={60}
            onClick={() => cancelOrder(orderId, userId)}
          />
          <WhiteButton
            text="Оставить все как есть"
            fontSize={20}
            height={60}
            onClick={closePopup}
          />
        </div>
      </div>
    </Modal>
  );
};

export default PopupCancelOrder;
