import React from "react"; // No need for useState here since it's not used
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = ({ count, setCount }) => {
  return (
    <div className="header-parent-container">
      <div className="navbar">
        <div className="logo">FOOD CART</div>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Removed extra spacing */}
          </li>
          <li>
            <div className="view-cart">
              {count !== 0 && <div className="count">{count}</div>} {/* Fixed equality operator */}
              <Link to="/Cart">View Cart</Link> {/* Corrected the path */}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
