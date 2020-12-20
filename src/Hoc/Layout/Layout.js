import React from "react";
import classes from "./Layout.module.css";
import Aux from "../Auxiliar/Auxiliar";
import Toolbar from "../../compenents/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../compenents/Navigation/Sidedrawer/Sidedrawer";

class Layout extends React.Component {
  state = {
    showSideDrawer: true,
  };
  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  sideDrawerToggleHandler =()=>{
      this.setState((prevState)=>{
          return {showSideDrawer:!prevState.showSideDrawer}

      });
  }
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}
        />
        <div>Toolbar,SideDrawer,BackDrop</div>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
