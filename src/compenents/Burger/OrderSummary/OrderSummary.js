import React from "react";
import Aux from "../../../Hoc/Auxiliar/Auxiliar";
import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {
  // This could be a functional component, doest have to be a class
  componentDidUpdate(){
    console.log('OrderSummary DidUpdate');
  }
  render(){
    const ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}
          >{igKey}</span>:
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with following ingredients</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p><strong>Total Price:{this.props.price.toFixed(2)} AO</strong></p>
        <p>Continue to Checkout ?</p>
        <Button clicked={this.props.purchasaCancel} btnType="Danger">CANCEL</Button>
        <Button clicked={this.props.purchaseContinued} btnType="Success">CONTINUE</Button>
  
      </Aux>
    );

  }
  
};

export default OrderSummary;
