import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = false ? "App dark" : "App light"
  const [theme, setTheme] = useState(true)


  function changeTheme(){
    setTheme(!theme);
    console.log("changedTheme")
  }

  return (
    <div className={appClass}>
    <div  className={theme? "App light" : "App dark" }/>
      <header>
        <h2>Shopster</h2>
        <button>Dark Mode</button>
        <button onClick={changeTheme}> Dark Mode</button>
      </header>
      <ShoppingList items={itemData}/>

    </div>
    
  );
}

 export default App;

