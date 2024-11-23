import React, { useState } from "react"; // Importing useState from React
import "./App.css";
import { Header } from './Component/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Component/Home'; // Assuming there's a Home component
import { Cart } from './Component/Cart'; // Assuming there's a Cart component

function App() {
  const [count, setCount] = useState(0); // useState correctly imported and used

  return (
    <BrowserRouter>
      <Header count={count} setCount={setCount} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home count={count} setCount={setCount} />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
