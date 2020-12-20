import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigatiomItem/NavigatiomItem';

const navigatiomItems = ()=>(
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' active> Burger Builder</NavigationItem>
        <NavigationItem > Checkout</NavigationItem>

    </ul>
);
export default navigatiomItems;