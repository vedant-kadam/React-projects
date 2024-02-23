import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
const CartButton = (props) => {
  const cartTotalQty = useSelector((state) => state.cart.totalQty);
  const uiEventDispatch = useDispatch();
  function toggleCart() {
    uiEventDispatch(uiActions.toggleCart());
  }
  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotalQty}</span>
    </button>
  );
};

export default CartButton;
