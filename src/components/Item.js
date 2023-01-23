
import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  function handleAddToCart(){
    setInCart((inCart) => !inCart)
  }


  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
      <button className="add" onClick={handleAddToCart}>Add to Cart</button>
    </li>
  );
  
}

export default Item;
