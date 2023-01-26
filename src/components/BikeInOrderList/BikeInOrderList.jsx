import React from "react";
import { useSelector } from "react-redux";
import dayBetween from "../../utils/dayBetween/dayBetween";
import classes from "./BikeInOrderList.module.css";

const BikeInOrderList = ({
  id,
  size,
  booked,
  image,
  type,
  name,
  price,
  description,
}) => {
  const dateStart = useSelector((state) => state.calendar.dateStart);
  const dateFinish = useSelector((state) => state.calendar.dateFinish);

  return (
    <tr className={classes.row}>
      <td className={classes.firstColumn}>
        <img className={classes.image} src={image} alt="small bike"></img>
      </td>
      <td>
        <p className={classes.description}>
          {description} {name.mark} {name.model} {size}”
        </p>
      </td>
      <td>
        <input
          className={classes.input}
          type="checkbox"
          name={`${id} helmet`}
          value="helmet"
        />
      </td>
      <td>
        <input
          className={classes.input}
          type="checkbox"
          name={`${id} flashlighter`}
          value="helmet"
        />
      </td>
      <td>
        <input
          className={classes.input}
          type="checkbox"
          name={`${id} locker`}
          value="helmet"
        />
      </td>
      <td className={classes["price-cell"]}>
        <p className={classes.price}>{price * dayBetween(dateStart, dateFinish)} AED</p>
      </td>
    </tr>
  );
};

export default BikeInOrderList;
