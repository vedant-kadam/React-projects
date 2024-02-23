import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => {
          return (
            <CartItem
              item={{
                title: item.name,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
                id: item.id,
                key: item.id,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
