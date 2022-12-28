import React from 'react'
import classes from './ArrowButton.module.css'

const ArrowButton = (props) => {
    const up = props.up;
    if (up) {
        return (
            <button className={classes.button} onClick={props.onClick}>
                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.37308 6.10448L6.47755 1L11.582 6.10448" stroke="#297FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        );
    }
    return (
        <button className={classes.button} onClick={props.onClick}>
            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.37308 1.3125L6.47755 6.41698L11.582 1.3125" stroke="#297FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    )
};

export default ArrowButton