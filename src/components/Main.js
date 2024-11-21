import React, { useState } from "react";
import TitlePage from "./TitlePage";
import DessertList from "./Dessert";
import Cart from "./Cart";
import FinishOrder from "./FinishOrder";

export default function Main() {
  const [addItemCart, setAddItemCart] = useState([]);
  const [finalizado, setFinalizado] = useState(false);

  function handleAddItemCart(item) {
    setAddItemCart((prevItem) => {
      const existingItem = prevItem.findIndex(
        (cartItem) => cartItem.name === item.name
      );

      if (existingItem !== -1) {
        const updateCart = [...prevItem];
        updateCart[existingItem] = {
          ...updateCart[existingItem],
          quantity: updateCart[existingItem].quantity + 1,
        };
        return updateCart;
      } else {
        return [...prevItem, { ...item, quantity: 1 }];
      }
    });
  }

  function handleNewOrder() {
    setAddItemCart([]);
    setFinalizado(false);
  }

  function handleRemoveItemCart(item) {
    setAddItemCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.name !== item.name)
    );
  }

  function handleRemoveItem(item) {
    setAddItemCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.name === item.name
      );

      if (existingItemIndex !== -1) {
        const updateCart = [...prevCart];

        if (updateCart[existingItemIndex].quantity > 1) {
          updateCart[existingItemIndex] = {
            ...updateCart[existingItemIndex],
            quantity: updateCart[existingItemIndex].quantity - 1,
          };
          // Se a quantidade for maior que 1, diminua
          //updateCart[existingItemIndex].quantity -= 1;
        } else {
          // Caso contrário, remova o item
          updateCart.splice(existingItemIndex, 1);
        }

        return updateCart;
      }

      return prevCart;
    });
  }

  return (
    <main className="main">
      <div className="container-main">
        <TitlePage />

        <div className="disserts-container">
          <DessertList
            onAddItem={handleAddItemCart}
            onRemoveItem={handleRemoveItem}
            getItemCount={(item) => {
              const foundItem = addItemCart.find(
                (cartItem) => cartItem.name === item.name
              );
              return foundItem ? foundItem.quantity : 0;
            }}
          />
        </div>
      </div>
      <Cart
        onItem={addItemCart}
        onRemoveItemCart={handleRemoveItemCart}
        getItemCount={(item) => {
          const foundItem = addItemCart.find(
            (cartItem) => cartItem.name === item.name
          );
          return foundItem ? foundItem.quantity : 0;
        }}
        onFinalizado={setFinalizado}
      />

      {finalizado && (
        <FinishOrder onConfirmOrder={addItemCart} onNewOrder={handleNewOrder} />
      )}
    </main>
  );
}
