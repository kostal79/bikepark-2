import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getIsAuth } from "../../redux/slices/authSlice";
import { setSignIn } from "../../redux/slices/modalSlice";
import Modal from "../Modal/Modal";
import { getBikeForOrder } from "../../redux/slices/orderBikeSlice";
import BlueButton from "../BlueButton/BlueButton";
import classes from "./PopupBook.module.css"

const PopupBook = () => {
    const navigate = useNavigate();
    const isAuth = useSelector(getIsAuth);
    const dispatch = useDispatch();
    const bikesInOrder = useSelector(getBikeForOrder);

    const onBookHandler = () => {
        if (isAuth) {
          navigate("/order");
        } else {
          dispatch(setSignIn(true));
        }
      };

  return (
    <Modal>
      <div className={classes.popup}>
        <div className={classes.popup__container}>
          <p className={classes.popup__text}>
            Количество велосипедов: <span>{bikesInOrder.length}</span>
          </p>
          <BlueButton
            width={300}
            height={60}
            text="Забронировать"
            fontSize={18}
            onClick={onBookHandler}
          />
        </div>
      </div>
    </Modal>
  );
};

export default PopupBook;
