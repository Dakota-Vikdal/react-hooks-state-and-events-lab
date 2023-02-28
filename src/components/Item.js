import {useState} from "react"
import React from "react";

function Item({ name, category }) {  

  const [itemList, setItemList] = useState(false)

  function items() {
    setItemList(itemList => !itemList)
  }

  const variable = itemList ? "in-cart" : ""

  const inCart = itemList ? "Remove from cart" : "Add to cart"

  return (
    <li className={variable}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick = {items} className="add">{inCart}</button>
    </li>
  );
}

export default Item;
