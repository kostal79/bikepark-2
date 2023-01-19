import React, { useEffect, useState } from "react";
import classes from "./BikeFilter.module.css";

const BikeFilter = ({ id, title, placeholder, setPlaceholder, optionsList, optionOnClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => {
    setIsActive(!isActive);
  };


  const handleOption = (event) => {
    handleIsActive();
    setPlaceholder(event.target.value)
    optionOnClick(event)
  }

  const options = optionsList.map((option) => {
    return (
      <option className={classes.option} key={option} value={option} onClick={handleOption}>
        {option}
      </option>
    );
  });


  useEffect(() => {
    const hideSelector = (event) => {
      if (event.target.closest(`#${id}`)) {
        return;
      }
      setIsActive(false);
    };

    document.addEventListener("click", hideSelector);
    return () => document.removeEventListener("click", hideSelector);
  }, [id]);

  return (
    <div id={id} className={`${classes.container}`}>
      <p className={classes.title}>{title ? title : "title"}</p>
      <div className={classes.selected} onClick={handleIsActive}>
        <span>{placeholder}</span>
        <div>
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.999451 1L5.99945 6L10.9995 1"
              stroke="#14233D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div
        className={
          isActive
            ? `${classes.select} ${classes["select--active"]}`
            : classes.select
        }
      >
        {options}
      </div>
    </div>
  );
};

export default BikeFilter;
