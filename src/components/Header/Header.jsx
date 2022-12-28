import React from "react";
import Clock from "../Clock/Clock";
import HamburgerMenu from "../Hamburger/HamburgerMenu";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";
import BlueButton from "../BlueButton/BlueButton";
import signInLogo from "../../assets/contacts.svg";
import { useSelector } from "react-redux";

const Header = () => {
  const isActive = useSelector((state) => state.hamburger.isActive);

  return (
    <div className={classes.header}>
      <div className={classes.leftSide}>
        <div className={classes.logo}>
          <NavLink to="/">
            <img className={classes.imgLogo} src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className={classes.about}>
            <NavLink to="/about">О нас</NavLink>
        </div>
        <div
          className={
            isActive ? classes["rent--disactive"] : classes["rent--active"]
          }
        >
          <NavLink to="/rent" >Аренда</NavLink>
        </div>
        <div
          className={
            isActive ? classes["delivery--disactive"] : classes["delivery--active"]
          }
        >
          <NavLink to="/delivery" >Доставка</NavLink>
        </div>
        <div className={classes.wheretoride}>
            <NavLink to="/wheretoride">Где кататься</NavLink>
        </div>
        <div className={classes.contacts}>
            <NavLink to="/contacts">Контакты</NavLink>
        </div>
      </div>
      <div className={classes.menu}>
        <a href="tel:+971525634064" className={classes.phone}>+971 52 563 4064</a>
        <div className={classes.additionalSignIn}>
          <NavLink to="/signin">
            <img className={classes.imgSignLogo} src={signInLogo} alt=""></img>
          </NavLink>
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
    </div>
  );
};

export default Header;
