import React, { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/shoppingCartContext";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../utils/utils";
import Input from "./UI/Input";
import Button from "./UI/Button";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
const config = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};
const Checkout = () => {
  const cartContext = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);
  const {
    data,
    isLoading: isSending,
    error,
    clearData,
    sendRequest,
  } = useHttp("http://localhost:3000/orders", config);

  const cartTotal = cartContext.items.reduce((total, curr) => {
    return total + curr.quantity * curr.price;
  }, 0);

  const handleCloseModal = () => {
    userProgressContext.hideCheckout();
  };

  const handleFinish = () => {
    console.log("Finish");
    userProgressContext.hideCheckout();
    cartContext.clearCart();
    clearData();
  };

  const handleChekoutSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const chekOutData = new FormData(event.target);
    const customerdata = Object.fromEntries(chekOutData.entries());
    console.log(customerdata);

    sendRequest(
      JSON.stringify({
        order: {
          items: cartContext.items,
          customer: customerdata,
        },
      })
    );
    // fetch("http://localhost:3000/orders", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     order: {
    //       items: cartContext.items,
    //       customer: customerdata,
    //     },
    //   }),
    // });
  };
  let actions = (
    <>
      <Button type="button" textOnly onClick={handleCloseModal}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );
  if (isSending) {
    actions = <span>Sending Order Data....</span>;
  }
  if (data && !error) {
    return (
      <Modal
        open={userProgressContext.progress === "checkout"}
        onClose={handleFinish}
      >
        <h2>Success</h2>
        <p>Your order was submitted successfully</p>
        <p>
          We wuill get back to you with more details via email and phone with a
          few moments
        </p>
        <p className="modal-actions">
          <Button onClick={handleFinish}> OK</Button>
        </p>
      </Modal>
    );
  }
  return (
    <Modal
      onClose={handleCloseModal}
      open={userProgressContext.progress === "checkout"}
    >
      <form onSubmit={handleChekoutSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount : {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="Email Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        {error && <Error title="Failed to submit order" message={error} />}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
};

export default Checkout;
