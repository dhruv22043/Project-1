import CartCard from "./CartCard";

const CartContainer = ({ cartItems, setCartItems }) => {
  const handleEmptyCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="CartContainer">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No. items in the Cart</p>
      ) : (
        <div>
          <h3>Items in Cart: {cartItems.length}</h3>
          <div className="CartListBtns">
            {cartItems.map((product) => (
              <CartCard key={product.id} product={product} />
            ))}
          </div>

          <button className="RemoveButton" onClick={handleEmptyCart}>
            Empty the Cart
          </button>

          <button className="BuyButton">
            Buy (Total: ${totalPrice.toFixed(2)})
          </button>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
