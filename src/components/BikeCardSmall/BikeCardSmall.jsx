import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBikeForOrder, removeBikeFromOrder } from "../../redux/slices/orderBikeSlice";
import isBooked from "../../utils/isBooked/isBooked";
import BlueButton from "../BlueButton/BlueButton";
import WhiteButton from "../WhiteButton/WhiteButton";
import classes from "./BikeCardSmall.module.css";

const BikeCardSmall = ({ id, image, booked, name, price, size, description }) => {
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
    booked &&
    isBooked(startDate, startTime, finishDate, finishTime, booked)
  ) {
    return (
      <div className={classes.container}>
        <div className={classes.header}>
          <p>{`${size}”`}</p>
          <p>{name.mark}</p>
        </div>
        <div className={classes.imageBox}>
          <img className={classes.image} src={image} alt="bike" />
        </div>
        <div className={classes.info}>
          <p
            className={`${classes.description} ${classes["description--booked"]}`}
          >
            {description}
            <br />
            {`${name.mark} ${name.model} ${size}”`}
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
          <p>{name.mark}</p>
        </div>
        <div className={classes.imageBox}>
          <img className={classes.image} src={image} alt="bike" />
        </div>
        <div className={classes.info}>
          <p className={classes.description}>
            {description}
            <br />
            {`${name.mark} ${name.model} ${size}”`}
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
