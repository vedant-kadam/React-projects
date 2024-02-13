import { createContext, useReducer } from "react";

const defaultCartData = {
  items: [],
  addItem: (item) => {},
  removeItem: () => {},
  clearCart: () => {},
};

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: () => {},
  clearCart: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD") {
    const existingCartIndex = state.items.findIndex(
      (item) => item.id == action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartIndex > -1) {
      const exisitngITem = state.items[existingCartIndex];
      const updatedItem = {
        ...exisitngITem,
        quantity: exisitngITem.quantity + 1,
      };
      updatedItems[existingCartIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  } else if (action.type === "REMOVE") {
    const existingCartIndex = state.items.findIndex(
      (item) => item.id == action.id
    );
    const exisitingItem = state.items[existingCartIndex];
    const existingItems = [...state.items];
    if (exisitingItem.quantity === 1) {
      existingItems.splice(existingCartIndex, 1);
    } else {
      const updatedItem = {
        ...exisitingItem,
        quantity: exisitingItem.quantity - 1,
      };
      existingItems[existingCartIndex] = { ...updatedItem };
    }
    return { ...state, items: existingItems };
  } else if (action.type === "CLEAR") {
    return { ...state, items: [] };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD", item: item });
  }
  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE", id: id });
  }

  function clearCart() {
    dispatchCartAction({ type: "CLEAR" });
  }
  const cartContext = {
    items: cart.items,
    addItem: addItem,
    removeItem: removeItem,
    clearCart: clearCart,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
