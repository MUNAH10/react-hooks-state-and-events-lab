import React, {useState} from "react";
import Item from "./Item";


function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleSelectedCategory(event){
    setSelectedCategory(event.target.value)
    // console.log(event.target.value)
  }

  // console.log(selectedCategory)

  const itemsToDisplay = items.filter((item) => (
    selectedCategory === "All" ? true : item.category === selectedCategory
  ))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        
        <select name="filter" onChange={handleSelectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
      
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}

      </ul>
    </div>

  );

}

export default ShoppingList;
