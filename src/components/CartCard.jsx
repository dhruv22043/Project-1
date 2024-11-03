const CartCard = ({ product }) => {
  return (
    <div className="CartCard">
      <img
        src={product.image}
        alt={product.productName}
        width="50"
        height="auto"
      />
      <h4>{product.productName}</h4>
      <p>Quantity: {product.quantity}</p>
      <p>Price: {product.price}</p>
      <p>Total: {product.price * product.quantity}</p>
    </div>
  );
};

export default CartCard;
