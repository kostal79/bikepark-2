import React from "react";
import { useDispatch } from "react-redux";
import { setPopupCancelResult } from "../../redux/slices/popupSlice";
import { useNavigate } from "react-router-dom";
import classes from "./PopupCancelResult.module.css";
import Modal from "../Modal/Modal";
import BlueButton from "../BlueButton/BlueButton";
import WhiteButton from "../WhiteButton/WhiteButton";

const PopupCancelResult = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToAccount = () => {
    dispatch(setPopupCancelResult(false));
  };

  const toMainPage = () => {
    dispatch(setPopupCancelResult(false));
    navigate("/");
  };

  return (
    <Modal>
      <div className={classes.underlay}>
        <div className={classes.container}>
          <p className={classes.text}>Заказ отменен</p>
          <div className={classes.buttons}>
            <BlueButton
              text="Назад в ЛК"
              fontSize={20}
              height={60}
              onClick={goToAccount}
            />
            <WhiteButton
              text="На главную страницу"
              fontSize={20}
              height={60}
              onClick={toMainPage}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PopupCancelResult;
