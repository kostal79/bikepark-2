import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./BackArrow.module.css"
import { ReactComponent as SVGArrow } from "../../assets/backarrow.svg"
import { useDispatch } from "react-redux";
import { clearOrder } from "../../redux/slices/orderBikeSlice";

const BackArrow = () => {
    const back = useNavigate();
    const dispatch = useDispatch()
  return (
    <div className={classes.container}>
      <div className={classes.arrow} onClick={() => {dispatch(clearOrder()); back(-1)}}>
        <SVGArrow />
        <p className={classes.text}>Назад к выбору<br />велосипедов</p>
      </div>
    </div>
  );
};

export default BackArrow;
