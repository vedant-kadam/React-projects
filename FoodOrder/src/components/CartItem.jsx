import React from "react";
import { currencyFormatter } from "../utils/utils";

const CartItem = ({ name, quatity, price, onDecrease, onIncrease }) => {
  return (
    <li className="cart-item">
      <p>
        {name} - {quatity} X {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quatity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
};

export default CartItem;
