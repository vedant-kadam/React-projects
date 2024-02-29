import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Producst 2" },
  { id: "p3", title: "Producst 3" },
];

const Products = () => {
  return (
    <>
      <div>This is the product page</div>
      <ul>
        {PRODUCTS.map((product) => {
          return (
            <li key={product.id}>
              <Link to={product.id}>{product.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Products;
