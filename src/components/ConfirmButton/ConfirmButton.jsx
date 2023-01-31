import React from 'react'
import classes from "./ConfirmButton.module.css"

const ConfirmButton = ({type, text, ...props}) => {
    return (
        <button type={type} {...props} className={classes.confirmation}>
            {text}
        </button>
    );
};

export default ConfirmButton