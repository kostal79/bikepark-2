import React from "react";
import classes from './Bridge.module.css'

const Bridge = () => {
  return (
    <svg
    className={classes.svg}
      width="60"
      height="30"
      viewBox="0 0 60 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 29.9912C8.04474 29.7186 14.4827 23.1111 14.4827 15C14.4827 6.88886 8.04474 0.281378 0 0.00873765V0H60V0.00873338C51.9552 0.281309 45.5172 6.88881 45.5172 15C45.5172 23.1112 51.9552 29.7187 60 29.9913V30H0V29.9912Z"
        fill="#F2F4F7"
      />
    </svg>
  );
};

export default Bridge;
