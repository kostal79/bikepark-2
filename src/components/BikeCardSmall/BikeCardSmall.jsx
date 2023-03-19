import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBikeForOrder, removeBikeFromOrder } from "../../redux/slices/orderBikeSlice";
import isBooked from "../../utils/isBooked/isBooked";
import BlueButton from "../BlueButton/BlueButton";
import WhiteButton from "../WhiteButton/WhiteButton";
import classes from "./BikeCardSmall.module.css";

const BikeCardSmall = ({ id, image, bookedDates, name, price, size, model, type }) => {
  const startDate = useSelector((state) => state.calendar.dateStart);
  const finishDate = useSelector((state) => state.calendar.dateFinish);
  const startTime = useSelector((state) => state.calendar.timeStart);
  const finishTime = useSelector((state) => state.calendar.timeFinish);
  const isPressed = useSelector((state) => state.orderedBikes.bikeForOrder.includes(id));
  const dispatch = useDispatch();

  const addBike = () => {
    dispatch(addBikeForOrder(id))
  };

  const removeBike = () => {
    dispatch(removeBikeFromOrder(id))
  }

  if (
    bookedDates &&
    isBooked(startDate, startTime, finishDate, finishTime, bookedDates)
  ) {
    return (
      <div className={classes.container}>
        <div className={classes.header}>
          <p>{`${size}”`}</p>
          <p>{name}</p>
        </div>
        <div className={classes.imageBox}>
          <img className={classes.image} src={image} alt="bike" />
        </div>
        <div className={classes.info}>
          <p
            className={`${classes.description} ${classes["description--booked"]}`}
          >
            {type}
            <br />
            {`${name} ${model} ${size}”`}
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
          <p>{name}</p>
        </div>
        <div className={classes.imageBox}>
          <img className={classes.image} src={image} alt="bike" />
        </div>
        <div className={classes.info}>
          <p className={classes.description}>
            {type}
            <br />
            {`${name} ${model} ${size}”`}
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
      </div>
    );
  }
};

export default BikeCardSmall;
