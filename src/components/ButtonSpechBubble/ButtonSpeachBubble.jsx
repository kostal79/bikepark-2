import React, { useState } from "react";
import classes from "./ButtonSpeachBubble.module.css";

const ButtonSpeachBubble = ({ description }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.button} onClick={()=> setIsActive(!isActive)}>
        <svg
          width="10"
          height="13"
          viewBox="0 0 10 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 3.625C1 2.17525 2.34315 1 4 1C5.65685 1 7 2.17525 7 3.625C7 4.5333 6.47277 5.33385 5.67149 5.80513C4.8384 6.29512 4 7.0335 4 8V8"
            stroke="#297FFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="4" cy="11" r="1" fill="#297FFF" />
        </svg>
      </div>
      <div
        className={
          isActive
            ? `${classes["speachBubble--active"]}`
            : `${classes["speachBubble--disactive"]}`
        }
      >
        <div className={classes.cube}></div>
        {description}
      </div>
    </div>
  );
};

export default ButtonSpeachBubble;
