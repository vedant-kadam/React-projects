import { cartActions } from "./cartSlice";
import { uiActions } from "./uiSlice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotifiaction({
        status: "pending",
        title: "sending...",
        message: "Sending the cart data!",
      })
    );

    const sendUpdateCartReq = async () => {
      const response = await fetch(
        "https://reduxadv-ecd1f-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendUpdateCartReq();
      dispatch(
        uiActions.showNotifiaction({
          status: "success",
          title: "Success",
          message: "cart data sent successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotifiaction({
          status: "error",
          title: "Error !",
          message: ` ${error}`,
        })
      );
    }
  };
};

export const getCartData = () => {
  return async (dispatch) => {
    // dispatch(
    //   uiActions.showNotifiaction({
    //     status: "pending",
    //     title: "getting...",
    //     message: "getting the cart data!",
    //   })
    // );

    async function getCartItems() {
      const res = await fetch(
        "https://reduxadv-ecd1f-default-rtdb.firebaseio.com/cart.json"
      );
      if (!res.ok) {
        throw new Error("Error: Cannot fetch data");
      }
      const newData = await res.json();
      return newData;
    }
    try {
      const catData = await getCartItems();
      dispatch(
        cartActions.resplaceCart({
          cartItems: catData.cartItems || [],
          totalQty: catData.totalQty,
        })
      );
      //   dispatch(
      //     uiActions.showNotifiaction({
      //       status: "success",
      //       title: "Success",
      //       message: "cart data fetch successfully!",
      //     })
      //   );
    } catch (error) {
      dispatch(
        uiActions.showNotifiaction({
          status: "error",
          title: "Error !",
          message: ` ${error}`,
        })
      );
    }
  };
};
