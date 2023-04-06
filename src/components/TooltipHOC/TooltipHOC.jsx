import React, { useEffect, useState } from "react";
import classes from "./TooltipHOC.module.css";

const TooltipHOC = (OriginalComponent) => {
  return function NewComponent({ style }) {
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
      function closeTooltip(event) {
        if (!event.target.closest("#tooltip-hoc")) {
          console.log(event.target)
         setIsActive(false);
        }
      }
      document.addEventListener("click", closeTooltip, {capture: true, once: true});
    });

    if (isActive) {
      return (
        <div id="tooltip-hoc" className={classes.container} style={style}>
          <div className={classes.tail}></div>
          <OriginalComponent setIsVisible={setIsActive} />
        </div>
      );
    }
  };
};

export default TooltipHOC;
