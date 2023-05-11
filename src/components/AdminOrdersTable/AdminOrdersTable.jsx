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
    <>
      <AdminOrderHeader
        order={order}
        onHiddenHandler={onHiddenHandler}
        isBodyHidden={isBodyHidden}
      />
      <hr className={classes.line}></hr>
      {!isBodyHidden && <AdminOrderBody order={order} />}
    </>
  );
};

export default AdminOrdersTable;
