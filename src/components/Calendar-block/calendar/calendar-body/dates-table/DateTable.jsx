import React from 'react'
import Day from '../day/Day';
import classes from './DateTable.module.css'

const DatesTable = (props) => {

    let currentArr = props.currentArr;
    let arrayOfDates = currentArr.map((item) => (
        <Day
            item={item}
            key={item}
            {...props}

        />))
    return (
        <div className={classes.days}>
            {arrayOfDates}
        </div>
    );
};

export default DatesTable