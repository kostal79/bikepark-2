import React from "react";
import Clock from "../Clock/Clock";
import HamburgerMenu from "../Hamburger/HamburgerMenu";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";
import BlueButton from "../BlueButton/BlueButton";
import signInLogo from "../../assets/contacts.svg";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import { setSignIn } from "../../redux/slices/modalSlice";
import Registration from "../Registration/Registration";

const Header = () => {
  const isActive = useSelector((state) => state.hamburger.isActive);
  const isSignInIsActive = useSelector((state) => state.modal.isSignInIsActive);
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setSignIn(true));
  };

  const closeModal = (event) => {
    if (event.target.className === `${classes.sign}`) {
      dispatch(setSignIn(false));
    }
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
        <img
          className={classes.imgSignLogo}
          src={signInLogo}
          alt="sign in"
          onClick={openModal}
        ></img>
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
        {isSignInIsActive ? (
          <div className={classes.sign} onClick={closeModal}>
            <Registration />
          </div>
        ) : null}
      </Modal>
    </div>
  );
};

export default Header;
