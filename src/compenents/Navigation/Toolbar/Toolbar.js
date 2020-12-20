import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../../compenents/Logo/Logo";
import NavigationItems from "../NavigatiomItems/NavigatiomItems";
import DrawerToggle from '../Sidedrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked}/>
    <div className={classes.Logo}>
    <Logo />

    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
