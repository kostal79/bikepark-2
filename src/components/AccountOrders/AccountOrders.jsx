import React from "react";
import { useSelector } from "react-redux";
import { useUserOrders } from "../../hooks/useUserOrders/useUserOrders";
import { getUserId } from "../../redux/slices/authSlice";
import Spinner from "../Spinner/Spinner";
import classes from "./AccountOrders.module.css"

const AccountOrders = ({ activeWindow }) => {
  const uid = useSelector(getUserId);
  const [ordersCurrent, ordersComplited, loaded] = useUserOrders(uid);

  return (
    <div>
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
      <div className={classes.spinner}>{!loaded ? <Spinner /> : null}</div>
      {activeWindow === "current" ? ordersCurrent : ordersComplited}
    </div>
  );
};

export default AccountOrders;
