import { useState } from "react";

const NavBar = ({ username, cartItems }) => {
  const isCartFull = cartItems.length > 0;

  return (
    <nav className="NavBar">
      <div className="NavTitle">
        <h1>Groceries App</h1>
      </div>
      <div className="NavUser">
        <span>Hello, {username}!</span>
        <div className="NavCart">
          <img
            src={
              isCartFull ? "/assets/cart-full.png" : "/assets/cart-empty.png"
            }
            width="40"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
