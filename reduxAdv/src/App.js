import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/uiSlice";
import Notification from "./components/Notification/Notification";
import { sendCartData } from "./store/cartAction";
import { getCartData } from "./store/cartAction";
let isInitial = true;
function App() {
  const cartVisibilState = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);
  const notificationDispatch = useDispatch();
  const notificationState = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      notificationDispatch(
        sendCartData({ cartItems: cart.cartItems, totalQty: cart.totalQty })
      );
    }
  }, [cart, notificationDispatch]);

  useEffect(() => {
    notificationDispatch(getCartData());
  }, []);

  return (
    <>
      {notificationState && (
        <Notification
          status={notificationState.status}
          title={notificationState.title}
          message={notificationState.message}
        />
      )}
      <Layout>
        {cartVisibilState && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
