import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useSignOut } from "../../hooks/useSignOut/useSignOut";
import { setUserWidget } from "../../redux/slices/tooltipsSlice";
import TooltipHOC from "../TooltipHOC/TooltipHOC";
import classes from "./UserWidget.module.css";

const UserWidget = () => {
  const [error, isSignOut, logOut] = useSignOut();
  const dispatch = useDispatch();


  const logoutHandler = () => {
    logOut();
    if (!error) {
        dispatch(setUserWidget(false));
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
