import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addBikeForOrder,
  removeBikeFromOrder,
} from "../../redux/slices/orderBikeSlice";
import isBooked from "../../utils/isBooked/isBooked";
import BlueButton from "../BlueButton/BlueButton";
import WhiteButton from "../WhiteButton/WhiteButton";
import classes from "./BikeCardSmall.module.css";
import PopupCard from "../PopupCard/PopupCard";

const BikeCardSmall = (props) => {
  const { id, imageRef, bookedDates, brend, price, size, model, type } = props;
  const startDate = useSelector((state) => state.calendar.dateStart);
  const finishDate = useSelector((state) => state.calendar.dateFinish);
  const startTime = useSelector((state) => state.calendar.timeStart);
  const finishTime = useSelector((state) => state.calendar.timeFinish);
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();

  const addBike = () => {
    setIsPressed(true);
    dispatch(
      addBikeForOrder(props)
    );
  };

  const removeBike = () => {
    setIsPressed(false);
    dispatch(removeBikeFromOrder(id));
  };

  const [isPopupCardVisible, setIsPopupCardVisible] = useState(false);
  const closePopup = () => {
    setIsPopupCardVisible(false);
  };

  if (
    bookedDates &&
    isBooked(startDate, startTime, finishDate, finishTime, bookedDates)
  ) {
    return (
      <div className={classes.container}>
        <div className={classes.header}>
          <p>{`${size}”`}</p>
          <p>{brend}</p>
        </div>
        <div className={classes.imageBox}>
          <img className={classes.image} src={imageRef[0]} alt="bike" />
        </div>
        <div className={classes.info}>
          <p
            className={`${classes.description} ${classes["description--booked"]}`}
          >
            {type}
            <br />
            {`${brend} ${model} ${size}”`}
          </p>
          <div className={`${classes.price} ${classes["price--booked"]}`}>
            {price} AED/день
          </div>
          <div className={classes.bottom}>
            <p
              className={classes.freeDates}
              onClick={() => console.log("free dates")}
            >
              Посмотреть свободные даты
            </p>
            <div className={classes.notification}>ЗАНЯТ</div>
          </div>
        </div>
      </div>
    );
  } else {
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
  }
};

export default BikeCardSmall;
