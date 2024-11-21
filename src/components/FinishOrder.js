import React from "react";

export default function FinishOrder({ onConfirmOrder, onNewOrder }) {
  const total = onConfirmOrder.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  return (
    <div className="confirmed-order overlay">
      <div className="order">
        <img src="../images/icon-order-confirmed.svg" />
        <h2>Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>
        <div className="container-order">
          {onConfirmOrder.map((item, index) => (
            <div className="productCart" key={index}>
              <div className="item-order">
                <img
                  className="image-order"
                  src={`${item.image.mobile}`}
                  alt={item.name}
                />
                <div>
                  {<h3 className="productName">{item.name}</h3>}
                  <span className="item-quantity">{item.quantity}x</span>
                  {<span className="unitValue">@${item.price.toFixed(2)}</span>}
                </div>
              </div>
              {
                <span className="totalValue">
                  ${(item.quantity * item.price.toFixed(2)).toFixed(2)}
                </span>
              }
            </div>
          ))}
          <div className="cart-total">
            <span>Order Total </span>
            <h3>${total.toFixed(2)}</h3>
          </div>

          <button className="confirm-order" onClick={() => onNewOrder()}>
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
}
