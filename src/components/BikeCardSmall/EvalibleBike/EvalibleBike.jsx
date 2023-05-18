import React, { useState } from "react";
import classes from "./EvalibleBike.module.css";
import WhiteButton from "../../WhiteButton/WhiteButton";
import BlueButton from "../../BlueButton/BlueButton";
import { useDispatch, useSelector } from "react-redux";
import {
  addBikeForOrder,
  removeBikeFromOrder,
} from "../../../redux/slices/orderBikeSlice";
import { getOrderDates } from "../../../redux/slices/calendarSlice";
import PopupCard from "../../PopupCard/PopupCard"

const EvalibleBike = (props) => {
  const {
    id,
    imageRef,
    brend,
    price,
    size,
    model,
    type,
    bookedDates,
    material,
    weight,
  } = props;

  const {dateStart, dateFinish, timeStart, timeFinish } = useSelector(getOrderDates)
  const [isPressed, setIsPressed] = useState(false);
  const [isPopupCardVisible, setIsPopupCardVisible] = useState(false);
  const dispatch = useDispatch();

  const closePopup = () => {
    setIsPopupCardVisible(false);
  };


  const addBike = () => {
    setIsPressed(true);
    dispatch(
      addBikeForOrder({
        id,
        imageRef,
        brend,
        price,
        size,
        model,
        type,
        bookedDates: [...bookedDates, {start: `${dateStart} ${timeStart}`, finish: `${dateFinish} ${timeFinish}`}],
        material,
        weight,
      })
    );
  };

  const removeBike = () => {
    setIsPressed(false);
    dispatch(removeBikeFromOrder(id));
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>{`${size}”`}</p>
        <p>{brend}</p>
      </div>
      <div
        className={classes.imageBox}
        onClick={() => setIsPopupCardVisible(true)}
      >
        <img className={classes.image} src={imageRef[0]} alt="bike" />
      </div>
      <div className={classes.info}>
        <p className={classes.description}>
          {type}
          <br />
          {`${brend} ${model} ${size}”`}
        </p>
        <div className={classes.price}>{price} AED/день</div>
        {!isPressed ? (
          <WhiteButton
            width={"100%"}
            height={40}
            text={"выбрать"}
            uppercase={true}
            onClick={addBike}
          />
        ) : (
          <BlueButton
            width={"100%"}
            height={40}
            text={"выбрано"}
            uppercase={true}
            fontSize={16}
            onClick={removeBike}
          />
        )}
      </div>
      {isPopupCardVisible && <PopupCard closePopup={closePopup} {...props} />}
    </div>
  );
};

export default EvalibleBike;
