import React, { useState } from "react";
import "../Styles/dashboard.css";
import "../Styles/rightContainer.css";

function DashboardRightContainer({ cartItem, increaseItem, decreaseItem }) {
  const totalPrice = cartItem.reduce((total, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return total + price * item.quantity;
  }, 0);

  return (
    <>
      <div className="right-container">
        <h2>Cart</h2>
        {cartItem.length === 0 ? (
          <p>cart Item is empty</p>
        ) : (
          cartItem.map((item, index) => {
            return (
              <>
                <div className="resultItem" key={index}>
                  <span>
                    <img src={item.image} alt={item.name} />
                  </span>
                  <span className="name">{item.name}</span>
                  <span>Price: {item.price}</span>
                  <button onClick={() => increaseItem(item)} className="btn">
                    +
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => decreaseItem(item)} className="btn">
                    -
                  </button>
                </div>
              </>
            );
          })
        )}
        <p>Total- ${totalPrice}</p>
      </div>
    </>
  );
}

export default DashboardRightContainer;
