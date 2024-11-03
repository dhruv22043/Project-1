import "./App.css";
import products from "./data/products";
import GroceriesAppContainer from "./components/GroceriesAppContainer";
import NavBar from "./components/NavBar";
import { useState } from "react";
import CartContainer from "./components/CartContainer";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const username = "Dhruv";
  return (
    <>
      <div id="root">
        <NavBar username={username} cartItems={cartItems} />
        <div className="MainContainer">
          <GroceriesAppContainer
            setCartItems={setCartItems}
            cartItems={cartItems}
          />

          <CartContainer cartItems={cartItems} setCartItems={setCartItems} />
        </div>
      </div>
    </>
  );
}

export default App;
