import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./BackArrow.module.css"
import { ReactComponent as SVGArrow } from "../../assets/backarrow.svg"

const BackArrow = () => {
    const back = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.arrow} onClick={() => back(-1)}>
        <SVGArrow />
        <p className={classes.text}>Назад к выбору<br />велосипедов</p>
      </div>
    </div>
  );
};

export default BackArrow;
