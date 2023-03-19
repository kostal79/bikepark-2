import React from 'react'
import classes from './CalendarHeader.module.css'
import InputTimeField from './input-time-field/InputTimeField';
import ArrowButton from '../../../arrow-button/ArrowButton'

const CalendarHeader = (props) => {
    const monthName = props.monthName;

    return (
        <div className={classes.header}>
            <div className={classes.month}>
                <div className={classes.month_name}>{monthName}</div>

                <div className={classes.buttons}>
                    <ArrowButton up={true} onClick={props.nextMonth} />
                    <ArrowButton onClick={props.prevMonth} />
                </div>
            </div>
            <InputTimeField handleTime={props.handleTime} time={props.time} />
        </div>
    );
};

export default CalendarHeader