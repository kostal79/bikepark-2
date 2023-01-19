import React from 'react'
import classes from "./WhiteButton.module.css"

const WhiteButton = ({width, height, text, fontSize, onClick, uppercase}) => {
    const style = {
        width: `${width}`,
        height: `${height}px`,
        textTransform: `${uppercase ? 'uppercase' : 'none'}`,
        fontSize: `${fontSize ? fontSize : 16}px`,
    }
    return (
        <button className={classes.button} style={style} onClick={onClick}>
            {text}
        </button>
    );
};

export default WhiteButton