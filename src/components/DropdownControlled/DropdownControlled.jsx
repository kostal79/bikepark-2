import React, { memo, useMemo, useState } from "react";
import classes from "./DropdownControlled.module.css";
import { ReactComponent as DropdownArrow } from "../../assets/select.svg";

const DropdownControlled = ({
  optionsList,
  onClick,
  title,
  placeholder,
  name,
  value,

}) => {
  value = value ? value : placeholder;
  const [contentIsActive, setContentIsActive] = useState(false);

  
  const options = useMemo(
    () => {
      const optionClickHandler = (event) => {
        onClick(event);
      };
      return optionsList?.map((option) => {
      return (
        <li
          className={
            String(option) === String(value)
              ? `${classes.option} ${classes["option--active"]}`
              : classes.option
          }
          onClick={(event) => optionClickHandler(event)}
          key={option}
          data-name={name ? name : null}
        >
          {option}
        </li>
      );
    })}, [optionsList, name, value, onClick]);

  const clickListener = (event) => {
    if (!event.target.className.includes(classes["select-btn"])) {
      setContentIsActive(false);
    }
  };

  const buttonClickHandler = () => {
    setContentIsActive(!contentIsActive);
    document.addEventListener("click", clickListener, {
      capture: true,
      once: true,
    });
  };


  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>{title}</p>
      <div
        className={
          contentIsActive
            ? `${classes["select-btn"]} ${classes["select-btn--active"]}`
            : classes["select-btn"]
        }
        onClick={buttonClickHandler}
        tabIndex={1}
        style={
          placeholder && value === placeholder
            ? { color: "rgba(115, 123, 152, 1)" }
            : {}
        }
      >
        {value}
        <i
          className={
            contentIsActive
              ? `${classes.icon} ${classes["icon--active"]}`
              : classes.icon
          }
        >
          <DropdownArrow />
        </i>
      </div>
      <div
        className={
          contentIsActive
            ? `${classes.content} ${classes["content--active"]}`
            : classes.content
        }
      >
        <ul className={classes.options}>{options}</ul>
      </div>
    </div>
  );
};

export default memo(DropdownControlled, (prev, next) => {
  if (prev.value !== next.value) return false;
  return true;
});
