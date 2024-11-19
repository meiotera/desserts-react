import React from "react";
import data from "../../data/data.json";
import Actions from "./Actions";

function Dessert({
  name,
  category,
  price,
  image,
  object,
  onAddItem,
  onRemoveItem,
  count,
}) {
  function handleAddItem() {
    onAddItem(object);
  }

  function handleRemoveItem() {
    onRemoveItem(object);
  }

  return (
    <div className="container-dessert">
      <img
        className={count > 0 ? "border" : ""}
        src={`${image.mobile}`}
        alt={name}
      />

      <Actions
        handleAddItem={handleAddItem}
        onRemoveItem={handleRemoveItem}
        count={count}
      />

      <div className="informations">
        <span className="category">{category}</span>
        <h3 className="productName">{name}</h3>
        <p className="price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}
export default function DessertList({ onAddItem, onRemoveItem, getItemCount }) {
  return data.map((dessert, index) => (
    <Dessert
      key={index}
      name={dessert.name}
      category={dessert.category}
      price={dessert.price}
      image={dessert.image}
      object={dessert}
      onAddItem={onAddItem}
      onRemoveItem={onRemoveItem}
      count={getItemCount(dessert)}
    />
  ));
}
