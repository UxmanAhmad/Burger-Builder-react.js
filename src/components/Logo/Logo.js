import React from "react";
import BurgerLogo from '../../assests/images/burger-logo.png';
import classes from './Logo.module.css';
const logo = ( props ) => (
    <div className={classes.Logo} 
    // style={{
    //     height: props.height
    // }}
    >
        <img src={BurgerLogo} alt="burger"/>
    </div>
);

export default logo;