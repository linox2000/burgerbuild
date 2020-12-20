import React from "react";
import classes from "./Modal.module.css";
import Aux from "../../../Hoc/Auxiliar/Auxiliar";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends React.Component {
  shouldComponentUpdate(nextProps,nexState){
    return nextProps.show !== this.props.show;

  }
  componentDidUpdate(){
    console.log('Modal DidUpdate');
  }
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modelClosed} />
        <div
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
          className={classes.Modal}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
