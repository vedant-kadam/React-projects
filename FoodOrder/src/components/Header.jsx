import React, { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/shoppingCartContext";
import UserProgressContext from "../store/UserProgressContext";

const Header = () => {
  const cartContext = useContext(CartContext);
  const progressContext = useContext(UserProgressContext);

  const totalCartItems = cartContext.items.reduce((total, curr) => {
    total += curr.quantity;
    return total;
  }, 0);

  function handleCartButtonClick() {
    progressContext.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Restaurant Logo" />
        <h1>Food Mania</h1>
      </div>
      <nav>
        <Button onClick={handleCartButtonClick} textOnly>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
