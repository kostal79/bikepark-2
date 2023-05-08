import React from "react";
import { ReactComponent as Arrow } from "../../assets/select.svg";
import classes from "./CurrentOrderHeader.module.css";
import { statusColor } from "../../utils/statusColor/statusColor";

const CurrentOrderHeader = ({
  dateOfOrder,
  docNumber,
  orderSum,
  isPaid,
  clickHandler,
  hidden,
  status,
}) => {
  const stColor = statusColor(status);

  return (
    <table className={classes.table__top}>
      <tbody>
        <tr onClick={clickHandler} className={classes.tr__clipable}>
          <td className={classes.td}>
            <Arrow
              className={classes.arrow}
              style={{ transform: hidden ? "rotate(-90deg)" : "none" }}
            />
            {`Заказ № ${docNumber}`}
          </td>
          <td className={classes.td}>{dateOfOrder}</td>
          <td className={classes.td}>{`${orderSum} AED`}</td>
          <td className={classes.td}>{isPaid}</td>
          <td className={classes.td}>
            <div
              className={classes.status}
              style={{ color: stColor, borderColor: stColor }}
            >
              {status}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CurrentOrderHeader;
