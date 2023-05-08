import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./BackArrow.module.css"
import { ReactComponent as SVGArrow } from "../../assets/backarrow.svg"
import { useDispatch } from "react-redux";
import { clearOrder } from "../../redux/slices/orderBikeSlice";
import { setResultList } from "../../redux/slices/searchResultsSlice";

const BackArrow = () => {
    const back = useNavigate();
    const dispatch = useDispatch()
    const backHandler = () => {
      dispatch(clearOrder());
      dispatch(setResultList([]))
      back(-1);
    }
  return (
    <div className={classes.container}>
      <div className={classes.arrow} onClick={ backHandler}>
        <SVGArrow />
        <p className={classes.text}>Назад к выбору<br />велосипедов</p>
      </div>
    </div>
  );
};

export default BackArrow;
