import React, { useContext } from "react";
import { currencyFormatter } from "../utils/utils";
import Button from "./UI/Button";
import CartContext from "../store/shoppingCartContext";

const MealItem = ({ mealObj }) => {
  const cartContext = useContext(CartContext);
  function handleAddMealToCart() {
    cartContext.addItem(mealObj);
  }
  return (
    <li className="meal-item">
      <article>
        <img
          src={` http://localhost:3000/${mealObj.image}`}
          alt={mealObj.name}
        />
        <div>
          <h3>{mealObj.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(mealObj.price)}
          </p>
          <p className="meal-item-description">{mealObj.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
