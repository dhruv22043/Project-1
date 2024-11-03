import { useState } from "react";
import QuantityCounter from "./QyantityCounter";

const ProductCard = ({ product, cartItems, setCartItems }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if (quantity <= 0) {
      alert("Please add a quantity before adding to the cart!");
      return;
    }

    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex >= 0) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }

    setQuantity(0);
  };

  return (
    <div className="ProductCard">
      <h3>{product.productName}</h3>
      <img
        src={product.image}
        alt={product.productName}
        width="45"
        height="60"
      />
      <h3>{product.brand}</h3>
      <p>Price: ${product.price}</p>

      <QuantityCounter quantity={quantity} setQuantity={setQuantity} />

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
