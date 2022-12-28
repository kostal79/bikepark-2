import React from "react";
import classes from "./Bonuses.module.css"

const Bonuses = () => {
  return (
      <div className={classes.topContainer}>
        <h1 className={classes.header}>
          Аренда велосипедов
          <br />
          c&nbsp;доставкой
        </h1>
        <div className={classes.banner}>
          <div className={`${classes.cube} ${classes.cube1}`}>
            <img
              className={classes.image}
              src={
                "https://firebasestorage.googleapis.com/v0/b/bikepark-80c12.appspot.com/o/aftermarket%2Fhelmet.png?alt=media&token=e3a7f8f8-ad2c-431e-b663-febb4248c30e"
              }
              alt="helmet"
            ></img>
            <p className={classes.name}>Шлем</p>
            <p className={classes.text}>Бесплатно</p>
          </div>
          <div className={`${classes.cube} ${classes.cube2}`}>
            <img
              className={classes.image}
              src={
                "https://firebasestorage.googleapis.com/v0/b/bikepark-80c12.appspot.com/o/aftermarket%2Fflashlight.png?alt=media&token=22d77940-b7cb-4b07-babf-6aea95ec2174"
              }
              alt="flashlight"
            ></img>
            <p className={classes.name}>Фонарик</p>
            <p className={classes.text}>Бесплатно</p>
          </div>
          <div className={`${classes.cube} ${classes.cube3}`}>
            <img
              className={classes.image}
              src={
                "https://firebasestorage.googleapis.com/v0/b/bikepark-80c12.appspot.com/o/aftermarket%2Flocker.png?alt=media&token=b67bbe23-5bc6-4a56-b70b-17c522148f19"
              }
              alt="locker"
            ></img>
            <p className={classes.name}>Замок</p>
            <p className={classes.text}>Бесплатно</p>
          </div>
        </div>
      </div>
  );
};

export default Bonuses;
