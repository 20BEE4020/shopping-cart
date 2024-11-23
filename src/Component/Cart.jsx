import React, { useState } from "react";
import "./product.css";
import data from "../assets/products.json";


export const Cart = () => {
  const [products] = useState(data);

  return (
    <div className="cart-container">
      {products.map((product) => (
        <div>
          {product.in_cart && 
            <div className="product">
              <div className="img">
                <img src={product.pic} alt={product.name} />
              </div>
              <div className="details">
                <h3>{product.name.length > 21 ? product.name.substring(0, 20) + ".." : product.name}</h3>
                <p>Price Rs: {product.amt}</p>
              </div>
            </div>
          }
        </div>
      ))}
    </div>
  );
};
