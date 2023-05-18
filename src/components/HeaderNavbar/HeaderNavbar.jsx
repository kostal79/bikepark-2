import React from 'react';
import classes from './HeaderNavbar.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from "../../logo.svg";

const HeaderNavbar = () => {
  const location = useLocation();
  const isActive = useSelector((state) => state.hamburger.isActive);

  return(
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
  )
};

export default HeaderNavbar;