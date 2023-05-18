import React, { useState } from 'react'
import classes from "./NotEvalibleBike.module.css"
import PopupCalendarEvalibleDates from '../../PopupCalendarEvalibleDates/PopupCalendarEvalibleDates';

const NotEvalibleBike = (props) => {
    const {size, brend, imageRef, type, model, price, id} = props;
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const closePopup = () => {
      setIsPopupVisible(false)
    }

    const showEvalibleDatesHandle = () => {
      setIsPopupVisible(true)
    }

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
                onClick={showEvalibleDatesHandle}
              >
                Посмотреть свободные даты
              </p>
              <div className={classes.notification}>ЗАНЯТ</div>
            </div>
          </div>
        {isPopupVisible && <PopupCalendarEvalibleDates bikeId={id} closePopup={closePopup}/>}
        </div>
      );
};

export default NotEvalibleBike