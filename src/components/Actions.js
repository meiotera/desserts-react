import React from "react";

export default function Actions({ count, handleAddItem, onRemoveItem }) {
  return (
    <div className="actions">
      {count > 0 ? (
        <div className="incdec">
          <span className="button" onClick={onRemoveItem}>
            <img
              src="../images/icon-decrement-quantity.svg"
              alt="icon decrement"
            />
          </span>
          <span>{count}</span>
          <span className="button" onClick={handleAddItem}>
            <img
              src="../images/icon-increment-quantity.svg"
              alt="icon increment"
            />
          </span>
        </div>
      ) : (
        <button onClick={handleAddItem} className="addCart">
          <img src="../images/icon-add-to-cart.svg" alt="cart-icon" />
          Add to Cart
        </button>
      )}
    </div>
  );
}
