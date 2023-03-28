import React from 'react'
import classes from "./ConfirmButton.module.css"

const ConfirmButton = ({type, text, ...props}) => {
    return (
        <button id="sign-in-button" type={type} {...props} className={classes.confirmation}>
            {text}
        </button>
    );
};

export default ConfirmButton