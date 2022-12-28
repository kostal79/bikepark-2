import React from "react";
import classes from "./BlueButton.module.css";

/**
 * Button component
 * @params {width: string, height: string, text: string, onClick: function}
 * @returns component
 */
const BlueButton = ({ width, height, text, uppercase, fontSize, onClick, }) => {
  return (
    <div
      className={classes.button}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        textTransform: `${uppercase ? "uppercase" : ""}`,
        fontSize: `${fontSize ? fontSize : 14}px`
      }}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default BlueButton;
