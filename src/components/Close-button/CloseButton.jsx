import React from "react";
import classes from "./CloseButton.module.css"

const CloseButton = ({onClick}) => {
  return (
    <button className={classes["close-button"]} onClick={onClick}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.6377 1.54594L1.54585 20.6378M1.54585 1.54594L20.6377 20.6378"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default CloseButton;
