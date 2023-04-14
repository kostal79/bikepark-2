import React, { useState } from "react";
import AccountOrders from "../components/AccountOrders/AccountOrders";
import AccountProfile from "../components/AccountProfile/AccountProfile";
import Dropdown from "../components/Dropdown/Dropdown";
import classes from "./Account.module.css";

const Account = () => {
  const [activeWindow, setActivWindow] = useState("current");
  const minWidth = activeWindow === "profile" ? "0" : "730px";

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

  return (
    <div
      data-testid="account-page"
      className={classes.container}
      style={{ minWidth: minWidth }}
    >
      <h1 className={classes.title}>Личный кабинет</h1>
      <div className={classes.dropdown}>
        <Dropdown
          optionsList={["Текущие заказы", "История заказов", "Личные данные"]}
          onClick={handleDropDown}
        />
      </div>
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
  );
};

export default Account;
