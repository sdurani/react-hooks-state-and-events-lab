import React from "react";
import {useState} from "react";


function Item({ name, category }) {

  const [addToCart, setAddToCart] = useState(false)

  function toggleCart() {
    setAddToCart(!addToCart)
  }

  return (
    <li className={addToCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleCart} className={addToCart ? "remove" : "add"}>{addToCart ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
