import React, { memo } from "react";
import ButtonAddBike from "../ButtonAddBike/ButtonAddBike";
import ButtonSpeachBubble from "../ButtonSpechBubble/ButtonSpeachBubble";
import classes from './TypeBikeItem.module.css'


const TypeBikeItem = ({material, description, price, imageRef }) => {
  return (
    <div className={classes.container}>
      <img className={classes.image} src={imageRef} alt="bike"></img>
      <div className={classes.caracters}>
        <p className={classes.type}>{material}</p>
        <div className={classes.price}>{`${price} AED`}</div>
        <div className={classes.buttonsBlock}>
        <ButtonSpeachBubble description={description}/>
        <ButtonAddBike type={material}/>
        </div>
      </div>
    </div>
  );
};

export default memo(TypeBikeItem);
