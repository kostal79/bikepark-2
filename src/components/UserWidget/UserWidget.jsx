import React from "react";
import { NavLink } from "react-router-dom";
import { useSignOut } from "../../hooks/useSignOut/useSignOut";
import TooltipHOC from "../TooltipHOC/TooltipHOC";
import classes from "./UserWidget.module.css";

const UserWidget = ({ setIsVisible }) => {
  const [error, isSignOut, logOut] = useSignOut();

  const logoutHandler = () => {
    logOut();
    if (!error && isSignOut) {
        setIsVisible(false);
    } else {
      console.log(error);
    }
  };
  return (
    <ul className={classes.container}>
      <li>
        <NavLink to={"/Account"}>Личный кабинет</NavLink>
      </li>
      <li onClick={logoutHandler}>
        <p>Выйти</p>
      </li>
    </ul>
  );
};

export default TooltipHOC(UserWidget);
