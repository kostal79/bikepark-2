import React from "react";
import Clock from "../Clock/Clock";
import HamburgerMenu from "../Hamburger/HamburgerMenu";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";
import BlueButton from "../BlueButton/BlueButton";
import {ReactComponent as SignInLogo} from "../../assets/contacts.svg";
import {ReactComponent as SignedInLogo} from "../../assets/authorizedLogo.svg";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import { getIsSignActive, setSignIn } from "../../redux/slices/modalSlice";
import Registration from "../Registration/Registration";
import UserWidget from "../UserWidget/UserWidget";
import { setUserWidget, widgetState } from "../../redux/slices/tooltipsSlice";
import { getIsAuth } from "../../redux/slices/authSlice";

const Header = () => {
  const isActive = useSelector((state) => state.hamburger.isActive);
  const isSignInActive = useSelector(getIsSignActive);
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  const userLogo = isAuth ? <SignedInLogo /> : <SignInLogo />;
  const widget = useSelector(widgetState);

  const openModal = () => {
    dispatch(setSignIn(true));
  };

  const closeModal = (event) => {
    if (event.target.className === `${classes.sign}`) {
      dispatch(setSignIn(false));
    }
  };

  const widgetHandler = () => {
    dispatch(setUserWidget(!widget))
  }
  

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
            О нас
          </NavLink>
        </div>
        <div
          className={
            isActive ? classes["rent--disactive"] : classes["rent--active"]
          }
        >
          <NavLink to="/rent" data-testid="rent-link">
            Аренда
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
            Доставка
          </NavLink>
        </div>
        <div className={classes.wheretoride}>
          <NavLink to="/wheretoride" data-testid="wheretoride-link">
            Где кататься
          </NavLink>
        </div>
        <div className={classes.contacts}>
          <NavLink to="/contacts" data-testid="contacts-link">
            Контакты
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
          >{userLogo}</div>
          <div>{widget && <UserWidget />}</div>
        </div>
        <div className={classes.additionalButton}>
          <BlueButton
            width={"150"}
            height={"34"}
            text={"Обратная связь"}
            uppercase={true}
            onClick={() => console.log("click")}
          />
        </div>
        <Clock />
        <HamburgerMenu />
      </div>
      <Modal>
        {isSignInActive ? (
          <div className={classes.sign} onClick={closeModal}>
            <Registration />
          </div>
        ) : null}
      </Modal>
    </div>
  );
};

export default Header;
