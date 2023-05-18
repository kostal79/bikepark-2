import React, { memo } from "react";
import classes from "./HamburgerMenuList.module.css";
import { NavLink } from "react-router-dom";
import {useSignOut} from "../../hooks/useSignOut/useSignOut";

const HamburgerMenuList = () => {
  const [, , logOut] = useSignOut();
  
  return (
    <>
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
        <div className={classes.signIn}>
          <NavLink to="/account">Личный кабинет</NavLink>
        </div>
        <div className={classes.signOut} onClick={() => logOut()}>
          <div>Выйти</div>
        </div>
      </div>
    </>
  );
};

export default memo(HamburgerMenuList);
