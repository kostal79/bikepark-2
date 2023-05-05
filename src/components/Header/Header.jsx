import React from "react";
import Clock from "../Clock/Clock";
import HamburgerMenu from "../Hamburger/HamburgerMenu";
import classes from "./Header.module.css";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../logo.svg";
import BlueButton from "../BlueButton/BlueButton";
import { ReactComponent as SignInLogo } from "../../assets/contacts.svg";
import { ReactComponent as SignedInLogo } from "../../assets/authorizedLogo.svg";
import { useDispatch, useSelector } from "react-redux";
import UserWidget from "../UserWidget/UserWidget";
import { setUserWidget, widgetState } from "../../redux/slices/tooltipsSlice";
import { getIsAuth } from "../../redux/slices/authSlice";
import {
  getPopupFeedback,
  getPopupSignIn,
  setPopupFeedback,
  setPopupSignIn,
} from "../../redux/slices/popupSlice";
import PopupFeedback from "../PopupFeedback/PopupFeedback";
import PopupSignInForm from "../PopupSignInForm/PopupSignInForm";

const Header = () => {
  const isActive = useSelector((state) => state.hamburger.isActive);
  const isSignInActive = useSelector(getPopupSignIn);
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  const widget = useSelector(widgetState);
  const location = useLocation();
  const popupFeedbackIsVisible = useSelector(getPopupFeedback);

  const openModal = () => {
    dispatch(setPopupSignIn(true));
  };

  const closeModal = (event) => {
    if (event.target.className === `${classes.sign}`) {
      dispatch(setPopupSignIn(false));
    }
  };

  const widgetHandler = () => {
    dispatch(setUserWidget(!widget));
  };

  const showFeedBackForm = () => {
    dispatch(setPopupFeedback(true));
  };

  return (
    <div className={classes.header}>
      <div className={classes.leftSide}>
        <div className={classes.logo}>
          <NavLink to="/" data-testid="main-link">
            <img className={classes.imgLogo} src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className={classes.about}>
          <NavLink to="/about" data-testid="about-link">
            <span
              className={
                location.pathname === "/about"
                  ? classes.page__active
                  : classes.page
              }
            >
              О нас
            </span>
          </NavLink>
        </div>
        <div
          className={
            isActive ? classes["rent--disactive"] : classes["rent--active"]
          }
        >
          <NavLink to="/rent" data-testid="rent-link">
            <span
              className={
                location.pathname === "/rent"
                  ? classes.page__active
                  : classes.page
              }
            >
              Аренда
            </span>
          </NavLink>
        </div>
        <div
          className={
            isActive
              ? classes["delivery--disactive"]
              : classes["delivery--active"]
          }
        >
          <NavLink to="/delivery" data-testid="delivery-link">
            <span
              className={
                location.pathname === "/delivery"
                  ? classes.page__active
                  : classes.page
              }
            >
              Доставка
            </span>
          </NavLink>
        </div>
        <div className={classes.wheretoride}>
          <NavLink to="/wheretoride" data-testid="wheretoride-link">
            <span
              className={
                location.pathname === "/wheretoride"
                  ? classes.page__active
                  : classes.page
              }
            >
              Где кататься
            </span>
          </NavLink>
        </div>
        <div className={classes.contacts}>
          <NavLink to="/contacts" data-testid="contacts-link">
            <span
              className={
                location.pathname === "/contacts"
                  ? classes.page__active
                  : classes.page
              }
            >
              Контакты
            </span>
          </NavLink>
        </div>
      </div>
      <div className={classes.menu}>
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
    </div>
  );
};

export default Header;
