import React from 'react'
import classes from './CalendarBody.module.css'
import DatesTable from './dates-table/DateTable';
import TitleRow from './title-row/TitleRow';


const CalendarBody = (props) => {


    return (
        <div className={classes.wrapper}>
            <TitleRow
            />
            <DatesTable
                {...props}
            />
        </div>
    )
}

export default CalendarBody