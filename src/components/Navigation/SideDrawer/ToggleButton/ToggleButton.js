import React from "react";
import classes from './ToggleButton.module.css';
const toggleBtn = (props) => (
    <div className={classes.ToggleButton} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default toggleBtn;