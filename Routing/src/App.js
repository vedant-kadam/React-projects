import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import MainNavigation from "./componets/MainNav";
import Root from "./pages/Root";
import Error from "./pages/Error";
import ProductDetailsPage from "./pages/ProductDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:productId", element: <ProductDetailsPage /> },
    ],
  },
]);
function App() {
  return (
    <>
      {/* <MainNavigation /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
