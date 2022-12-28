import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setIsActive } from "../../redux/slices/hamburgerSlice";
import BlueButton from "../BlueButton/BlueButton";
import classes from "./HamburgerMenu.module.css";

const HamburgerMenu = () => {
  const isActive = useSelector((state) => state.hamburger.isActive);
  const dispatch = useDispatch();

  const hamburgerOnClick = () => {
    dispatch(setIsActive(!isActive));
  };

  useEffect(() => {
    const outsideClick = (event) => {
      if (!event.target.closest("#hamburger")) {
        dispatch(setIsActive(false));
      }
    };
    document.addEventListener("click", outsideClick);

    return () => document.removeEventListener("click", outsideClick);
  }, [dispatch]);

  return (
    <div className={classes.container} id="hamburger" onClick={hamburgerOnClick}>
      <div
        className={
          isActive ? `${classes.icon} ${classes["icon-active"]}` : classes.icon
        }
      >
        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
        <div className={classes.line3}></div>
      </div>
      <div
        className={
          isActive ? `${classes.menu} ${classes["menu-active"]}` : classes.menu
        }
      >
        <ul className={classes.menu__list}>
          <li className={`${classes.menu__item} ${classes.about}`}>
            <NavLink to="/about">О нас</NavLink>
          </li>
          <li className={`${classes.menu__item} ${classes.rent}`}>
            <NavLink to="/rent">Аренда</NavLink>
          </li>
          <li className={`${classes.menu__item} ${classes.delivery}`}>
            <NavLink to="/delivery">Доставка</NavLink>
          </li>
          <li className={`${classes.menu__item} ${classes.wheretoride}`}>
            <NavLink to="/wheretoride">Где кататься</NavLink>
          </li>
          <li className={`${classes.menu__item} ${classes.contacts}`}>
            <NavLink to="/contacts">Контакты</NavLink>
          </li>
        </ul>
        <div className={classes.sign}>
            <div className={classes.signIn}><NavLink to="/">Личный кабинет</NavLink></div>
            <div className={classes.signOut}><NavLink to="/">Выйти</NavLink></div>
        </div>
        <div className={classes.button}>
          <BlueButton
            width={"300"}
            height={"40"}
            text={"Обратная связь"}
            uppercase={true}
            onClick={() => console.log("click")}
          />
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
