import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeBikeTypes, setBikesTypes } from "../../redux/slices/bikeSlice";
import classes from "./ButtonAddBike.module.css";
import ButtonContent from "./ButtonContent/ButtonContent";

const ButtonAddBike = ({ type }) => {
  const [pressed, setPressed] = useState(false);
  const dispatch = useDispatch();

  const addBikeInSelection = (type) => {
    if (!pressed) {
      dispatch(setBikesTypes(type));
    } else {
      dispatch(removeBikeTypes(type))
    }
    setPressed(!pressed);
  };

  return (
    <div className={classes.container}>
      <button
        className={
          pressed
            ? `${classes.button} ${classes["button--pressed"]}`
            : `${classes.button}`
        }
        onClick={() => addBikeInSelection(type)}
      >
        <ButtonContent pressed={pressed} />
      </button>
    </div>
  );
};

export default ButtonAddBike;
