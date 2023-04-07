import React from "react";
import { useDispatch } from "react-redux";
import { setUserWidget } from "../../redux/slices/tooltipsSlice";
import classes from "./TooltipHOC.module.css";

const TooltipHOC = (OriginalComponent) => {
  return function NewComponent({ style }) {
    const dispatch = useDispatch();

    function closeTooltip(event) {
      if (!event.target.closest("#tooltip-hoc")) {
        dispatch(setUserWidget(false));
      }
    }
    document.addEventListener("click", closeTooltip, {
      capture: true,
      once: true,
    });

    return (
      <div id="tooltip-hoc" className={classes.container} style={style}>
        <div className={classes.tail}></div>
        <OriginalComponent />
      </div>
    );
  };
};

export default TooltipHOC;
