import React from 'react'
import classes from './CalendarHeader.module.css'
import InputTimeField from './input-time-field/InputTimeField';
import ArrowButton from '../../../Arrow-button/ArrowButton'

const CalendarHeader = ({monthName, nextMonth, prevMonth, handleTime, time }) => {
    return (
        <div className={classes.header}>
            <div className={classes.month}>
                <div className={classes.month_name}>{monthName}</div>

                <div className={classes.buttons}>
                    <ArrowButton up={true} onClick={nextMonth} />
                    <ArrowButton onClick={prevMonth} />
                </div>
            </div>
            <InputTimeField handleTime={handleTime} time={time} />
        </div>
    );
};

export default CalendarHeader