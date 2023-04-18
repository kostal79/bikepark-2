import React, { useRef } from "react";
import { ReactComponent as ScrollSvg } from "../../assets/scroller.svg";
import classes from "./Scroller.module.css";

const Scroller = ({ elementRef, steps }) => {
  const scrollRef = useRef(0);
  const makeScroll = () => {
    const element = elementRef();
    const maxScroll = element.scrollLeftMax;
    const shift = element.scrollWidth / steps;
    scrollRef.current =
      scrollRef.current < maxScroll ? scrollRef.current + shift : 0;
    element.scrollLeft = scrollRef.current;
  };
  return (
    <div onClick={makeScroll} className={classes.container}>
      <ScrollSvg />
    </div>
  );
};

export default Scroller;
