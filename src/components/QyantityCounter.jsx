const QuantityCounter = ({ quantity, setQuantity }) => {
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="counter-Container">
      <button className="counter-button" onClick={decreaseQuantity}>
        -
      </button>
      {quantity}
      <button className="counter-button" onClick={increaseQuantity}>
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
