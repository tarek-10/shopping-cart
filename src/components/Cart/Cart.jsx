import React from "react";
import "./Cart.css";
function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {cartItems.length == 0 ? (
          "Empty Cart"
        ) : (
          <p> There is {cartItems.length} Item In Your Cart</p>
        )}
      </div>
      {cartItems.map((item) => (
        <div className="cart-items">
          <img src={item.imageUrl} alt={item.title} />
          <div className="cart-info">
            <div>
              <p>title:{item.title}</p>
              <p>Qty: {item.qty}</p>
              <p>price:${item.price}</p>
            </div>
          </div>
          <button className="cart-btn" onClick={() => removeFromCart(item)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
