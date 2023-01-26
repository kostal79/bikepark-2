import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./BackArrow.module.css"

const BackArrow = () => {
    const back = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.arrow} onClick={() => back(-1)}>
        <svg
          width="161"
          height="51"
          viewBox="0 0 161 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.0495 2.61739C28.7411 1.24748 30.8517 0.5 33.0284 0.5H151C156.247 0.5 160.5 4.75329 160.5 10V41C160.5 46.2467 156.247 50.5 151 50.5H33.0284C30.8517 50.5 28.7411 49.7525 27.0495 48.3826L3.11254 28.997C0.888671 27.196 0.888668 23.804 3.11253 22.003L27.0495 2.61739Z"
            stroke="#297FFF"
          />
        </svg>
        <p className={classes.text}>Назад к выбору<br />велосипедов</p>
      </div>
    </div>
  );
};

export default BackArrow;
