import { useState } from "react";
import products from "../data/products";
import ProductsContainer from "./ProductsContainer";
import ProductCard from "./ProductCard";
import CartContainer from "./CartContainer";

const GroceriesAppContainer = ({ setCartItems, cartItems }) => {
  const [inventory] = useState(products);

  return (
    <div className="GroceriesApp-Container">
      {inventory.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  );
};

export default GroceriesAppContainer;
