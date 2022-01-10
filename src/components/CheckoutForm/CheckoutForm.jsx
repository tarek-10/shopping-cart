import React from "react";
import Input from "../Input/Input";
import "./CheckoutForm.css";
function CheckoutForm(props) {
  return (
    <>
      {props.showForm && (
        <div className="checkout-form">
          <span onClick={() => props.setShowForm(false)}>&times;</span>
          <form onSubmit={props.submittOrder}>
            <div className="form-div">
              <Input
                label="Name:"
                type="text"
                name="name"
                onChange={props.handleChange}
              />
            </div>

            <div className="form-div">
              <Input
                label="Email:"
                type="email"
                name="email"
                onChange={props.handleChange}
              />
            </div>

            <div className="form-div">
              <button className="form-btn" type="submit">
                Checkout
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default CheckoutForm;
