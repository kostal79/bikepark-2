import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useSignOut } from "../../hooks/useSignOut/useSignOut";
import { setUserWidget } from "../../redux/slices/tooltipsSlice";
import TooltipHOC from "../TooltipHOC/TooltipHOC";
import classes from "./UserWidget.module.css";
import { getUserData } from "../../redux/slices/authSlice";

const UserWidget = () => {
  const [error, , logOut] = useSignOut();
  const userData = useSelector(getUserData);
  const role = userData.role;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    logOut();
    if (!error) {
      dispatch(setUserWidget(false));
    } else {
      console.log(error);
    }
  };

  const accounLinkHandler = () => {
    dispatch(setUserWidget(false));
  };
  return (
    <ul className={classes.container}>
      <li onClick={accounLinkHandler}>
        {role === "moderator" ? (
          <NavLink to={"/admin"}>Управление заказами</NavLink>
        ) : (
          <NavLink to={"/Account"}>Личный кабинет</NavLink>
        )}
      </li>
      <li onClick={logoutHandler}>
        <p>Выйти</p>
      </li>
    </ul>
  );
};

export default TooltipHOC(UserWidget);
