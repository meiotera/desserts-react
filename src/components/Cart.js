import React from "react";

export default function Cart({ onItem, onRemoveItemCart, onFinalizado }) {
  let totalquantity = 0;
  const total = onItem.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  onItem.map((item) => {
    return (totalquantity += item.quantity);
  });

  return (
    <div id="cart">
      <h3 className="cartTitle">
        Your Cart <span>({totalquantity})</span>
      </h3>

      {totalquantity > 0 ? (
        onItem.map((item, index) => (
          <div className="productCart" key={index}>
            <div>
              {<h3 className="productName">{item.name}</h3>}
              <span className="item-quantity">{item.quantity}x</span>
              {<span className="unitValue">@${item.price.toFixed(2)}</span>}
              {
                <span className="totalValue">
                  ${(item.quantity * item.price.toFixed(2)).toFixed(2)}
                </span>
              }
            </div>
            <button onClick={() => onRemoveItemCart(item)} className="remove">
              <img src="../images/icon-remove-item.svg" alt="icon remove" />
            </button>
          </div>
        ))
      ) : (
        <div className="cart-empty">
          <img src="../images/illustration-empty-cart.svg" alt="icon cart" />
          <p>Your added items will appea herer</p>
        </div>
      )}

      {onItem.length > 0 ? (
        <React.Fragment>
          <div className="cart-total">
            <span>Order Total </span>
            <h3>${total.toFixed(2)}</h3>
          </div>
          <button className="confirm-order" onClick={() => onFinalizado(true)}>
            Confirm Order
          </button>
        </React.Fragment>
      ) : (
        ""
      )}
    </div>
  );
}
