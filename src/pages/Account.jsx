import { doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDocument } from "../Api/getDocument";
import CurrentOrders from "../components/CurrentOrders/CurrentOrders";
import { db } from "../config/firebase";
import { useUserOrders } from "../hooks/useUserOrders/useUserOrders";
import { getUserId } from "../redux/slices/authSlice";
import classes from "./Account.module.css";

const Account = () => {
  const uid = useSelector(getUserId);
  const [orders, isLoaded] = useUserOrders(uid)

  if (true) {
    return (
      <div data-testid="account-page">
        <table className={classes.table__top}>
          <thead>
            <tr>
              <th className={classes.th__top}>Номер заказа</th>
              <th className={classes.th__top}>Дата</th>
              <th className={classes.th__top}>Стоимость</th>
              <th className={classes.th__top}>Оплата</th>
              <th className={classes.th__top}>Статус</th>
            </tr>
          </thead>
        </table>
        {orders}
      </div>
    );
  }
};

export default Account;
