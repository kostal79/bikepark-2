import React, { useRef, useState } from "react";
import AccountOrders from "../../components/AccountOrders/AccountOrders";
import AccountProfile from "../../components/AccountProfile/AccountProfile";
import Dropdown from "../../components/Dropdown/Dropdown";
import Scroller from "../../components/Scroller/Scroller";
import classes from "./Account.module.css";
import PopupCancelResult from "../../components/PopupCancelResult/PopupCancelResult";
import { useSelector } from "react-redux";
import { getPopupCancelResult } from "../../redux/slices/popupSlice";

const Account = () => {
  const [activeWindow, setActivWindow] = useState("current");
  const popup = useSelector(getPopupCancelResult)

  const handleDropDown = (event) => {
    switch (event.target.innerText) {
      case "Текущие заказы":
        setActivWindow("current");
        break;
      case "История заказов":
        setActivWindow("complited");
        break;
      case "Личные данные":
        setActivWindow("profile");
        break;

      default:
        break;
    }
  };

  const scrolledElement = useRef();

  return (
    <div data-testid="account-page" className={classes.container}>
      <h1 className={classes.title}>Личный кабинет</h1>
      <div className={classes.dropdown}>
        <Dropdown
          optionsList={["Текущие заказы", "История заказов", "Личные данные"]}
          onClick={handleDropDown}
        />
      </div>
      {activeWindow !== "profile" && <Scroller elementRef={() => scrolledElement.current} steps={3} />}
      <div className={classes.scrolling} ref={scrolledElement}>
        <nav className={classes.navigation}>
          <ul className={classes["navigation__list"]}>
            <li
              onClick={() => setActivWindow("current")}
              className={
                activeWindow === "current"
                  ? `${classes.window} ${classes["window--active"]}`
                  : classes.window
              }
            >
              Текущие заказы
            </li>
            <li
              onClick={() => setActivWindow("complited")}
              className={
                activeWindow === "complited"
                  ? `${classes.window} ${classes["window--active"]}`
                  : classes.window
              }
            >
              Выполненные заказы
            </li>
            <li
              onClick={() => setActivWindow("profile")}
              className={
                activeWindow === "profile"
                  ? `${classes.window} ${classes["window--active"]}`
                  : classes.window
              }
            >
              Личные данные
            </li>
          </ul>
        </nav>
        {activeWindow === "profile" ? (
          <AccountProfile />
        ) : (
          <AccountOrders activeWindow={activeWindow} />
        )}
      </div>
      {popup && <PopupCancelResult />}
    </div>
  );
};

export default Account;
