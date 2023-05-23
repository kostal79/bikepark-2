import React, { memo, useCallback, useEffect, useState } from "react";
import BlueButton from "../BlueButton/BlueButton";
import classes from "./HamburgerMenu.module.css";
import HamburgerMenuList from "./HamburgerMenuList/HamburgerMenuList";
import HamburgerCross from "./HamburgerCross/HamburgerCross";
import { useDispatch } from "react-redux";
import { setPopupFeedback } from "@redux/slices/popupSlice";

const HamburgerMenu = () => {
  const [isActive, setIsActive] = useState(false);
const dispatch = useDispatch();

const feedbackHandler = useCallback(() => {
  dispatch(setPopupFeedback(true))
}, [dispatch])
  const hamburgerOnClick = () => {
   setIsActive(!isActive);
  };

  useEffect(() => {
    const outsideClick = (event) => {
      if (!event.target.closest("#hamburger")) {
        setIsActive(false);
      }
    };
    document.addEventListener("click", outsideClick);

    return () => document.removeEventListener("click", outsideClick);
  }, []);

  return (
    <div
      className={classes.container}
      id="hamburger"
      onClick={hamburgerOnClick}
    >
      <HamburgerCross isActive={isActive} />
      <div
        className={
          isActive ? `${classes.menu} ${classes["menu-active"]}` : classes.menu
        }
      >
        <HamburgerMenuList />
        <div className={classes.button}>
          <BlueButton
            width={"300"}
            height={"40"}
            text={"Обратная связь"}
            uppercase={true}
            onClick={feedbackHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(HamburgerMenu);
