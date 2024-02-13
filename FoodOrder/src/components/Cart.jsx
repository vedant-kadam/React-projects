import React, { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/shoppingCartContext";
import { currencyFormatter } from "../utils/utils";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);

  const cartTotal = cartContext.items.reduce((total, curr) => {
    return total + curr.quantity * curr.price;
  }, 0);

  function handleCartClose() {
    userProgressContext.hideCart();
  }

  function handleCartItemDecrease(id) {
    cartContext.removeItem(id);
  }
  function handleCartItemIncrease(item) {
    cartContext.addItem(item);
  }

  function handleGoToCheckout() {
    userProgressContext.showCheckout();
  }
  return (
    <Modal
      onClose={userProgressContext.progress === "cart" ? handleCartClose : null}
      className="cart"
      open={userProgressContext.progress === "cart"}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartContext.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              quatity={item.quantity}
              price={item.price}
              onDecrease={() => handleCartItemDecrease(item.id)}
              onIncrease={() => handleCartItemIncrease(item)}
            />
          );
        })}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button onClick={handleCartClose} textOnly>
          Close
        </Button>
        {cartContext.items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
