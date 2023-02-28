import React, {useState} from "react";
import Item from "./Item";

function ShoppingList( { items } ) {

  const [selectedCategory, setSelected] = useState("All")


  function categories(e) {
    setSelected(e.target.value)
  }

    
  const filterCategory = items.filter((item) => {
    if (selectedCategory === "All"){
      return true
    }else {
      return selectedCategory === item.category
    }
  }) 
     console.log(filterCategory)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter"  onChange={categories}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
