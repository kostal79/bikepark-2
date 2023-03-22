import React from 'react'
import { ReactComponent as SelectArrow } from "../../../assets/select.svg";
import classes from "./DropdownDates.module.css"

const DropdownDates = ({className, title, onClick, value}) => {
    return (
        <div className={className}>
          <p className={classes.title}>{title}</p>
          <div className={classes.box} onClick={onClick}>
            <div className={classes.text}>
              {value}
            </div>
            <SelectArrow />
          </div>
        </div>
    );
};

export default DropdownDates