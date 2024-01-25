import { useState } from "react";

import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";

import { CartContextProvider } from "./store/shooping-card-context.jsx";

function App() {

  return (
    <CartContextProvider>
      <Header
        // cart={shoppingCart}
        // onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />
      <Shop />
    </CartContextProvider>
  );
}

export default App;
