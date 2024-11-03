const ProductsContainer = ({ products }) => {
  return (
    <div className="ProductsContainer">
      {products.map((product) => (
        <div key={product.id} className="ProductCard">
          <img
            src={product.image}
            alt={product.productName}
            width="20"
            height="100"
          />
          <h3>{product.productName}</h3>
          <p>Price: {product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsContainer;
