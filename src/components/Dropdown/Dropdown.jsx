import React, { useEffect, useState } from "react";
import classes from "./Dropdown.module.css";
import { ReactComponent as DropdownArrow } from "../../assets/select.svg";

const Dropdown = ({ optionsList, onClick, title, placeholder, name, reload}) => {
  optionsList = optionsList ? optionsList : [""];
  const [contentIsActive, setContentIsActive] = useState(false);
  const [options, setOptions] = useState();

  const [selectedOption, setSelectedOption] = useState(
    placeholder || optionsList[0]
  );


    useEffect(() => {
      if (reload) {
        setSelectedOption(placeholder || optionsList[0])
      }
    }, [reload, placeholder, optionsList])


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
            data-name={name ? name : null}
          >
            {option}
          </li>
        );
      })
    );
    // eslint-disable-next-line
  }, []);

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

  const optionClickHandler = (event) => {
    setSelectedOption(event.target.innerText);
    if (onClick) {
      onClick(event);
    }
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
          placeholder && selectedOption === placeholder
            ? { color: "rgba(115, 123, 152, 1)" }
            : {}
        }
      >
        {selectedOption}
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
