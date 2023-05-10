import React, { useState } from "react";
import classes from "./AdminOrdersTable.module.css";
import AdminOrderHeader from "../AdminOrderHeader/AdminOrderHeader";
import AdminOrderBody from "../AdminOrderBody/AdminOrderBody";

const AdminOrdersTable = ({ order }) => {
  const [isBodyHidden, setIsBodyHidden] = useState(true);

  const onHiddenHandler = () => {
    setIsBodyHidden((prev) => !prev);
  };

  return (
    <div className={classes.container}>
      <table className={classes.table__top}>
        <thead>
          <tr>
            <th className={classes.th__top}>Номер заказа</th>
            <th className={classes.th__top}>Дата</th>
            <th className={classes.th__top}>Стоимость</th>
            <th className={classes.th__top}>Оплата</th>
            <th className={classes.th__top}>Статус</th>
          </tr>
          <AdminOrderHeader
            order={order}
            onHiddenHandler={onHiddenHandler}
            isBodyHidden={isBodyHidden}
          />
        </thead>
      </table>
      {!isBodyHidden && <AdminOrderBody order={order} />}
    </div>
  );
};

export default AdminOrdersTable;
