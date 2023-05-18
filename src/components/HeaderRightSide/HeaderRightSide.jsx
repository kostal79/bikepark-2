import React, { useCallback } from "react";
import classes from "./HeaderRightSide.module.css";
import BlueButton from "../BlueButton/BlueButton";
import { ReactComponent as SignInLogo } from "../../assets/contacts.svg";
import { ReactComponent as SignedInLogo } from "../../assets/authorizedLogo.svg";
import { useDispatch, useSelector } from "react-redux";
import { getIsAuth } from "../../redux/slices/authSlice";
import UserWidget from "../UserWidget/UserWidget";
import { setUserWidget, widgetState } from "../../redux/slices/tooltipsSlice";
import { getPopupFeedback, getPopupSignIn, setPopupFeedback, setPopupSignIn } from "../../redux/slices/popupSlice";
import PopupFeedback from "../PopupFeedback/PopupFeedback";
import PopupSignInForm from "../PopupSignInForm/PopupSignInForm";
import HamburgerMenu from "../Hamburger/HamburgerMenu";
import Clock from "../Clock/Clock";

const HeaderRightSide = () => {
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();
  const widget = useSelector(widgetState);
  const isSignInActive = useSelector(getPopupSignIn);
  const popupFeedbackIsVisible = useSelector(getPopupFeedback);

  const openModal = useCallback(() => {
    dispatch(setPopupSignIn(true));
  }, [dispatch]);

  const widgetHandler = () => {
    dispatch(setUserWidget(!widget));
  };

  const showFeedBackForm = useCallback(() => {
    dispatch(setPopupFeedback(true));
  }, [dispatch]);

  return (
    <>
      <div className={classes.right_side_menu}>
        <a href="tel:+971525634064" className={classes.phone}>
          +971 52 563 4064
        </a>
        <div>
          <div
            className={classes.imgSignLogo}
            onClick={isAuth ? widgetHandler : openModal}
          >
            {isAuth ? <SignedInLogo /> : <SignInLogo />}
          </div>
          <div>{widget && <UserWidget />}</div>
        </div>
        <div className={classes.additionalButton}>
          <BlueButton
            width={"150"}
            height={"34"}
            text={"Обратная связь"}
            uppercase={true}
            onClick={showFeedBackForm}
          />
        </div>
        <Clock />
        <HamburgerMenu />
      </div>
      {isSignInActive && <PopupSignInForm />}
      {popupFeedbackIsVisible && <PopupFeedback />}
    </>
  );
};

export default HeaderRightSide;
