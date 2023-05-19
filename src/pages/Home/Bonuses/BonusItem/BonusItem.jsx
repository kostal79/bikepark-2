import React from "react";
import classes from "./BonusItem.module.css";

const BonusItem = ({ className, name, imageRef }) => {
  return (
    <div className={className}>
      <img className={classes.image} src={imageRef} alt={name}></img>
      <p className={classes.name}>{name}</p>
      <p className={classes.text}>Бесплатно</p>
    </div>
  );
};

export default BonusItem;
