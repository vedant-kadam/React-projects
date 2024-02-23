import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import cartStore from "./store/cartStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={cartStore}>
    <App />
  </Provider>
);
