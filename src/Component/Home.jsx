import React, { useState } from "react";
import "./home.css";
import data from "../assets/products.json";
import { Product } from "./product";

export const Home = ({count,setCount}) => {
  const [products] = useState(data);

  return (
    <div className="product-container">
      {products.map((product) => (
        <Product key={product.id} product={product} count={count} setCount={setCount}/>
      ))}
    </div>
  );
};
