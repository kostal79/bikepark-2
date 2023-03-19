import React from 'react'
import classes from './InputTimeField.module.css'

const InputTimeField = (props) => {
    const handleTime = props.handleTime;
    const time = props.time;
    return (
        <input
        className={classes.input}
        type="time" onChange={handleTime}
        value={time}
        />
    );
};

export default InputTimeField