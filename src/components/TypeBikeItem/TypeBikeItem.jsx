import React from "react";
import ButtonAddBike from "../ButtonAddBike/ButtonAddBike";
import ButtonSpeachBubble from "../ButtonSpechBubble/ButtonSpeachBubble";
import classes from './TypeBikeItem.module.css'


const TypeBikeItem = ({type, text, price, imageLink, description}) => {
  return (
    <div className={classes.container}>
      <img className={classes.image} src={imageLink} alt="bike"></img>
      <div className={classes.caracters}>
        <p className={classes.type}>{text}</p>
        <div className={classes.price}>{`${price} AED`}</div>
        <div className={classes.buttonsBlock}>
        <ButtonSpeachBubble description={description}/>
        <ButtonAddBike type={type}/>
        </div>
      </div>
    </div>
  );
};

export default TypeBikeItem;
