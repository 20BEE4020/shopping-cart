import React from "react";
import "./product.css";

export const Product = ({ product, count, setCount }) => {
  const name = product.name.length > 21 ? product.name.substring(0, 20) + ".." : product.name;

  const addcart = () => {
    product.in_cart=true
    setCount(count + 1);
  };

  const removecart = () => {
    product.in_cart=false
    setCount(count-1);
  };

  return (
    <div className="product">
      <div className="img">
        <img src={product.pic} alt={product.name} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <p>Price Rs: {product.amt}</p>
        {product.in_cart ? ( // Check if count is greater than 0
          <button className="btnRemove" onClick={removecart}>
            Remove from Cart
          </button>
        ) : (
          <button onClick={() => addcart()}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};
