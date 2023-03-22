import React from "react";
import BonusItem from "../BonusItem/BonusItem";
import classes from "./Bonuses.module.css";

const Bonuses = () => {
  return (
    <div className={classes.topContainer}>
      <h1 className={classes.header}>
        Аренда велосипедов
        <br />
        c&nbsp;доставкой
      </h1>
      <div className={classes.banner}>
        <BonusItem
          className={classes.cube}
          imageRef={
            "https://firebasestorage.googleapis.com/v0/b/bikepark-80c12.appspot.com/o/aftermarket%2Fhelmet.png?alt=media&token=e3a7f8f8-ad2c-431e-b663-febb4248c30e"
          }
          name="Шлем"
        />

        <BonusItem
          className={classes.cube}
          imageRef={
            "https://firebasestorage.googleapis.com/v0/b/bikepark-80c12.appspot.com/o/aftermarket%2Fflashlight.png?alt=media&token=22d77940-b7cb-4b07-babf-6aea95ec2174"
          }
          name="Фонарик"
        />

        <BonusItem
          className={classes.cube}
          imageRef={
            "https://firebasestorage.googleapis.com/v0/b/bikepark-80c12.appspot.com/o/aftermarket%2Flocker.png?alt=media&token=b67bbe23-5bc6-4a56-b70b-17c522148f19"
          }
          name="Замок"
        />
      </div>
    </div>
  );
};

export default Bonuses;
