import React, { useEffect, useState } from "react";
import classes from "./Dropdown.module.css";
import { ReactComponent as DropdownArrow } from "../../assets/select.svg";

const Dropdown = ({ optionsList, onClick, title }) => {
  const [selectedOption, setSelectedOption] = useState(optionsList[0]);
  const [contentIsActive, setContentIsActive] = useState(false);
  const [options, setOptions] = useState();

  useEffect(() => {
    setOptions(
      optionsList.map((option) => {
        return (
          <li
            className={
              String(option) === String(selectedOption)
                ? `${classes.option} ${classes["option--active"]}`
                : classes.option
            }
            onClick={(event) => optionClickHandler(event)}
            key={option}
          >
            {option}
          </li>
        );
      })
    );
  }, [selectedOption, optionsList]);

  const clickListener = (event) => {
    if (event.target.className !== classes["select-btn"]) {
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

  const optionClickHandler = (event) => {
    setSelectedOption(event.target.innerText);
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <div className={classes.wrapper}>
        <p className={classes.title}>{title}</p>
      <div className={classes["select-btn"]} onClick={buttonClickHandler}>
        <span>{selectedOption}</span>
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

export default Dropdown;
