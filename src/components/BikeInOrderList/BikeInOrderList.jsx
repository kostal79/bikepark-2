import React from "react";
import { useSelector } from "react-redux";
import dayBetween from "../../utils/dayBetween/dayBetween";
import classes from "./BikeInOrderList.module.css";
import { Field } from "formik";

const BikeInOrderList = ({
  id,
  size,
  imageRef,
  brend,
  model,
  price,
  type,
}) => {
  const dateStart = useSelector((state) => state.calendar.dateStart);
  const dateFinish = useSelector((state) => state.calendar.dateFinish);

  return (
    <tr className={classes.row}>
      <td className={`${classes.firstColumn} ${classes.td}`}>
        <img className={classes.image} src={imageRef[0]} alt="small bike"></img>
      </td>
      <td className={classes.td}>
        <p className={classes.description}>
          {type} {brend} {model} {size}”
        </p>
      </td>
      <td  className={classes.td}>
        <Field>
          {({ field }) => (
            <input
              {...field}
              name={`helmet`}
              value={id}
              type="checkbox"
              className={classes.input}
            />
          )}
        </Field>
      </td>
      <td  className={classes.td}>
        <Field>
          {({ field }) => (
            <input
              {...field}
              type="checkbox"
              value={id}
              name={`flashlighter`}
              className={classes.input}
            />
          )}
        </Field>
      </td>
      <td  className={classes.td}>
        <Field>
          {({ field }) => (
            <input
              {...field}
              type="checkbox"
              name="locker"
              value={id}
              className={classes.input}
            />
          )}
        </Field>
      </td>
      <td className={`${classes["price-cell"]} ${classes.td}`}>
        <p className={classes.price}>
          {price * dayBetween(dateStart, dateFinish)} AED
        </p>
      </td>
    </tr>
  );
};

export default BikeInOrderList;
